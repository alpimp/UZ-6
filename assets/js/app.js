var getParameterByName = function(e) {
    e = e.replace(/[\[\]]/g, "\\$&");
    var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(window.location.href);
    return i && i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
};
$(document).ready((function() {
    var e = getParameterByName("tid"),
        i = getParameterByName("lm_ym_id"),
        n = getParameterByName("lm_tm_id"),
        a = getParameterByName("lm_vk_id"),
        t = getParameterByName("lm_ga_id"),
        l = getParameterByName("lm_fb_id"),
        o = getParameterByName("lm_tt_id"),
        r = getParameterByName("tm_ym_id"),
        s = getParameterByName("tm_tm_id"),
        m = getParameterByName("tm_vk_id"),
        _ = getParameterByName("tm_ga_id"),
        d = getParameterByName("tm_fb_id"),
        u = getParameterByName("tm_tt_id"),
        p = getParameterByName("status"),
        c = getParameterByName("ref"),
        h = getParameterByName("pt"),
        v = getParameterByName("vt"),
        g = getParameterByName("cc");
    $(document).on("click", "#order-now, #order-now-2, #order-now-3, #order-now-4, #order-now-modal", (function() {
        var i = $(this),
            n = i.closest("form"),
            a = new Object;
        if (a.tid = n.find('input[name="tid"]').val() || e, a.name = $.trim(n.find('input[name="name"]').val()), a.phone = $.trim(n.find('input[name="phone"]').val()), a.address = $.trim(n.find('input[name="address_delivery"]').val()), n.find('select[name="api_county_code"]').length && (a.api_county_code = $.trim(n.find('select[name="api_county_code"]').val())), n.find('select[name="api_country_code"]').length && (a.api_county_code = $.trim(n.find('select[name="api_country_code"]').val())), n.find('input[name="address_delivery"]').length && (0 == a.address.length ? n.find('input[name="address_delivery"]').addClass("has-error") : n.find('input[name="address_delivery"]').removeClass("has-error")), a.name.length < 3 ? n.find('[name="name"]').addClass("has-error") : n.find('[name="name"]').removeClass("has-error"), a.phone.length < 6 ? n.find('[name="phone"]').addClass("has-error") : n.find('[name="phone"]').removeClass("has-error"), console.log(a, "order-now"), 0 == n.find(".has-error").length) {
            null != t && t.readyState > 0 && t.readyState < 4 && t.abort();
            var t = $.ajax({
                url: "https://form-test-bep.pages.dev/submit",
                type: "POST",
                data: a,
                dataType: "json",
                success: function(e) {
                    e.result ? $(location).attr("href", e.redirect) : i.prop("disabled", !1)
                }
            })
        }
        return !1
    })), $("form").submit((function() {
        var i = $(this),
            n = i.closest("form"),
            a = new Object;
        if (a.tid = n.find('input[name="tid"]').val() || e, a.name = $.trim(n.find('input[name="name"]').val()), a.phone = $.trim(n.find('input[name="phone"]').val()), a.address = $.trim(n.find('input[name="address_delivery"]').val()), n.find('select[name="api_county_code"]').length && (a.api_county_code = $.trim(n.find('select[name="api_county_code"]').val())), n.find('select[name="api_country_code"]').length && (a.api_county_code = $.trim(n.find('select[name="api_country_code"]').val())), n.find('input[name="address_delivery"]').length && (0 == a.address.length ? n.find('input[name="address_delivery"]').addClass("has-error") : n.find('input[name="address_delivery"]').removeClass("has-error")), a.name.length < 3 ? n.find('[name="name"]').addClass("has-error") : n.find('[name="name"]').removeClass("has-error"), a.phone.length < 6 ? n.find('[name="phone"]').addClass("has-error") : n.find('[name="phone"]').removeClass("has-error"), console.log(a, "form"), 0 == n.find(".has-error").length) {
            null != t && t.readyState > 0 && t.readyState < 4 && t.abort();
            var t = $.ajax({
                url: "https://form-test-bep.pages.dev/submit",
                type: "POST",
                data: a,
                dataType: "json",
                success: function(e) {
                    e.result ? $(location).attr("href", e.redirect) : i.prop("disabled", !1)
                }
            })
        }
        return !1
    }));
    var k = function(e) {
            ! function(i, n, a, t) {
                (n[a] = n[a] || []).push((function() {
                    try {
                        n.yacounter[e] = new Ya.Metrika({
                            id: t,
                            clickmap: !0,
                            trackLinks: !0,
                            accurateTrackBounce: !0,
                            webvisor: !0
                        })
                    } catch (e) {}
                }));
                var l = i.getElementsByTagName("script")[0],
                    o = i.createElement("script"),
                    r = function() {
                        l.parentNode.insertBefore(o, l)
                    };
                o.type = "text/javascript", o.async = !0, o.src = "https://mc.yandex.ru/metrika/watch.js", "[object Opera]" == n.opera ? i.addEventListener("DOMContentLoaded", r, !1) : r()
            }(document, window, "yandex_metrika_callbacks", e)
        },
        f = function(e, i) {
            var n, a, t, l, o, r;
            n = window, a = document, t = "script", n.fbq || (l = n.fbq = function() {
                l.callMethod ? l.callMethod.apply(l, arguments) : l.queue.push(arguments)
            }, n._fbq || (n._fbq = l), l.push = l, l.loaded = !0, l.version = "2.0", l.queue = [], (o = a.createElement(t)).async = !0, o.src = "https://connect.facebook.net/en_US/fbevents.js", (r = a.getElementsByTagName(t)[0]).parentNode.insertBefore(o, r)), fbq("init", e), fbq("track", i)
        },
        y = function(e) {
            ! function(e, i) {
                (window._tmr || (window._tmr = [])).push({
                        id: i,
                        type: "pageView",
                        start: (new Date).getTime()
                    }),
                    function(e, i, n) {
                        if (!e.getElementById(n)) {
                            var a = e.createElement("script");
                            a.type = "text/javascript", a.async = !0, a.id = n, a.src = ("https:" == e.location.protocol ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
                            var t = function() {
                                var i = e.getElementsByTagName("script")[0];
                                i.parentNode.insertBefore(a, i)
                            };
                            "[object Opera]" == i.opera ? e.addEventListener("DOMContentLoaded", t, !1) : t()
                        }
                    }(document, window, "topmailru-code");
                var n = e.createElement("img"),
                    a = e.createElement("div"),
                    t = e.createElement("noscript");
                n.src = "//top-fwz1.mail.ru/counter?id=" + i + ";js=na", n.style = "border:0;", n.height = 1, n.width = 1, a.style = "position:absolute;left:-10000px;", a.appendChild(n), t.appendChild(a), e.body.appendChild(t)
            }(document, e)
        },
        b = function(e) {
            var i = document.head,
                n = document.createElement("script");
            n.src = "https://www.googletagmanager.com/gtag/js?id='" + e + "'";
            var a = document.createElement("script");
            a.append("window.dataLayer = window.dataLayer || []; \n   function gtag(){dataLayer.push(arguments);} \n   gtag('js', new Date()); \n   gtag('config', '" + e + "'); \n"), i.prepend(a), i.prepend(n)
        },
        w = function(e) {
            var i = document.head,
                n = document.createElement("script");
            n.append("!function(){var\nt=document.createElement('script');t.type='text/javascript',t.async=!0,t.\nsrc='https://vk.com/js/api/openapi.js?161',t.onload=function()\n{VK.Retargeting.Init('" + e + "'),VK.Retargeting.Hit()},document.head.appendChild(t)}();\n");
            var a = document.createElement("noscript");
            a.append("<img src='https://vk.com/rtrg?p=" + e + "' style='position: fixed; left:-999px;' alt=''>"), i.prepend(n), i.prepend(a)
        },
        z = function(e) {
            ! function(i, n, a) {
                i.TiktokAnalyticsObject = a;
                var t = i[a] = i[a] || [];
                t.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], t.setAndDefer = function(e, i) {
                    e[i] = function() {
                        e.push([i].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                };
                for (var l = 0; l < t.methods.length; l++) t.setAndDefer(t, t.methods[l]);
                t.instance = function(e) {
                    for (var i = t._i[e] || [], n = 0; n < t.methods.length; n++) t.setAndDefer(i, t.methods[n]);
                    return i
                }, t.load = function(e, i) {
                    var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
                    t._i = t._i || {}, t._i[e] = [], t._i[e]._u = n, t._t = t._t || {}, t._t[e] = +new Date, t._o = t._o || {}, t._o[e] = i || {};
                    var l = document.createElement("script");
                    l.type = "text/javascript", l.async = !0, l.src = n + "?sdkid=" + e + "&lib=" + a;
                    var o = document.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(l, o)
                }, t.load(e), t.page()
            }(window, document, "ttq")
        };
    o.length && 0 == p.length && 0 == c.length && (console.log("lm_tt_id", o), z(o)), a.length && 0 == p.length && 0 == c.length && (console.log("lm_vk_id", a), w(a)), t.length && 0 == p.length && 0 == c.length && (console.log("lm_ga_id", t), b(t)), n.length && 0 == p.length && 0 == c.length && (console.log("lm_tm_id", n), y(n)), l.length && 0 == p.length && 0 == c.length && (console.log("lm_fb_id", l), f(l, "PageView")), i.length && 0 == p.length && 0 == c.length && (console.log("lm_ym_id", i), k(i)), u.length && c.length && (console.log("tm_tt_id", u), z(u)), m.length && c.length && (console.log("tm_vk_id", m), w(m)), _.length && c.length && (console.log("tm_ga_id", _), b(_)), s.length && c.length && (console.log("tm_tm_id", s), y(s)), d.length && c.length && (console.log("tm_fb_id", d), f(d, "PageView")), r.length && c.length && (console.log("tm_ym_id", r), k(r));
    var j;
    v.length && 0 == p.length && 0 == c.length && (j = v) > 0 && setInterval((function() {
        try {
            window.navigator && window.navigator.vibrate ? navigator.vibrate([50, 30, 100, 30, 100, 30, 100, 30, 100, 30, 100, 30, 100, 30, 100, 30, 100, 30, 100, 30]) : navigator.vibrate(0)
        } catch (e) {}
    }), 1e3 * j);
    var N = function(e) {
            const i = {
                al: {
                    line_1: "Ju pëlqeu oferta?",
                    line_2: "Ne do t'ju tregojmë gjithçka rreth këtij produkti, do t'ju ofrojmë kushtet më të mira dhe do t'ju prezantojmë me ofertat e përshtatshme promocionale!",
                    line_3: "Emri",
                    line_4: "Telefoni",
                    line_5: "Më telefononi mua",
                    line_6: "Operatori do t'ju telefonojë pas 15-30 minutash",
                    line_7: "Jeni i sigurt që doni të largoheni nga faqja jonë?"
                },
                am: {
                    line_1: "Ձեզ դու՞ր եկավ այս առաջարկը:",
                    line_2: "Մենք ձեզ ամեն ինչ կպատմենք այս ապրանքի մասին, կառաջարկենք լավագույն պայմանները և կներկայացնենք ձեզ համապատասխան գովազդային առաջարկներ:",
                    line_3: "Անուն",
                    line_4: "Հեռախոս",
                    line_5: "հետ զանգել ինձ",
                    line_6: "Օպերատորը կզանգահարի ձեզ 15-30 րոպեից",
                    line_7: "Դուք վստահ եք, որ ցանկանում եք լքել մեր կայքը։"
                },
                ar: {
                    line_1: "هل أعجبك هذا العرض؟",
                    line_2: "سنخبرك بكل شيء عن هذا المنتج ونقدم لك أفضل  العروض الترويجية المناسبة!",
                    line_3: "الاسم",
                    line_4: "الهاتف",
                    line_5: "اعد الإتصال بي",
                    line_6: "سيعاود عامل الهاتف الاتصال بك في غضون 15-30 دقيقة",
                    line_7: "هل أنت متأكد أنك تريد مغادرة موقعنا؟"
                },
                az: {
                    line_1: "Bu təklifi bəyəndinizmi?",
                    line_2: "Bu məhsul haqqında sizə hər şeyi deyəcəyik, ən yaxşı şərtləri təklif edəcəyik və uyğun  promosyon təklifləri ilə tanış olacağıq!",
                    line_3: "Ad",
                    line_4: "Telefon",
                    line_5: "Mənə zəng",
                    line_6: "Operator sizi 15-30 dəqiqədən sonra size zəng edəcək",
                    line_7: "Saytımızı tərk etmək istədiyinizə əminsinizmi?"
                },
                be: {
                    line_1: "Понравилось это предложение?",
                    line_2: "Мы расскажем Вам все об этом товаре, предложим наилучшее условия и ознакомим с подходящими акционными предложениями!",
                    line_3: "Имя",
                    line_4: "Телефон",
                    line_5: "Перезвонить мне",
                    line_6: "Оператор перезвонит Вам через 15-30 минут",
                    line_7: "Are you sure you want to leave our site?"
                },
                bg: {
                    line_1: "Хареса ли ви това предложение?",
                    line_2: "Ще ви разкажем всичко за този продукт, ще ви предложим най-добрите условия и ще ви запознаем с подходящи промоционални оферти!",
                    line_3: "Име",
                    line_4: "Телефон",
                    line_5: "Обадете ми се",
                    line_6: "Операторът ни ще ви се обади след 15-30 минути",
                    line_7: "Сигурни ли сте, искате да напуснете нашия сайт?"
                },
                bn: {
                    line_1: "এই প্রস্তাব কি আপনাকে প্রভাবিত করেছে?",
                    line_2: "আমরা আপনাকে এই পণ্য সম্পর্কে প্রতিটি এবং সবকিছু বলব, সেরা পরিস্থিতিতে অফার করব এবং আপনাকে উপযুক্ত প্রচারমূলক অফারগুলির সাথে পরিচয় করিয়ে দেব!",
                    line_3: "নাম",
                    line_4: "টেলিফোন",
                    line_5: "আমাকে ফিরে ডাক",
                    line_6: "অপারেটর আপনাকে 15-30 মিনিটের মধ্যে শীঘ্রই কল করবে৷",
                    line_7: "আপনি কি সত্যিই নিশ্চিত যে আপনি আমাদের সাইট ছেড়ে যেতে চান?"
                },
                bs: {
                    line_1: "Da li Vam se svidjela ponuda?",
                    line_2: "Ispričaćemo Vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati Vas sa odgovarajućim promotivnim ponudama!",
                    line_3: "Ime",
                    line_4: "Telefon",
                    line_5: "Pozovi me",
                    line_6: "Operater će Vas pozvati u roku od 15-30 minuta",
                    line_7: "Jeste li sigurni da želite napustiti našu web stranicu? "
                },
                cmn: {
                    line_1: "您喜歡這個優惠嗎?",
                    line_2: "我們將告訴您有所有有關此產品的資訊，提供您最佳的優惠組合並協助您找到最合適的促銷組合 !",
                    line_3: "姓名",
                    line_4: "手機號碼",
                    line_5: "撥電給我",
                    line_6: "操作員會在 15-30 分鐘後撥電給您",
                    line_7: "您確定要離開我們的網站嗎？"
                },
                cnr: {
                    line_1: "Da li vam se svidela ova ponuda?",
                    line_2: "Reći ćemo vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati vas sa odgovarajućim promocijama!",
                    line_3: "Ime",
                    line_4: "Telefon",
                    line_5: "Nazovite me",
                    line_6: "Operater će vas nazvati za 15-30 minuta",
                    line_7: "Jeste li sigurni da želite napustiti našu web stranicu?"
                },
                cs: {
                    line_1: "Líbila se vám tato nabídka?",
                    line_2: "Řekneme vám vše o tomto produktu, nabídneme nejlepší podmínky a představíme vám vhodné akční nabídky!",
                    line_3: "Jméno",
                    line_4: "Telefon",
                    line_5: "Zavolejte mi zpět",
                    line_6: "Operátor vám zavolá zpět za 15-30 minut",
                    line_7: "Opravdu chcete opustit naše stránky?"
                },
                de: {
                    line_1: "Interessiert Sie dieses Angebot?",
                    line_2: "Wir informieren Sie ausführlich darüber, bieten Ihnen die besten Konditionen und finden passende Angebote für Sie!",
                    line_3: "Name",
                    line_4: "Telefon",
                    line_5: "Rufen Sie mich zurück",
                    line_6: "Die Mitarbeiterin wird Sie in 15-30 Minuten zurückrufen",
                    line_7: "Sind Sie sicher, dass Sie unsere Website verlassen wollen?"
                },
                el: {
                    line_1: "Σας άρεσε αυτή η προσφορά;",
                    line_2: "Θα σας πούμε τα πάντα για αυτό το προϊόν, θα προσφέρουμε τις καλύτερες συνθήκες και θα σας ενημερώσουμε σχετικά με τις προσφορές που υπάρχουν!",
                    line_3: "Όνομα",
                    line_4: "Τηλέφωνο",
                    line_5: "Ξανακαλέστε με",
                    line_6: "Θα σας ξανακαλέσουν από το τηλεφωνικό κέντρο σε 15-30 λεπτά",
                    line_7: "Είστε βέβαιοι ότι θέλετε να αποχωρήσετε από τον ιστότοπό μας;"
                },
                en: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                es: {
                    line_1: "¿Le gustó esta oferta?",
                    line_2: "¡Le diremos todo sobre este producto, le ofreceremos las mejores condiciones y le ofreceremos ofertas promocionales adecuadas!",
                    line_3: "Nombre",
                    line_4: "Teléfono",
                    line_5: "Llámenos",
                    line_6: "El operador le devolverá la llamada en 15-30 minutos",
                    line_7: "¿Esta seguro de que que quiere salir del portal?"
                },
                et: {
                    line_1: "Kas Teile meeldis see pakkumine?",
                    line_2: "Räägime Teile selle toote kohta kõik, pakume parimaid tingimusi ja tutvustame Teile sobivaid sooduspakkumisi!",
                    line_3: "Nimi",
                    line_4: "Telefon",
                    line_5: "Helista mulle tagasi",
                    line_6: "Operaator helistab Teile tagasi 15-30 minuti pärast",
                    line_7: "Kas Te olete kindel, et soovite meie leheküljelt lahkuda?"
                },
                fa: {
                    line_1: "آیا این پیشنهاد را دوست داشتید؟",
                    line_2: "ما همه چیز را در مورد این محصول به شما می گوییم، بهترین شرایط را ارائه می دهیم و پیشنهادهای تبلیغاتی مناسب را به شما معرفی می کنیم!",
                    line_3: "نام",
                    line_4: "تلفن",
                    line_5: "به من زنگ بزن",
                    line_6: "اپراتور در عرض 15-30 دقیقه با شما تماس خواهد گرفت",
                    line_7: "آیا اطمینان دارید که می‌خواهید سایت ما را ترک کنید؟"
                },
                fi: {
                    line_1: "Pidätkö tästä tarjouksesta?",
                    line_2: "Kerromme sinulle lisää tästä tuotteesta, tarjoamme parhaita ehtoja ja tutustutamme sinut sopiviin kampanjatarjouksiin!",
                    line_3: "Nimi",
                    line_4: "Puhelin",
                    line_5: "Soita minulle takaisin",
                    line_6: "Operaattori soittaa sinulle takaisin 15-30 minuutin päästä",
                    line_7: "Oletko varma, että haluat poistua sivustoltamme?"
                },
                fl: {
                    line_1: "Nagustuhan mo ba ang alok na ito?",
                    line_2: "Sasabihin namin sa iyo ang lahat tungkol sa produktong ito. Mag-aalok din kami ng mga kapaki-pakinabang na mga produkto at mga produktong nakapromo!",
                    line_3: "Pangalan",
                    line_4: "Telepono",
                    line_5: "Makipag-ugnay sa amin",
                    line_6: "Tatawagan ka ng operator sa loob ng 15-30 minuto",
                    line_7: "Sigurado ka bang gusto mong umalis sa aming site?"
                },
                fr: {
                    line_1: "Vous avez aimé cette offre?",
                    line_2: "Nous vous dirons tout sur ce produit, vous proposerons les meilleures conditions et vous présenterons des offres promotionnelles adaptées!",
                    line_3: "Nom",
                    line_4: "Téléphone",
                    line_5: "Me rappeler",
                    line_6: "L'opérateur vous rappellera dans 15 à 30 minutes",
                    line_7: "Êtes-vous sûr  que vous voulez quitter notre site?"
                },
                ga: {
                    line_1: "Like the offer?",
                    line_2: "We'll tell you more about the product, propose the best possible terms and introduce you to the relevant discount offers!",
                    line_3: "Name",
                    line_4: "Phone number",
                    line_5: "Call me back",
                    line_6: "The operator will call you in 15-30 minutes",
                    line_7: "Are you sure you want to leave this website?"
                },
                he: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                hi: {
                    line_1: "आपको यह प्रस्ताव पसंद आया है?",
                    line_2: "हम आपको इस वस्तु के बारे में सब कुछ बताएँगे, सबसे अच्छी शर्तें पेश करेंगे और उपयुक्त प्रचारों से परिचित कराएँगे!",
                    line_3: "नाम",
                    line_4: "फ़ोन नंबर",
                    line_5: "मुझे फ़ोन किजिए",
                    line_6: "ऑपरेटर आपको 15-30 मिनट में फ़ोन करेगा",
                    line_7: "क्या आपको विश्वास है कि आप हमारी साइट को छोड़ना चाहते हैं?"
                },
                hr: {
                    line_1: "Svidjela vam se ova ponuda?",
                    line_2: "Reći ćemo vam sve o ovom proizvodu, ponuditi najbolje uvjete i i upoznati s odgovarajućim promocijama!",
                    line_3: "Ime",
                    line_4: "Telefon",
                    line_5: "Nazovite me",
                    line_6: "Operater će vas nazvati za 15-30 minuta",
                    line_7: "Jeste li sigurni da želite napustiti našu web stranicu?"
                },
                hu: {
                    line_1: "Tetszett ez az ajánlat?",
                    line_2: "Mesélünk erről a termékről, felajánljuk a legjobb lehetőségeket és megismertetjük a megfelelő akciós ajánlatainkal!",
                    line_3: "Név",
                    line_4: "Telefon",
                    line_5: "Visszahívást kérek",
                    line_6: "Az operátor 15-20 percen belül visszatelefonál",
                    line_7: "Biztos, hogy el akarja hagyni az oldalt?"
                },
                id: {
                    line_1: "Apakah Anda menyukai tawaran ini?",
                    line_2: "Kami akan memberi tahu Anda segalanya tentang produk ini, menawarkan kondisi yang terbaik, serta memperkenalkan promosi yang sesuai!",
                    line_3: "Nama",
                    line_4: "Nomor HP",
                    line_5: "Hubungi saya",
                    line_6: "Operator kami akan menghubungi Anda dalam 15-30 menit",
                    line_7: "Anda yakin ingin meninggalkan situs kami?"
                },
                it: {
                    line_1: "Vi piace l'offerta?",
                    line_2: "Vi racconteremo tutto su questo prodotto, vi proporremo le condizioni migliori e vi informeremo riguardo le promozioni adatte per voi!",
                    line_3: "Nome",
                    line_4: "Telefono",
                    line_5: "Richiamatemi",
                    line_6: "L'operatore vi richiamerà tra 15-30 minuti",
                    line_7: "Sicuro di voler lasciare il nostro sito?"
                },
                ja: {
                    line_1: "オファーが好きですか？",
                    line_2: "製品についてもっと詳しく教えて、できるだけよい条件を提案して適切なキャンペーン割引申し込みに導入したい！",
                    line_3: "氏名",
                    line_4: "電話番号",
                    line_5: "連絡をくれてください",
                    line_6: "オペレーターは、15～30 分以内にお電話します",
                    line_7: "弊社のサイトを離れたいですか？"
                },
                ka: {
                    line_1: "მოგეწონათ ეს შეთავაზება?",
                    line_2: "ჩვენ მოგიყვებით ყველაფერს ამ პროდუქტის შესახებ, შემოგთავაზებთ საუკეთესო პირობებს და გაგაცნობთ შესაფერის სარეკლამო შეთავაზებებს!",
                    line_3: "სახელი",
                    line_4: "ტელეფონი",
                    line_5: "დამიბრუნე",
                    line_6: "ოპერატორი დაგირეკავთ 15-30 წუთში",
                    line_7: "დარწმუნებული ხართ რომ გსურთ ჩვენი გვერდის დატოვება?"
                },
                kk: {
                    line_1: "Бұл ұсыныс Сізге ұнады ма?",
                    line_2: "Біз Сізге осы өнім туралы бәрін айтып береміз, ең жақсы шарттарды ұсынамыз және қолайлы науқандық ұсыныстармен таныстырамыз!",
                    line_3: "Аты",
                    line_4: "Телефон",
                    line_5: "Маған қайта қоңырау шалыңыз",
                    line_6: "Оператор Сізге 15-30 минуттан кейін қайта қоңырау шалады",
                    line_7: "Сіз біздің сайттан кеткіңіз келетініне сенімдісіз бе?"
                },
                km: {
                    line_1: "តើអ្នកពេញចិត្តការផ្ដល់ជូនមួយនេះដែរឬទេ?",
                    line_2: "យើងនឹងប្រាប់រឿងគ្រប់យ៉ាងអំពីផលិតផលមួយនេះទៅអ្នក ផ្ដល់ជូនលក្ខខណ្ឌល្អបំផុតសម្រាប់អ្នក និងណែនាំអ្នកពីការផ្ដល់ជូនប្រូម៉ូសិនដែលសក្ដិសមសម្រាប់អ្នក!",
                    line_3: "ឈ្មោះ",
                    line_4: "ទូរសព្ទ",
                    line_5: "សូមតេត្រឡប់មកខ្ញុំវិញ",
                    line_6: "អ្នកសម្របសម្រួលនឹងតេទៅអ្នកវិញក្នុងរយៈពេលពី15ទៅ30នាទីខាងមុខ",
                    line_7: "តើអ្នកប្រាកដថាចង់ចាកចេញពីគេហទំព័ររបស់យើងទេ?"
                },
                ko: {
                    line_1: "제안이 마음에 드셨나요?",
                    line_2: "저희는 이 제품에 대한 모든 것을 알려드리고 최상의 조건을 제시하며 적절한 프로모션 제안을 소개할 겁니다!",
                    line_3: "이름",
                    line_4: "전화 번호",
                    line_5: "전화 받기",
                    line_6: "15~30분 뒤에 교환원이 다시 전화를 드릴 겁니다",
                    line_7: "사이트에서 나가시겠습니까?"
                },
                ky: {
                    line_1: "Бул сунуш жактыбы?",
                    line_2: "Биз Силерге бул нерсе жөнүндө баарын айтып беребиз, эң жакшы шарттарды сунуштайбыз жана ылайыктуу акционердик сунуштар менен тааныштырабыз!",
                    line_3: "Аты",
                    line_4: "Телефон",
                    line_5: "Кайра чалуу",
                    line_6: "Оператор Силерге 15-30 мүнөттөн кийин кайра чала",
                    line_7: "Сиз биздин веб-сайттан кетүүнү каалайсызбы?"
                },
                lo: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                lt: {
                    line_1: "Ar jums patiko šis pasiūlymas?",
                    line_2: "Mes jums viską papasakosime apie šį produktą, pasiūlysime geriausias sąlygas ir supažindinsime su tinkamais reklaminiais pasiūlymais!",
                    line_3: "Vardas",
                    line_4: "Telefonas",
                    line_5: "Perskambinti man",
                    line_6: "Operatorius jums perskambins po 15-30 minučių",
                    line_7: "Esate tikri, kad norite palinkti mūsų tinklapį?"
                },
                lv: {
                    line_1: "Vai Jums patīk šis piedāvājums?",
                    line_2: "Mēs pastāstīsim Jums visu par šo preci, piedāvāsim labākos nosacījumus un iepazīstināsim ar piemērotiem akciju piedāvājumiem!",
                    line_3: "Vārds",
                    line_4: "Tālrunis",
                    line_5: "Atzvanīt man",
                    line_6: "Operators atzvanīs Jums pēc 10-15 minūtēm",
                    line_7: "Vai tiešām vēlaties pamest mūsu vietni?"
                },
                mk: {
                    line_1: "Дали ви се допадна оваа понуда?",
                    line_2: "Ќе добиете исцрпна информациjа за овоj производ, ќе Ви понудиме наjповолни услови и ќе Ве запознаеме со примамливи акциски понуди!",
                    line_3: "Име",
                    line_4: "Телефон",
                    line_5: "Jавете ми се",
                    line_6: "Операторот ќе Ви се jави по 15-30 минути",
                    line_7: "Дали сте сигурни дека сакате да ја напуштите нашата веб-страница?"
                },
                mo: {
                    line_1: "Îți place oferta?",
                    line_2: "Îți vom povesti totul despre acest produs, vom oferi cele mai bune condiții și îți vom prezenta ofertele promoționale potrivite!",
                    line_3: "Nume",
                    line_4: "Telefon",
                    line_5: "Sună-mă",
                    line_6: "Operatorul te va suna în 15-20 de minute",
                    line_7: "Sunteți siguri ca doriți să părăsiți site-ul nostru?"
                },
                ms: {
                    line_1: "Adakah anda menyukai tawaran ini?",
                    line_2: "Kami akan memberitahu anda segala-galanya tentang produk ini, menawarkan syarat terbaik dan memperkenalkan promosi yang sesuai!",
                    line_3: "Nama",
                    line_4: "Nombor telefon",
                    line_5: "Hubungi saya",
                    line_6: "Operator kami akan menghubungi anda dalam masa 15-30 minit",
                    line_7: "Adakah Anda pasti mahu meninggalkan laman web kami?"
                },
                my: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                ne: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                nl: {
                    line_1: "Vindt u dit aanbod interessant?",
                    line_2: "We zullen u alles over dit product vertellen,  beste voorwaarden bieden en voor u passende aanbiedingen vinden!",
                    line_3: "Naam",
                    line_4: "Telefoon",
                    line_5: "Bel me terug",
                    line_6: "De operator zal u in 15-30 minuten terugbellen",
                    line_7: "Bent u zeker dat u onze site wilt verlaten?"
                },
                pl: {
                    line_1: "Podobała ci się ta oferta?",
                    line_2: "Opowiemy ci wszystko na temat tego produktu, zaproponujemy najlepsze warunki i przedstawimy odpowiednie oferty promocyjne!",
                    line_3: "Imię",
                    line_4: "Telefon",
                    line_5: "Zadzwoń do mnie",
                    line_6: "Operator oddzwoni w ciągu 15-30 minut",
                    line_7: "Czy na pewno chcesz opuścić naszą stronę?"
                },
                pt: {
                    line_1: "Gostou da oferta?",
                    line_2: "Iremos falar-lhe mais sobre o produto, sugerir as melhores condições possíveis e apresentar as ofertas com descontos relevantes!",
                    line_3: "Nome",
                    line_4: "Número de telefone",
                    line_5: "Ligue-me de volta",
                    line_6: "O operador ligará para você dentro de 15 a 30 minutos",
                    line_7: "Tem certeza de que quer sair do nosso site?"
                },
                ro: {
                    line_1: "Îți place oferta?",
                    line_2: "Îți vom povesti totul despre acest produs, vom oferi cele mai bune condiții și îți vom prezenta ofertele promoționale potrivite!",
                    line_3: "Nume",
                    line_4: "Telefon",
                    line_5: "Sună-mă",
                    line_6: "Operatorul te va suna în 15-20 de minute",
                    line_7: "Sunteți siguri ca doriți să părăsiți site-ul nostru?"
                },
                ru: {
                    line_1: "Понравилось это предложение?",
                    line_2: "Мы расскажем Вам все об этом товаре, предложим наилучшее условия и ознакомим с подходящими акционными предложениями!",
                    line_3: "Имя",
                    line_4: "Телефон",
                    line_5: "Перезвонить мне",
                    line_6: "Оператор перезвонит Вам через 15-30 минут",
                    line_7: "Вы уверены, что хотите покинуть наш сайт?"
                },
                sk: {
                    line_1: "Páčila sa vám táto naša ponuka?",
                    line_2: "Povieme vám všetko o tomto produkte, ponúkneme najlepšie podmienky a predstavíme vám ďalšie vhodné ponuky v akcii!",
                    line_3: "Meno",
                    line_4: "Telefónne číslo",
                    line_5: "Zavolajte mi späť",
                    line_6: "Operátor vám zavolá späť do 15-30 minút",
                    line_7: "Naozaj chcete opustiť našu stránku?"
                },
                sl: {
                    line_1: "Vam je bila ta ponudba všeč?",
                    line_2: "Povedali vam bomo vse o tem izdelku, ponudili najboljše pogoje in vas seznanili s primernimi akcijskimi ponudbami!",
                    line_3: "Ime",
                    line_4: "Telefon",
                    line_5: "Prosim, pokličite me nazaj",
                    line_6: "Operater vas bo poklical nazaj v 15-30 minutah",
                    line_7: "Ste prepričani, da želite zapustiti naše spletno mesto?"
                },
                sr: {
                    line_1: "Da li vam se svidela ova ponuda?",
                    line_2: "Reći ćemo vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati vas sa odgovarajućim promocijama!",
                    line_3: "Ime",
                    line_4: "Telefon",
                    line_5: "Nazovite me",
                    line_6: "Operater će vas nazvati za 15-30 minuta",
                    line_7: "Sigurno želite da napustite naš sajt?"
                },
                sv: {
                    line_1: "Gillar du detta erbjudande?",
                    line_2: "Vi berättar allt om den här varan. Vi erbjuder dig de bästa villkoren och hittar lämpliga kampanjerbjudanden!",
                    line_3: "Namn",
                    line_4: "Telefon",
                    line_5: "Ring mig tillbaka",
                    line_6: "Operatören ringer upp dig om 15-30 minuter",
                    line_7: "Är du säker på att du vill lämna vår webbplats?"
                },
                sw: {
                    line_1: "Je unapendezwa na toleo hili?",
                    line_2: "Tutakueleza yote kuhusu bidhaa hii, tukupe masharti yatakayokunufaisha na pia tukusaidie kupata chaguo la toleo litakalokufaa.",
                    line_3: "Jina",
                    line_4: "Nambari ya simu",
                    line_5: "Wasiliana nami",
                    line_6: "Kunaye muhudumu atakayekupigia simu kwa muda wa dakika 15-30",
                    line_7: "Je, una uhakika unataka kuondoka tovuti?"
                },
                ta: {
                    line_1: "Did you like this offer?",
                    line_2: "We will tell you everything about this product, offer the best conditions and inform you about the promotions we have!",
                    line_3: "Name",
                    line_4: "Phone",
                    line_5: "Call me back",
                    line_6: "The operator will call you back in 15-30 minutes",
                    line_7: "Are you sure you want to leave our site?"
                },
                tg: {
                    line_1: "Оё ба шумо ин пешниҳод писанд омад?",
                    line_2: "Мо ба шумо дар бораи ин махсулот хамаро баён мекунем, шароитхои аз хама бехтаринро пешкаш мекунем, ва бо пешниходоти таблиготии мувофики шумо буда ошно месозем!",
                    line_3: "Ном",
                    line_4: "Раками телефон",
                    line_5: "Ба ман занг занед",
                    line_6: "Оператор ба шумо баъди 15-30 дакика занг мезанад",
                    line_7: "Шумо дар ҳақиқат мехоҳед саҳифаро тарк кунед?"
                },
                th: {
                    line_1: "ชอบข้อเสนอนี้ไหม",
                    line_2: "เราจะบอกคุณทุกอย่างเกี่ยวกับผลิตภัณฑ์นี้ เราจะเสนอเงื่อนไขที่ดีที่สุดและเสนอโปรโมชั่นที่เหมาะสม!",
                    line_3: "ชื่อ",
                    line_4: "โทรศัพท์",
                    line_5: "โทรกลับ",
                    line_6: "ผู้จัดการจะโทรกลับใน 15-30 นาที",
                    line_7: "คุณแน่ใจว่าต้องการออกจากเว็บไซต์ของเราไหม"
                },
                tr: {
                    line_1: "Bu teklifi beğendiniz mi?",
                    line_2: "Bu ürünle ilgili her şeyi size anlatacağız, en iyi koşulları sunacağız ve uygun promosyon tekliflerini size bilacağız!",
                    line_3: "İsim",
                    line_4: "Telefon",
                    line_5: "Beni tekrar aramak için",
                    line_6: "Operatör sizi 15-30 dakika sonra arayacaktır",
                    line_7: "Sitemizden ayrılmak istediğinize emin misiniz?"
                },
                uk: {
                    line_1: "Сподобався цей товар?",
                    line_2: "Ми розповімо Вам все про цей товар, запропонуємо найкращі умови та ознайомимо з відповідними акційними пропозиціями!",
                    line_3: "Ім'я",
                    line_4: "Телефон",
                    line_5: "Передзвонити мені",
                    line_6: "Оператор передзвонить Вам через 15-30 хвилин",
                    line_7: "Are you sure you want to leave our site?"
                },
                ur: {
                    line_1: "کیا  آپ کو یہ پیشکش پسند آئی؟",
                    line_2: " ہم آپ کو اس مصنوع کے بارے میں سب کچھ بتائیں گے، آپ کو بہترین شرائط کی پیشکش کریں گے اور ایک مناسب تشہیری پیشکش تلاش کرنے میں مدد فراہم کریں گے!",
                    line_3: "نام",
                    line_4: "فون نمبر",
                    line_5: " مجھے واپس کال کریں",
                    line_6: "ایک آپریٹر آپ کو 15 سے 30 منٹ میں واپس کال کرے گا",
                    line_7: "کیا آپ کو یقین ہے کہ آپ ہماری سائٹ کو چھوڑنا چاہتے ہیں؟"
                },
                uz: {
                    line_1: "USHBU TAKLIF SIZGA MAQULMI?",
                    line_2: "Sizga ushbu mahsulot haqida barchasini so’zlab beramiz, sizga eng yaxshi sharoitlarni taklif qilamiz va sizni tegishli reklama takliflari bilan ham tanishtiramiz!",
                    line_3: "Sizning ismingiz",
                    line_4: "Sizning telefon raqamingiz",
                    line_5: "Meni qaytaring",
                    line_6: "Operator sizga 15-30 daqiqada qo'ng'iroq qiladi",
                    line_7: "Are you sure you want to leave our site?"
                },
                vi: {
                    line_1: "Bạn thấy đề nghị này hấp dẫn chứ?",
                    line_2: "Chúng tôi sẽ giới thiệu mọi thông tin sản phẩm, các điều khoản tốt nhất cũng như các chương trình khuyến mãi phù hợp!",
                    line_3: "Tên",
                    line_4: "Số điện thoại",
                    line_5: "Gọi lại cho tôi",
                    line_6: "Chuyên viên sẽ liên lạc với bạn trong 15-30 phút",
                    line_7: "Bạn chắc chắn muốn rời trang?"
                },
                zh: {
                    line_1: "您喜欢这个提议吗？",
                    line_2: "我们将向您介绍所有有关产品的信息，提供最好的条件，及适当的促销优惠！",
                    line_3: "姓名",
                    line_4: "联系电话",
                    line_5: "给我回电话",
                    line_6: "接线员将在15-30分钟内给您回电话",
                    line_7: "您确定要离开我们的网站吗？"
                }
            };
            return i.hasOwnProperty(e) ? i[e] : i.en
        }(function(e) {
            const i = {
                AE: "ar",
                AL: "al",
                AM: "am",
                AR: "es",
                AT: "de",
                AU: "en",
                AZ: "az",
                BA: "bs",
                BD: "bn",
                BE: "nl",
                BF: "fr",
                BG: "bg",
                BH: "ar",
                BO: "es",
                BY: "be",
                CH: "de",
                CI: "fr",
                CL: "es",
                CN: "zh",
                CO: "es",
                CR: "es",
                CY: "el",
                CZ: "cs",
                DE: "de",
                DO: "es",
                DZ: "ar",
                EC: "es",
                EE: "et",
                EG: "ar",
                ES: "es",
                FI: "fi",
                FR: "fr",
                GB: "en",
                GE: "ka",
                GH: "en",
                GN: "fr",
                GR: "el",
                GT: "es",
                HK: "zh",
                HN: "es",
                HR: "hr",
                HU: "hu",
                ID: "id",
                IE: "ga",
                IL: "he",
                IN: "hi",
                IQ: "ar",
                IR: "fa",
                IT: "it",
                JO: "ar",
                JP: "ja",
                KE: "en",
                KG: "ky",
                KH: "km",
                KR: "ko",
                KW: "ar",
                KZ: "kk",
                LA: "lo",
                LB: "ar",
                LK: "ta",
                LT: "lt",
                LV: "lv",
                LY: "ar",
                MA: "ar",
                MD: "mo",
                ME: "cnr",
                MK: "mk",
                ML: "fr",
                MM: "my",
                MX: "es",
                MY: "ms",
                NG: "en",
                NI: "es",
                NL: "nl",
                NP: "ne",
                OM: "ar",
                PA: "es",
                PE: "es",
                PH: "fl",
                PK: "ur",
                PL: "pl",
                PT: "pt",
                QA: "ar",
                RO: "ro",
                RS: "sr",
                RU: "ru",
                SA: "ar",
                SG: "en",
                SI: "sl",
                SK: "sk",
                SN: "fr",
                SV: "es",
                TH: "th",
                TJ: "tg",
                TN: "ar",
                TR: "tr",
                TW: "cmn",
                UA: "uk",
                US: "en",
                UZ: "uz",
                VN: "vi",
                ZA: "en",
                XK: "al"
            };
            return i.hasOwnProperty(e) ? i[e] : "en"
        }(g)),
        T = function() {
            $("#cpa_customModalBlock").removeClass("cpa_modalHidden")
        };
    h.length && 0 == p.length && 0 == c.length && (0 == $("#cpa_customModalBlock").length && $("body").append('<div id="cpa_customModalBlock" class="cpa_customModalBlock cpa_callBackModal cpa_modalHidden"> <div class="cpa_fixedModalBlock"> <div class="cpa_innerModalBlock"> <div class="cpa_modalClose"></div> <div class="cpa_modalContent"> <div class="cpa_modalHeading">' + N.line_1 + '</div> <div class="cpa_modalText">' + N.line_2 + '</div> <div class="cpa_modalForm"> <form> <input type="hidden" name="tid" value="' + e + '"> <input class="cpa_modalDefaultInput" name="name" type="text" placeholder="' + N.line_3 + '"> <input class="cpa_modalDefaultInput" name="phone" type="text" placeholder="' + N.line_4 + '"> <input class="cpa_modalSubmitButton" id="order-now-modal" type="submit" value="' + N.line_5 + '"></form> </div> <div class="spa_modalSubTextBlock"> <div class="cpa_modal_timeIcon"></div> <div class="cpa_modal_subText">' + N.line_6 + '</div> </div> </div> <div class="cpa_modalShadow"></div> </div></div></div>'), $("#cpa_customModalBlock .cpa_modalClose").click((function() {
        $("#cpa_customModalBlock").addClass("cpa_modalHidden"), setTimeout(T, 1e3 * h)
    })), $(document).mouseleave((function(e) {
        e.clientY < 10 && T()
    })), setTimeout(T, 1e3 * h)), e.length && window.history && window.history.pushState && ($(window).on("popstate", (function(i) {
        if ("" !== location.hash.split("#!/")[1]) {
            if ("" === window.location.hash) return location.href = "https://7ba-tracker.online/link/back_news/" + e, setTimeout((function() {
                window.location = "https://7ba-tracker.online/link/back_news/" + e
            }), 0), i.preventDefault(), !1
        }
    })), window.history.pushState("forward", null, "./#" + e))
}));
