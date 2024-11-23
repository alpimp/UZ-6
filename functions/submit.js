const queue = [];
const logFile = [];
const processingInterval = 30 * 60 * 1000; // 30 minutes
const maxProcessingTime = 24 * 60 * 60 * 1000; // 24 hours
const cacheExpiration = 24 * 60 * 60; // 24 hours in seconds

export async function onRequestPost(context) {
  try {
    const response = await handleRequest(context);
    return response;
  } catch (e) {
    console.error(e);
    return new Response("Error sending message", { status: 500 });
  }
}

async function handleRequest({ request, env }) {
  const USE_DYNAMIC_THANK_YOU = false;
  const formData = await request.formData();
  const get_ip = request.headers.get("CF-Connecting-IP");
  const country_code = request.cf.country || 'Unknown';
  const tz = request.cf.timezone || 'Unknown';
  const asn = request.cf.asn || 'Unknown';
  const ref = request.headers.get("referer") || "";
  const date = new Date();
  const timestamp = date.toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: false 
  });

  const sub_id_1 = formData.get("sub_id_1");
  const phone = formData.get("phone");

  // Cache keys
  const subId1Key = `sub_id_1:${sub_id_1}`;
  const phoneKey = `phone:${phone}`;

  // Check cache in KV
  const subId1Cache = await env.CACHE.get(subId1Key);
  const phoneCache = await env.CACHE.get(phoneKey);

  if (subId1Cache !== null || phoneCache !== null) {
    // Skip processing, send only to Notion
    const body = createBody(timestamp, get_ip, country_code, tz, asn, ref, formData, env.api_key, env.id_webmaster, env.id_offer, env.id_source, env.id_stream);
    const responseCode = 200; // Assuming success for Notion push
    const notionResponse = await pushToNotion(body, responseCode, env.NOTION_API_KEY, env.NOTION_DATABASE_ID);
    const thankYouPage = USE_DYNAMIC_THANK_YOU === true ? getThankYouPage(responseCode, body, notionResponse) : await fetchThankYouPage();
    return new Response(thankYouPage, { headers: { 'Content-Type': 'text/html' } });
  } else {
    // Proceed with form processing
    const body = createBody(timestamp, get_ip, country_code, tz, asn, ref, formData, env.api_key, env.id_webmaster, env.id_offer, env.id_source, env.id_stream);
    const body1 = createBody1(get_ip, country_code, formData, env.api_key, env.id_webmaster, env.id_offer, env.id_source, env.id_stream);
    const urlEncodedBody = new URLSearchParams(body1).toString();
    const apiEndpoint = USE_DYNAMIC_THANK_YOU ? 'http://httpbin.org/post' : 'https://api.cpa.house/method/send_order';

    const apiResponse = await Promise.race([
      fetch(apiEndpoint, {
        method: 'POST',
        body: urlEncodedBody,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000)),
    ]);

    const responseCode = apiResponse.status;
    const responseBodyText = await apiResponse.text();
    let responseBody;
    try {
      responseBody = JSON.parse(responseBodyText);
      body.msg = JSON.stringify(responseBody);
    } catch (e) {
      body.msg = `"${responseBodyText}"`;
    }

    if (apiResponse.ok) {
      const notionResponse = await pushToNotion(body, responseCode, env.NOTION_API_KEY, env.NOTION_DATABASE_ID);
      await updateCache(sub_id_1, phone, env.CACHE, cacheExpiration);
      const thankYouPage = USE_DYNAMIC_THANK_YOU === true ? getThankYouPage(responseCode, body, notionResponse) : await fetchThankYouPage();
      return new Response(thankYouPage, { headers: { 'Content-Type': 'text/html' } });
    } else {
      queue.push({ formData, timestamp: Date.now() });
      await processQueue(env, cacheExpiration);
      const notionResponse = await pushToNotion(body, responseCode, env.NOTION_API_KEY, env.NOTION_DATABASE_ID);
      const thankYouPage = USE_DYNAMIC_THANK_YOU === true ? getThankYouPage(responseCode, body, notionResponse) : await fetchThankYouPage();
      return new Response(thankYouPage, { headers: { 'Content-Type': 'text/html' } });
    }
  }
}

async function updateCache(sub_id_1, phone, cache, expiration) {
  if (sub_id_1) {
    await cache.put(`sub_id_1:${sub_id_1}`, '1', { expirationTtl: expiration });
  }
  if (phone) {
    await cache.put(`phone:${phone}`, '1', { expirationTtl: expiration });
  }
}

async function processQueue(env, cacheExpiration) {
  const now = Date.now();
  for (let i = queue.length - 1; i >= 0; i--) {
    const { formData, timestamp } = queue[i];
    if (now - timestamp >= maxProcessingTime) {
      logFile.push({ formData, timestamp, status: 'No response from server' });
      queue.splice(i, 1);
    } else {
      const get_ip = formData.get("get_ip");
      const country_code = formData.get("country_code") || 'Unknown';
      const body1 = createBody1(get_ip, country_code, formData, env.api_key, env.id_webmaster, env.id_offer, env.id_source, env.id_stream);
      const urlEncodedBody = new URLSearchParams(body1).toString();
      const apiEndpoint = USE_DYNAMIC_THANK_YOU ? 'http://httpbin.org/post' : 'https://api.cpa.house/method/send_order';

      try {
        const apiResponse = await fetch(apiEndpoint, {
          method: 'POST',
          body: urlEncodedBody,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const responseBodyText = await apiResponse.text();
        let responseBody;
        try {
          responseBody = JSON.parse(responseBodyText);
          body.msg = JSON.stringify(responseBody);
        } catch (e) {
          body.msg = `"${responseBodyText}"`;
        }

        if (apiResponse.ok) {
          logFile.push({ formData, timestamp, status: 'Success', responseCode: apiResponse.status });
          await updateCache(formData.get("sub_id_1"), formData.get("phone"), env.CACHE, cacheExpiration);
          queue.splice(i, 1);
        } else {
          logFile.push({ formData, timestamp, status: 'Error. Next try in 30 min', responseCode: apiResponse.status });
        }
      } catch (error) {
        // Optionally retry logic can be added here if needed
      }
    }
  }

  if (queue.length > 0) {
    setTimeout(() => processQueue(env, cacheExpiration), processingInterval);
  }
}

function createBody(timestamp, get_ip, country_code, tz, asn, ref, formData, api_key, id_webmaster, id_offer, id_source, id_stream) {
  return {
    timestamp: timestamp,  
    ip_address: get_ip,
    country_code: country_code,
    tz: tz,
    asn: asn,
    alpha_val: formData.get("alpha_val"),
    demo_val: ref,
    display: formData.get("display"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    touch: formData.get("touch"),
    get_ua: formData.get("get_ua"),
    lang: formData.get("lang"),
    api_key: api_key, 
    id_webmaster: id_webmaster, 
    id_offer: id_offer, 
    id_source: id_source, 
    id_stream: id_stream, 
    errors: null,
    msg: "I sent this to the fetch", // This will be updated later
  };
}

function createBody1(get_ip, country_code, formData, api_key, id_webmaster, id_offer, id_source, id_stream) {
  const body = {
    api_key: api_key, 
    id_webmaster: id_webmaster, 
    name: formData.get("name"),
    phone: formData.get("phone"),
    id_offer: id_offer, 
    id_source: id_source, 
    id_stream: id_stream, 
    user_agent: formData.get("get_ua"),
    ip_address: get_ip,
    county_code: country_code,
  };

  for (const [key, value] of formData.entries()) {
    if (key.startsWith('sub_id_')) {
      body[key] = value;
    }
  }

  return body;
}

function getThankYouPage(responseCode, body, notionResponse) {
  const formattedBody = Object.entries(body)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join('');

  const formattedNotionResponse = notionResponse.responseBody ? Object.entries(notionResponse.responseBody)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${JSON.stringify(value)}</p>`)
    .join('') : '';

  const notionErrors = notionResponse.errors ? `<p><strong>Notion API Errors:</strong> ${notionResponse.errors}</p>` : '';

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head><meta charset="UTF-8"><title>Thank You</title></head>
      <body>
        <h1>Thank You!</h1>
        <p>Your response has been recorded.</p>
        <p>Status Code: ${responseCode}</p>
        <h2>Submitted Data:</h2>
        ${formattedBody}
        <h2>Notion API Response:</h2>
        ${formattedNotionResponse}
        ${notionErrors}
      </body>
    </html>`;
}

async function fetchThankYouPage() {
  const response = await fetch('https://uz-6.pages.dev/uz/thanks/');
  if (!response.ok) {
    throw new Error('Failed to fetch thank you page');
  }
  return response.text();
}

function convertToStrings(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      convertToStrings(obj[key]);
    } else {
      obj[key] = obj[key] !== null ? obj[key].toString() : '';
    }
  }
}

async function pushToNotion(body, responseCode, notionApiKey, notionDatabaseId) {
  const notionUrl = `https://api.notion.com/v1/pages`;
  convertToStrings(body);

  const notionBody = {
    parent: { database_id: notionDatabaseId },
    properties: {
      timestamp: { title: [{ text: { content: body.timestamp } }] },
      ip_address: { rich_text: [{ text: { content: body.ip_address } }] },
      alpha_val: { rich_text: [{ text: { content: body.alpha_val } }] },
      demo_val: { rich_text: [{ text: { content: body.demo_val } }] },
      display: { rich_text: [{ text: { content: body.display } }] },
      touch: { rich_text: [{ text: { content: body.touch } }] },
      lang: { rich_text: [{ text: { content: body.lang } }] },
      name: { rich_text: [{ text: { content: body.name } }] },
      phone: { rich_text: [{ text: { content: body.phone } }] },
      tz: { rich_text: [{ text: { content: body.tz } }] },
      asn: { rich_text: [{ text: { content: body.asn } }] },
      get_ua: { rich_text: [{ text: { content: body.get_ua } }] },
      country_code: { rich_text: [{ text: { content: body.country_code } }] },
      api_key: { rich_text: [{ text: { content: body.api_key } }] },
      id_webmaster: { rich_text: [{ text: { content: body.id_webmaster } }] },
      id_offer: { rich_text: [{ text: { content: body.id_offer } }] },
      id_source: { rich_text: [{ text: { content: body.id_source } }] },
      id_stream: { rich_text: [{ text: { content: body.id_stream } }] },
      errors: { rich_text: [{ text: { content: body.errors } }] },
      msg: { rich_text: [{ text: { content: body.msg } }] },
      response_code: { rich_text: [{ text: { content: responseCode.toString() } }] },
    },
  };

  try {
    const response = await fetch(notionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { responseBody: null, errors: `Failed to push data to Notion: ${errorText}` };
    }

    const responseBody = await response.json();
    return { responseBody, errors: null };
  } catch (error) {
    return { responseBody: null, errors: `Error pushing data to Notion: ${error.message}` };
  }
}
