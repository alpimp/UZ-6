const queue = [];
const logFile = [];
const processingInterval = 30 * 60 * 1000; // 30 minutes
const maxProcessingTime = 24 * 60 * 60 * 1000; // 24 hours

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
  const formData = await request.formData();
  const get_ip = request.headers.get("CF-Connecting-IP");
    const country_code = request.cf.country || 'Unknown';
    const tz = request.cf.timezone || 'Unknown';
    const asn = request.cf.asn || 'Unknown';
  const body = createBody(get_ip, country_code, tz, asn, formData, env.api_key, env.id_webmaster, env.id_offer, env.id_source, env.id_stream);

  // Send the form data to the API endpoint
  const apiResponse = await Promise.race([
    fetch('http://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000)),
  ]);

  const responseCode = apiResponse.status;

  if (apiResponse.ok) {
    const thankYouPage = getThankYouPage(responseCode, body);
    await pushToNotion(body, responseCode, env.NOTION_API_KEY, env.NOTION_DATABASE_ID);
    return new Response(thankYouPage, {
      headers: { 'Content-Type': 'text/html' },
    });
  } else {
    queue.push({ formData, timestamp: Date.now() });
    await processQueue(); // Call processQueue here
    const thankYouPage = getThankYouPage(responseCode, body);
    await pushToNotion(body, responseCode, env.NOTION_API_KEY, env.NOTION_DATABASE_ID);
    return new Response(thankYouPage, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

async function processQueue() {
  const now = Date.now();

  for (let i = queue.length - 1; i >= 0; i--) {
    const { formData, timestamp } = queue[i];

    if (now - timestamp >= maxProcessingTime) {
      logFile.push({ formData, timestamp, status: 'No response from server' });
      queue.splice(i, 1);
    } else {
      const body = createBody("", formData, ""); // Modify as necessary

      try {
        const apiResponse = await fetch('http://httpbin.org/post', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });

        if (apiResponse.ok) {
          logFile.push({ formData, timestamp, status: 'Success', responseCode: apiResponse.status });
        } else {
          logFile.push({ formData, timestamp, status: 'Error. Next try in 30 min', responseCode: apiResponse.status });
        }
        queue.splice(i, 1);
      } catch (error) {
        // Optionally retry logic can be added here if needed
      }
    }
  }

  // Schedule the next processing of the queue if there are items left
  if (queue.length > 0) {
    setTimeout(processQueue, processingInterval);
  }
}

function createBody(get_ip, country_code, tz, asn, formData, api_key, id_webmaster, id_offer, id_source, id_stream) {
  return {
    ip_address: get_ip,
    country_code: country_code;
    tz: tz;
    asn: asn;
    alpha_val: formData.get("alpha_val"),
    demo_val: formData.get("demo_val"),
    display: formData.get("display"),
    touch: formData.get("touch"),
    get_ua: formData.get("get_ua"),
    lang: formData.get("lang"),
    api_key: 
    id_webmaster: id_webmaster, 
    id_offer: id_offer, 
    id_source: id_source, 
    id_stream: id_stream, 
    errors: null,
    msg: "I sent this to the fetch",
  };
}

function getThankYouPage(responseCode, body) {
  const formattedBody = Object.entries(body)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join('');

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
      </body>
    </html>`;
}

async function pushToNotion(body, responseCode, notionApiKey, notionDatabaseId) {
  const notionUrl = `https://api.notion.com/v1/pages`;

  const notionBody = {
    parent: { database_id: notionDatabaseId },
    properties: {
      ip_address: { title: [{ text: { content: body.ip_address } }] },
      alpha_val: { rich_text: [{ text: { content: body.alpha_val } }] },
      demo_val: { rich_text: [{ text: { content: body.demo_val } }] },
      display: { rich_text: [{ text: { content: body.display } }] },
      touch: { rich_text: [{ text: { content: body.touch } }] },
      lang: { rich_text: [{ text: { content: body.lang } }] },
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
      response_code: { number: responseCode }, // Include responseCode here
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
      console.error('Failed to push data to Notion:', await response.text());
    }
  } catch (error) {
    console.error('Error pushing data to Notion:', error);
  }
}
