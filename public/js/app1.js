(() => {
  // <stdin>
  var getParameterByName = function(e) {
    e = e.replace(/[\[\]]/g, "\\$&");
    var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(window.location.href);
    return i && i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "";
  };
  $(document).ready(function() {
    var e = getParameterByName("tid"), i = getParameterByName("lm_ym_id"), n = getParameterByName("lm_tm_id"), a = getParameterByName("lm_vk_id"), t = getParameterByName("lm_ga_id"), l = getParameterByName("lm_fb_id"), o = getParameterByName("lm_tt_id"), r = getParameterByName("tm_ym_id"), s = getParameterByName("tm_tm_id"), m = getParameterByName("tm_vk_id"), _ = getParameterByName("tm_ga_id"), d = getParameterByName("tm_fb_id"), u = getParameterByName("tm_tt_id"), p = getParameterByName("status"), c = getParameterByName("ref"), h = getParameterByName("pt"), v = getParameterByName("vt"), g = getParameterByName("cc");
    var N = function(e2) {
      const i2 = {
        al: {
          line_1: "Ju p\xEBlqeu oferta?",
          line_2: "Ne do t'ju tregojm\xEB gjith\xE7ka rreth k\xEBtij produkti, do t'ju ofrojm\xEB kushtet m\xEB t\xEB mira dhe do t'ju prezantojm\xEB me ofertat e p\xEBrshtatshme promocionale!",
          line_3: "Emri",
          line_4: "Telefoni",
          line_5: "M\xEB telefononi mua",
          line_6: "Operatori do t'ju telefonoj\xEB pas 15-30 minutash",
          line_7: "Jeni i sigurt q\xEB doni t\xEB largoheni nga faqja jon\xEB?"
        },
        am: {
          line_1: "\u0541\u0565\u0566 \u0564\u0578\u0582\u055E\u0580 \u0565\u056F\u0561\u057E \u0561\u0575\u057D \u0561\u057C\u0561\u057B\u0561\u0580\u056F\u0568:",
          line_2: "\u0544\u0565\u0576\u0584 \u0571\u0565\u0566 \u0561\u0574\u0565\u0576 \u056B\u0576\u0579 \u056F\u057A\u0561\u057F\u0574\u0565\u0576\u0584 \u0561\u0575\u057D \u0561\u057A\u0580\u0561\u0576\u0584\u056B \u0574\u0561\u057D\u056B\u0576, \u056F\u0561\u057C\u0561\u057B\u0561\u0580\u056F\u0565\u0576\u0584 \u056C\u0561\u057E\u0561\u0563\u0578\u0582\u0575\u0576 \u057A\u0561\u0575\u0574\u0561\u0576\u0576\u0565\u0580\u0568 \u0587 \u056F\u0576\u0565\u0580\u056F\u0561\u0575\u0561\u0581\u0576\u0565\u0576\u0584 \u0571\u0565\u0566 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576 \u0563\u0578\u057E\u0561\u0566\u0564\u0561\u0575\u056B\u0576 \u0561\u057C\u0561\u057B\u0561\u0580\u056F\u0576\u0565\u0580:",
          line_3: "\u0531\u0576\u0578\u0582\u0576",
          line_4: "\u0540\u0565\u057C\u0561\u056D\u0578\u057D",
          line_5: "\u0570\u0565\u057F \u0566\u0561\u0576\u0563\u0565\u056C \u056B\u0576\u0571",
          line_6: "\u0555\u057A\u0565\u0580\u0561\u057F\u0578\u0580\u0568 \u056F\u0566\u0561\u0576\u0563\u0561\u0570\u0561\u0580\u056B \u0571\u0565\u0566 15-30 \u0580\u0578\u057A\u0565\u056B\u0581",
          line_7: "\u0534\u0578\u0582\u0584 \u057E\u057D\u057F\u0561\u0570 \u0565\u0584, \u0578\u0580 \u0581\u0561\u0576\u056F\u0561\u0576\u0578\u0582\u0574 \u0565\u0584 \u056C\u0584\u0565\u056C \u0574\u0565\u0580 \u056F\u0561\u0575\u0584\u0568\u0589"
        },
        ar: {
          line_1: "\u0647\u0644 \u0623\u0639\u062C\u0628\u0643 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636\u061F",
          line_2: "\u0633\u0646\u062E\u0628\u0631\u0643 \u0628\u0643\u0644 \u0634\u064A\u0621 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0646\u0642\u062F\u0645 \u0644\u0643 \u0623\u0641\u0636\u0644  \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u0631\u0648\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629!",
          line_3: "\u0627\u0644\u0627\u0633\u0645",
          line_4: "\u0627\u0644\u0647\u0627\u062A\u0641",
          line_5: "\u0627\u0639\u062F \u0627\u0644\u0625\u062A\u0635\u0627\u0644 \u0628\u064A",
          line_6: "\u0633\u064A\u0639\u0627\u0648\u062F \u0639\u0627\u0645\u0644 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0643 \u0641\u064A \u063A\u0636\u0648\u0646 15-30 \u062F\u0642\u064A\u0642\u0629",
          line_7: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0645\u063A\u0627\u062F\u0631\u0629 \u0645\u0648\u0642\u0639\u0646\u0627\u061F"
        },
        az: {
          line_1: "Bu t\u0259klifi b\u0259y\u0259ndinizmi?",
          line_2: "Bu m\u0259hsul haqq\u0131nda siz\u0259 h\u0259r \u015Feyi dey\u0259c\u0259yik, \u0259n yax\u015F\u0131 \u015F\u0259rtl\u0259ri t\u0259klif ed\u0259c\u0259yik v\u0259 uy\u011Fun  promosyon t\u0259klifl\u0259ri il\u0259 tan\u0131\u015F olaca\u011F\u0131q!",
          line_3: "Ad",
          line_4: "Telefon",
          line_5: "M\u0259n\u0259 z\u0259ng",
          line_6: "Operator sizi 15-30 d\u0259qiq\u0259d\u0259n sonra size z\u0259ng ed\u0259c\u0259k",
          line_7: "Sayt\u0131m\u0131z\u0131 t\u0259rk etm\u0259k ist\u0259diyiniz\u0259 \u0259minsinizmi?"
        },
        be: {
          line_1: "\u041F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435?",
          line_2: "\u041C\u044B \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u0412\u0430\u043C \u0432\u0441\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0442\u043E\u0432\u0430\u0440\u0435, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0435\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043C \u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438!",
          line_3: "\u0418\u043C\u044F",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043C\u043D\u0435",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442 \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 15-30 \u043C\u0438\u043D\u0443\u0442",
          line_7: "Are you sure you want to leave our site?"
        },
        bg: {
          line_1: "\u0425\u0430\u0440\u0435\u0441\u0430 \u043B\u0438 \u0432\u0438 \u0442\u043E\u0432\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435?",
          line_2: "\u0429\u0435 \u0432\u0438 \u0440\u0430\u0437\u043A\u0430\u0436\u0435\u043C \u0432\u0441\u0438\u0447\u043A\u043E \u0437\u0430 \u0442\u043E\u0437\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0449\u0435 \u0432\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0439-\u0434\u043E\u0431\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u0449\u0435 \u0432\u0438 \u0437\u0430\u043F\u043E\u0437\u043D\u0430\u0435\u043C \u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438 \u043F\u0440\u043E\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043E\u0444\u0435\u0440\u0442\u0438!",
          line_3: "\u0418\u043C\u0435",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041E\u0431\u0430\u0434\u0435\u0442\u0435 \u043C\u0438 \u0441\u0435",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0438 \u0449\u0435 \u0432\u0438 \u0441\u0435 \u043E\u0431\u0430\u0434\u0438 \u0441\u043B\u0435\u0434 15-30 \u043C\u0438\u043D\u0443\u0442\u0438",
          line_7: "\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u043D\u0430\u043F\u0443\u0441\u043D\u0435\u0442\u0435 \u043D\u0430\u0448\u0438\u044F \u0441\u0430\u0439\u0442?"
        },
        bn: {
          line_1: "\u098F\u0987 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09BE\u09AC \u0995\u09BF \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09AA\u09CD\u09B0\u09AD\u09BE\u09AC\u09BF\u09A4 \u0995\u09B0\u09C7\u099B\u09C7?",
          line_2: "\u0986\u09AE\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u098F\u0987 \u09AA\u09A3\u09CD\u09AF \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u098F\u09AC\u0982 \u09B8\u09AC\u0995\u09BF\u099B\u09C1 \u09AC\u09B2\u09AC, \u09B8\u09C7\u09B0\u09BE \u09AA\u09B0\u09BF\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u09A4\u09C7 \u0985\u09AB\u09BE\u09B0 \u0995\u09B0\u09AC \u098F\u09AC\u0982 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u0989\u09AA\u09AF\u09C1\u0995\u09CD\u09A4 \u09AA\u09CD\u09B0\u099A\u09BE\u09B0\u09AE\u09C2\u09B2\u0995 \u0985\u09AB\u09BE\u09B0\u0997\u09C1\u09B2\u09BF\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AA\u09B0\u09BF\u099A\u09AF\u09BC \u0995\u09B0\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u09AC!",
          line_3: "\u09A8\u09BE\u09AE",
          line_4: "\u099F\u09C7\u09B2\u09BF\u09AB\u09CB\u09A8",
          line_5: "\u0986\u09AE\u09BE\u0995\u09C7 \u09AB\u09BF\u09B0\u09C7 \u09A1\u09BE\u0995",
          line_6: "\u0985\u09AA\u09BE\u09B0\u09C7\u099F\u09B0 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 15-30 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09B6\u09C0\u0998\u09CD\u09B0\u0987 \u0995\u09B2 \u0995\u09B0\u09AC\u09C7\u09F7",
          line_7: "\u0986\u09AA\u09A8\u09BF \u0995\u09BF \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u09AF\u09C7 \u0986\u09AA\u09A8\u09BF \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09BE\u0987\u099F \u099B\u09C7\u09A1\u09BC\u09C7 \u09AF\u09C7\u09A4\u09C7 \u099A\u09BE\u09A8?"
        },
        bs: {
          line_1: "Da li Vam se svidjela ponuda?",
          line_2: "Ispri\u010Da\u0107emo Vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati Vas sa odgovaraju\u0107im promotivnim ponudama!",
          line_3: "Ime",
          line_4: "Telefon",
          line_5: "Pozovi me",
          line_6: "Operater \u0107e Vas pozvati u roku od 15-30 minuta",
          line_7: "Jeste li sigurni da \u017Eelite napustiti na\u0161u web stranicu? "
        },
        cmn: {
          line_1: "\u60A8\u559C\u6B61\u9019\u500B\u512A\u60E0\u55CE?",
          line_2: "\u6211\u5011\u5C07\u544A\u8A34\u60A8\u6709\u6240\u6709\u6709\u95DC\u6B64\u7522\u54C1\u7684\u8CC7\u8A0A\uFF0C\u63D0\u4F9B\u60A8\u6700\u4F73\u7684\u512A\u60E0\u7D44\u5408\u4E26\u5354\u52A9\u60A8\u627E\u5230\u6700\u5408\u9069\u7684\u4FC3\u92B7\u7D44\u5408 !",
          line_3: "\u59D3\u540D",
          line_4: "\u624B\u6A5F\u865F\u78BC",
          line_5: "\u64A5\u96FB\u7D66\u6211",
          line_6: "\u64CD\u4F5C\u54E1\u6703\u5728 15-30 \u5206\u9418\u5F8C\u64A5\u96FB\u7D66\u60A8",
          line_7: "\u60A8\u78BA\u5B9A\u8981\u96E2\u958B\u6211\u5011\u7684\u7DB2\u7AD9\u55CE\uFF1F"
        },
        cnr: {
          line_1: "Da li vam se svidela ova ponuda?",
          line_2: "Re\u0107i \u0107emo vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati vas sa odgovaraju\u0107im promocijama!",
          line_3: "Ime",
          line_4: "Telefon",
          line_5: "Nazovite me",
          line_6: "Operater \u0107e vas nazvati za 15-30 minuta",
          line_7: "Jeste li sigurni da \u017Eelite napustiti na\u0161u web stranicu?"
        },
        cs: {
          line_1: "L\xEDbila se v\xE1m tato nab\xEDdka?",
          line_2: "\u0158ekneme v\xE1m v\u0161e o tomto produktu, nab\xEDdneme nejlep\u0161\xED podm\xEDnky a p\u0159edstav\xEDme v\xE1m vhodn\xE9 ak\u010Dn\xED nab\xEDdky!",
          line_3: "Jm\xE9no",
          line_4: "Telefon",
          line_5: "Zavolejte mi zp\u011Bt",
          line_6: "Oper\xE1tor v\xE1m zavol\xE1 zp\u011Bt za 15-30 minut",
          line_7: "Opravdu chcete opustit na\u0161e str\xE1nky?"
        },
        de: {
          line_1: "Interessiert Sie dieses Angebot?",
          line_2: "Wir informieren Sie ausf\xFChrlich dar\xFCber, bieten Ihnen die besten Konditionen und finden passende Angebote f\xFCr Sie!",
          line_3: "Name",
          line_4: "Telefon",
          line_5: "Rufen Sie mich zur\xFCck",
          line_6: "Die Mitarbeiterin wird Sie in 15-30 Minuten zur\xFCckrufen",
          line_7: "Sind Sie sicher, dass Sie unsere Website verlassen wollen?"
        },
        el: {
          line_1: "\u03A3\u03B1\u03C2 \u03AC\u03C1\u03B5\u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03B7 \u03C0\u03C1\u03BF\u03C3\u03C6\u03BF\u03C1\u03AC;",
          line_2: "\u0398\u03B1 \u03C3\u03B1\u03C2 \u03C0\u03BF\u03CD\u03BC\u03B5 \u03C4\u03B1 \u03C0\u03AC\u03BD\u03C4\u03B1 \u03B3\u03B9\u03B1 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD, \u03B8\u03B1 \u03C0\u03C1\u03BF\u03C3\u03C6\u03AD\u03C1\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B9\u03C2 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B5\u03C2 \u03C3\u03C5\u03BD\u03B8\u03AE\u03BA\u03B5\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03C3\u03B1\u03C2 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03B9\u03C2 \u03C0\u03C1\u03BF\u03C3\u03C6\u03BF\u03C1\u03AD\u03C2 \u03C0\u03BF\u03C5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD!",
          line_3: "\u038C\u03BD\u03BF\u03BC\u03B1",
          line_4: "\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF",
          line_5: "\u039E\u03B1\u03BD\u03B1\u03BA\u03B1\u03BB\u03AD\u03C3\u03C4\u03B5 \u03BC\u03B5",
          line_6: "\u0398\u03B1 \u03C3\u03B1\u03C2 \u03BE\u03B1\u03BD\u03B1\u03BA\u03B1\u03BB\u03AD\u03C3\u03BF\u03C5\u03BD \u03B1\u03C0\u03CC \u03C4\u03BF \u03C4\u03B7\u03BB\u03B5\u03C6\u03C9\u03BD\u03B9\u03BA\u03CC \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u03C3\u03B5 15-30 \u03BB\u03B5\u03C0\u03C4\u03AC",
          line_7: "\u0395\u03AF\u03C3\u03C4\u03B5 \u03B2\u03AD\u03B2\u03B1\u03B9\u03BF\u03B9 \u03CC\u03C4\u03B9 \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03C0\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03CC \u03BC\u03B1\u03C2;"
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
          line_1: "\xBFLe gust\xF3 esta oferta?",
          line_2: "\xA1Le diremos todo sobre este producto, le ofreceremos las mejores condiciones y le ofreceremos ofertas promocionales adecuadas!",
          line_3: "Nombre",
          line_4: "Tel\xE9fono",
          line_5: "Ll\xE1menos",
          line_6: "El operador le devolver\xE1 la llamada en 15-30 minutos",
          line_7: "\xBFEsta seguro de que que quiere salir del portal?"
        },
        et: {
          line_1: "Kas Teile meeldis see pakkumine?",
          line_2: "R\xE4\xE4gime Teile selle toote kohta k\xF5ik, pakume parimaid tingimusi ja tutvustame Teile sobivaid sooduspakkumisi!",
          line_3: "Nimi",
          line_4: "Telefon",
          line_5: "Helista mulle tagasi",
          line_6: "Operaator helistab Teile tagasi 15-30 minuti p\xE4rast",
          line_7: "Kas Te olete kindel, et soovite meie lehek\xFCljelt lahkuda?"
        },
        fa: {
          line_1: "\u0622\u06CC\u0627 \u0627\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0631\u0627 \u062F\u0648\u0633\u062A \u062F\u0627\u0634\u062A\u06CC\u062F\u061F",
          line_2: "\u0645\u0627 \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0631\u0627 \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644 \u0628\u0647 \u0634\u0645\u0627 \u0645\u06CC \u06AF\u0648\u06CC\u06CC\u0645\u060C \u0628\u0647\u062A\u0631\u06CC\u0646 \u0634\u0631\u0627\u06CC\u0637 \u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC \u062F\u0647\u06CC\u0645 \u0648 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC \u0645\u0646\u0627\u0633\u0628 \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0645\u0639\u0631\u0641\u06CC \u0645\u06CC \u06A9\u0646\u06CC\u0645!",
          line_3: "\u0646\u0627\u0645",
          line_4: "\u062A\u0644\u0641\u0646",
          line_5: "\u0628\u0647 \u0645\u0646 \u0632\u0646\u06AF \u0628\u0632\u0646",
          line_6: "\u0627\u067E\u0631\u0627\u062A\u0648\u0631 \u062F\u0631 \u0639\u0631\u0636 15-30 \u062F\u0642\u06CC\u0642\u0647 \u0628\u0627 \u0634\u0645\u0627 \u062A\u0645\u0627\u0633 \u062E\u0648\u0627\u0647\u062F \u06AF\u0631\u0641\u062A",
          line_7: "\u0622\u06CC\u0627 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0633\u0627\u06CC\u062A \u0645\u0627 \u0631\u0627 \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F"
        },
        fi: {
          line_1: "Pid\xE4tk\xF6 t\xE4st\xE4 tarjouksesta?",
          line_2: "Kerromme sinulle lis\xE4\xE4 t\xE4st\xE4 tuotteesta, tarjoamme parhaita ehtoja ja tutustutamme sinut sopiviin kampanjatarjouksiin!",
          line_3: "Nimi",
          line_4: "Puhelin",
          line_5: "Soita minulle takaisin",
          line_6: "Operaattori soittaa sinulle takaisin 15-30 minuutin p\xE4\xE4st\xE4",
          line_7: "Oletko varma, ett\xE4 haluat poistua sivustoltamme?"
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
          line_1: "Vous avez aim\xE9 cette offre?",
          line_2: "Nous vous dirons tout sur ce produit, vous proposerons les meilleures conditions et vous pr\xE9senterons des offres promotionnelles adapt\xE9es!",
          line_3: "Nom",
          line_4: "T\xE9l\xE9phone",
          line_5: "Me rappeler",
          line_6: "L'op\xE9rateur vous rappellera dans 15 \xE0 30 minutes",
          line_7: "\xCAtes-vous s\xFBr  que vous voulez quitter notre site?"
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
          line_1: "\u0906\u092A\u0915\u094B \u092F\u0939 \u092A\u094D\u0930\u0938\u094D\u0924\u093E\u0935 \u092A\u0938\u0902\u0926 \u0906\u092F\u093E \u0939\u0948?",
          line_2: "\u0939\u092E \u0906\u092A\u0915\u094B \u0907\u0938 \u0935\u0938\u094D\u0924\u0941 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0938\u092C \u0915\u0941\u091B \u092C\u0924\u093E\u090F\u0901\u0917\u0947, \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u0940 \u0936\u0930\u094D\u0924\u0947\u0902 \u092A\u0947\u0936 \u0915\u0930\u0947\u0902\u0917\u0947 \u0914\u0930 \u0909\u092A\u092F\u0941\u0915\u094D\u0924 \u092A\u094D\u0930\u091A\u093E\u0930\u094B\u0902 \u0938\u0947 \u092A\u0930\u093F\u091A\u093F\u0924 \u0915\u0930\u093E\u090F\u0901\u0917\u0947!",
          line_3: "\u0928\u093E\u092E",
          line_4: "\u092B\u093C\u094B\u0928 \u0928\u0902\u092C\u0930",
          line_5: "\u092E\u0941\u091D\u0947 \u092B\u093C\u094B\u0928 \u0915\u093F\u091C\u093F\u090F",
          line_6: "\u0911\u092A\u0930\u0947\u091F\u0930 \u0906\u092A\u0915\u094B 15-30 \u092E\u093F\u0928\u091F \u092E\u0947\u0902 \u092B\u093C\u094B\u0928 \u0915\u0930\u0947\u0917\u093E",
          line_7: "\u0915\u094D\u092F\u093E \u0906\u092A\u0915\u094B \u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0939\u0948 \u0915\u093F \u0906\u092A \u0939\u092E\u093E\u0930\u0940 \u0938\u093E\u0907\u091F \u0915\u094B \u091B\u094B\u0921\u093C\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
        },
        hr: {
          line_1: "Svidjela vam se ova ponuda?",
          line_2: "Re\u0107i \u0107emo vam sve o ovom proizvodu, ponuditi najbolje uvjete i i upoznati s odgovaraju\u0107im promocijama!",
          line_3: "Ime",
          line_4: "Telefon",
          line_5: "Nazovite me",
          line_6: "Operater \u0107e vas nazvati za 15-30 minuta",
          line_7: "Jeste li sigurni da \u017Eelite napustiti na\u0161u web stranicu?"
        },
        hu: {
          line_1: "Tetszett ez az aj\xE1nlat?",
          line_2: "Mes\xE9l\xFCnk err\u0151l a term\xE9kr\u0151l, felaj\xE1nljuk a legjobb lehet\u0151s\xE9geket \xE9s megismertetj\xFCk a megfelel\u0151 akci\xF3s aj\xE1nlatainkal!",
          line_3: "N\xE9v",
          line_4: "Telefon",
          line_5: "Visszah\xEDv\xE1st k\xE9rek",
          line_6: "Az oper\xE1tor 15-20 percen bel\xFCl visszatelefon\xE1l",
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
          line_6: "L'operatore vi richiamer\xE0 tra 15-30 minuti",
          line_7: "Sicuro di voler lasciare il nostro sito?"
        },
        ja: {
          line_1: "\u30AA\u30D5\u30A1\u30FC\u304C\u597D\u304D\u3067\u3059\u304B\uFF1F",
          line_2: "\u88FD\u54C1\u306B\u3064\u3044\u3066\u3082\u3063\u3068\u8A73\u3057\u304F\u6559\u3048\u3066\u3001\u3067\u304D\u308B\u3060\u3051\u3088\u3044\u6761\u4EF6\u3092\u63D0\u6848\u3057\u3066\u9069\u5207\u306A\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u5272\u5F15\u7533\u3057\u8FBC\u307F\u306B\u5C0E\u5165\u3057\u305F\u3044\uFF01",
          line_3: "\u6C0F\u540D",
          line_4: "\u96FB\u8A71\u756A\u53F7",
          line_5: "\u9023\u7D61\u3092\u304F\u308C\u3066\u304F\u3060\u3055\u3044",
          line_6: "\u30AA\u30DA\u30EC\u30FC\u30BF\u30FC\u306F\u300115\uFF5E30 \u5206\u4EE5\u5185\u306B\u304A\u96FB\u8A71\u3057\u307E\u3059",
          line_7: "\u5F0A\u793E\u306E\u30B5\u30A4\u30C8\u3092\u96E2\u308C\u305F\u3044\u3067\u3059\u304B\uFF1F"
        },
        ka: {
          line_1: "\u10DB\u10DD\u10D2\u10D4\u10EC\u10DD\u10DC\u10D0\u10D7 \u10D4\u10E1 \u10E8\u10D4\u10D7\u10D0\u10D5\u10D0\u10D6\u10D4\u10D1\u10D0?",
          line_2: "\u10E9\u10D5\u10D4\u10DC \u10DB\u10DD\u10D2\u10D8\u10E7\u10D5\u10D4\u10D1\u10D8\u10D7 \u10E7\u10D5\u10D4\u10DA\u10D0\u10E4\u10D4\u10E0\u10E1 \u10D0\u10DB \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1, \u10E8\u10D4\u10DB\u10DD\u10D2\u10D7\u10D0\u10D5\u10D0\u10D6\u10D4\u10D1\u10D7 \u10E1\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10DD \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10E1 \u10D3\u10D0 \u10D2\u10D0\u10D2\u10D0\u10EA\u10DC\u10DD\u10D1\u10D7 \u10E8\u10D4\u10E1\u10D0\u10E4\u10D4\u10E0\u10D8\u10E1 \u10E1\u10D0\u10E0\u10D4\u10D9\u10DA\u10D0\u10DB\u10DD \u10E8\u10D4\u10D7\u10D0\u10D5\u10D0\u10D6\u10D4\u10D1\u10D4\u10D1\u10E1!",
          line_3: "\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8",
          line_4: "\u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8",
          line_5: "\u10D3\u10D0\u10DB\u10D8\u10D1\u10E0\u10E3\u10DC\u10D4",
          line_6: "\u10DD\u10DE\u10D4\u10E0\u10D0\u10E2\u10DD\u10E0\u10D8 \u10D3\u10D0\u10D2\u10D8\u10E0\u10D4\u10D9\u10D0\u10D5\u10D7 15-30 \u10EC\u10E3\u10D7\u10E8\u10D8",
          line_7: "\u10D3\u10D0\u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10EE\u10D0\u10E0\u10D7 \u10E0\u10DD\u10DB \u10D2\u10E1\u10E3\u10E0\u10D7 \u10E9\u10D5\u10D4\u10DC\u10D8 \u10D2\u10D5\u10D4\u10E0\u10D3\u10D8\u10E1 \u10D3\u10D0\u10E2\u10DD\u10D5\u10D4\u10D1\u10D0?"
        },
        kk: {
          line_1: "\u0411\u04B1\u043B \u04B1\u0441\u044B\u043D\u044B\u0441 \u0421\u0456\u0437\u0433\u0435 \u04B1\u043D\u0430\u0434\u044B \u043C\u0430?",
          line_2: "\u0411\u0456\u0437 \u0421\u0456\u0437\u0433\u0435 \u043E\u0441\u044B \u04E9\u043D\u0456\u043C \u0442\u0443\u0440\u0430\u043B\u044B \u0431\u04D9\u0440\u0456\u043D \u0430\u0439\u0442\u044B\u043F \u0431\u0435\u0440\u0435\u043C\u0456\u0437, \u0435\u04A3 \u0436\u0430\u049B\u0441\u044B \u0448\u0430\u0440\u0442\u0442\u0430\u0440\u0434\u044B \u04B1\u0441\u044B\u043D\u0430\u043C\u044B\u0437 \u0436\u04D9\u043D\u0435 \u049B\u043E\u043B\u0430\u0439\u043B\u044B \u043D\u0430\u0443\u049B\u0430\u043D\u0434\u044B\u049B \u04B1\u0441\u044B\u043D\u044B\u0441\u0442\u0430\u0440\u043C\u0435\u043D \u0442\u0430\u043D\u044B\u0441\u0442\u044B\u0440\u0430\u043C\u044B\u0437!",
          line_3: "\u0410\u0442\u044B",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041C\u0430\u0493\u0430\u043D \u049B\u0430\u0439\u0442\u0430 \u049B\u043E\u04A3\u044B\u0440\u0430\u0443 \u0448\u0430\u043B\u044B\u04A3\u044B\u0437",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0421\u0456\u0437\u0433\u0435 15-30 \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D \u049B\u0430\u0439\u0442\u0430 \u049B\u043E\u04A3\u044B\u0440\u0430\u0443 \u0448\u0430\u043B\u0430\u0434\u044B",
          line_7: "\u0421\u0456\u0437 \u0431\u0456\u0437\u0434\u0456\u04A3 \u0441\u0430\u0439\u0442\u0442\u0430\u043D \u043A\u0435\u0442\u043A\u0456\u04A3\u0456\u0437 \u043A\u0435\u043B\u0435\u0442\u0456\u043D\u0456\u043D\u0435 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?"
        },
        km: {
          line_1: "\u178F\u17BE\u17A2\u17D2\u1793\u1780\u1796\u17C1\u1789\u1785\u17B7\u178F\u17D2\u178F\u1780\u17B6\u179A\u1795\u17D2\u178A\u179B\u17CB\u1787\u17BC\u1793\u1798\u17BD\u1799\u1793\u17C1\u17C7\u178A\u17C2\u179A\u17AC\u1791\u17C1?",
          line_2: "\u1799\u17BE\u1784\u1793\u17B9\u1784\u1794\u17D2\u179A\u17B6\u1794\u17CB\u179A\u17BF\u1784\u1782\u17D2\u179A\u1794\u17CB\u1799\u17C9\u17B6\u1784\u17A2\u17C6\u1796\u17B8\u1795\u179B\u17B7\u178F\u1795\u179B\u1798\u17BD\u1799\u1793\u17C1\u17C7\u1791\u17C5\u17A2\u17D2\u1793\u1780 \u1795\u17D2\u178A\u179B\u17CB\u1787\u17BC\u1793\u179B\u1780\u17D2\u1781\u1781\u178E\u17D2\u178C\u179B\u17D2\u17A2\u1794\u17C6\u1795\u17BB\u178F\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780 \u1793\u17B7\u1784\u178E\u17C2\u1793\u17B6\u17C6\u17A2\u17D2\u1793\u1780\u1796\u17B8\u1780\u17B6\u179A\u1795\u17D2\u178A\u179B\u17CB\u1787\u17BC\u1793\u1794\u17D2\u179A\u17BC\u1798\u17C9\u17BC\u179F\u17B7\u1793\u178A\u17C2\u179B\u179F\u1780\u17D2\u178A\u17B7\u179F\u1798\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780!",
          line_3: "\u1788\u17D2\u1798\u17C4\u17C7",
          line_4: "\u1791\u17BC\u179A\u179F\u1796\u17D2\u1791",
          line_5: "\u179F\u17BC\u1798\u178F\u17C1\u178F\u17D2\u179A\u17A1\u1794\u17CB\u1798\u1780\u1781\u17D2\u1789\u17BB\u17C6\u179C\u17B7\u1789",
          line_6: "\u17A2\u17D2\u1793\u1780\u179F\u1798\u17D2\u179A\u1794\u179F\u1798\u17D2\u179A\u17BD\u179B\u1793\u17B9\u1784\u178F\u17C1\u1791\u17C5\u17A2\u17D2\u1793\u1780\u179C\u17B7\u1789\u1780\u17D2\u1793\u17BB\u1784\u179A\u1799\u17C8\u1796\u17C1\u179B\u1796\u17B815\u1791\u17C530\u1793\u17B6\u1791\u17B8\u1781\u17B6\u1784\u1798\u17BB\u1781",
          line_7: "\u178F\u17BE\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17B6\u1780\u178A\u1790\u17B6\u1785\u1784\u17CB\u1785\u17B6\u1780\u1785\u17C1\u1789\u1796\u17B8\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A\u179A\u1794\u179F\u17CB\u1799\u17BE\u1784\u1791\u17C1?"
        },
        ko: {
          line_1: "\uC81C\uC548\uC774 \uB9C8\uC74C\uC5D0 \uB4DC\uC168\uB098\uC694?",
          line_2: "\uC800\uD76C\uB294 \uC774 \uC81C\uD488\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uAC83\uC744 \uC54C\uB824\uB4DC\uB9AC\uACE0 \uCD5C\uC0C1\uC758 \uC870\uAC74\uC744 \uC81C\uC2DC\uD558\uBA70 \uC801\uC808\uD55C \uD504\uB85C\uBAA8\uC158 \uC81C\uC548\uC744 \uC18C\uAC1C\uD560 \uAC81\uB2C8\uB2E4!",
          line_3: "\uC774\uB984",
          line_4: "\uC804\uD654 \uBC88\uD638",
          line_5: "\uC804\uD654 \uBC1B\uAE30",
          line_6: "15~30\uBD84 \uB4A4\uC5D0 \uAD50\uD658\uC6D0\uC774 \uB2E4\uC2DC \uC804\uD654\uB97C \uB4DC\uB9B4 \uAC81\uB2C8\uB2E4",
          line_7: "\uC0AC\uC774\uD2B8\uC5D0\uC11C \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
        },
        ky: {
          line_1: "\u0411\u0443\u043B \u0441\u0443\u043D\u0443\u0448 \u0436\u0430\u043A\u0442\u044B\u0431\u044B?",
          line_2: "\u0411\u0438\u0437 \u0421\u0438\u043B\u0435\u0440\u0433\u0435 \u0431\u0443\u043B \u043D\u0435\u0440\u0441\u0435 \u0436\u04E9\u043D\u04AF\u043D\u0434\u04E9 \u0431\u0430\u0430\u0440\u044B\u043D \u0430\u0439\u0442\u044B\u043F \u0431\u0435\u0440\u0435\u0431\u0438\u0437, \u044D\u04A3 \u0436\u0430\u043A\u0448\u044B \u0448\u0430\u0440\u0442\u0442\u0430\u0440\u0434\u044B \u0441\u0443\u043D\u0443\u0448\u0442\u0430\u0439\u0431\u044B\u0437 \u0436\u0430\u043D\u0430 \u044B\u043B\u0430\u0439\u044B\u043A\u0442\u0443\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u0434\u0438\u043A \u0441\u0443\u043D\u0443\u0448\u0442\u0430\u0440 \u043C\u0435\u043D\u0435\u043D \u0442\u0430\u0430\u043D\u044B\u0448\u0442\u044B\u0440\u0430\u0431\u044B\u0437!",
          line_3: "\u0410\u0442\u044B",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041A\u0430\u0439\u0440\u0430 \u0447\u0430\u043B\u0443\u0443",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0421\u0438\u043B\u0435\u0440\u0433\u0435 15-30 \u043C\u04AF\u043D\u04E9\u0442\u0442\u04E9\u043D \u043A\u0438\u0439\u0438\u043D \u043A\u0430\u0439\u0440\u0430 \u0447\u0430\u043B\u0430",
          line_7: "\u0421\u0438\u0437 \u0431\u0438\u0437\u0434\u0438\u043D \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0442\u0430\u043D \u043A\u0435\u0442\u04AF\u04AF\u043D\u04AF \u043A\u0430\u0430\u043B\u0430\u0439\u0441\u044B\u0437\u0431\u044B?"
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
          line_1: "Ar jums patiko \u0161is pasi\u016Blymas?",
          line_2: "Mes jums visk\u0105 papasakosime apie \u0161\u012F produkt\u0105, pasi\u016Blysime geriausias s\u0105lygas ir supa\u017Eindinsime su tinkamais reklaminiais pasi\u016Blymais!",
          line_3: "Vardas",
          line_4: "Telefonas",
          line_5: "Perskambinti man",
          line_6: "Operatorius jums perskambins po 15-30 minu\u010Di\u0173",
          line_7: "Esate tikri, kad norite palinkti m\u016Bs\u0173 tinklap\u012F?"
        },
        lv: {
          line_1: "Vai Jums pat\u012Bk \u0161is pied\u0101v\u0101jums?",
          line_2: "M\u0113s past\u0101st\u012Bsim Jums visu par \u0161o preci, pied\u0101v\u0101sim lab\u0101kos nosac\u012Bjumus un iepaz\u012Bstin\u0101sim ar piem\u0113rotiem akciju pied\u0101v\u0101jumiem!",
          line_3: "V\u0101rds",
          line_4: "T\u0101lrunis",
          line_5: "Atzvan\u012Bt man",
          line_6: "Operators atzvan\u012Bs Jums p\u0113c 10-15 min\u016Bt\u0113m",
          line_7: "Vai tie\u0161\u0101m v\u0113laties pamest m\u016Bsu vietni?"
        },
        mk: {
          line_1: "\u0414\u0430\u043B\u0438 \u0432\u0438 \u0441\u0435 \u0434\u043E\u043F\u0430\u0434\u043D\u0430 \u043E\u0432\u0430\u0430 \u043F\u043E\u043D\u0443\u0434\u0430?",
          line_2: "\u040C\u0435 \u0434\u043E\u0431\u0438\u0435\u0442\u0435 \u0438\u0441\u0446\u0440\u043F\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438j\u0430 \u0437\u0430 \u043E\u0432\u043Ej \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434, \u045C\u0435 \u0412\u0438 \u043F\u043E\u043D\u0443\u0434\u0438\u043C\u0435 \u043D\u0430j\u043F\u043E\u0432\u043E\u043B\u043D\u0438 \u0443\u0441\u043B\u043E\u0432\u0438 \u0438 \u045C\u0435 \u0412\u0435 \u0437\u0430\u043F\u043E\u0437\u043D\u0430\u0435\u043C\u0435 \u0441\u043E \u043F\u0440\u0438\u043C\u0430\u043C\u043B\u0438\u0432\u0438 \u0430\u043A\u0446\u0438\u0441\u043A\u0438 \u043F\u043E\u043D\u0443\u0434\u0438!",
          line_3: "\u0418\u043C\u0435",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "J\u0430\u0432\u0435\u0442\u0435 \u043C\u0438 \u0441\u0435",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0442 \u045C\u0435 \u0412\u0438 \u0441\u0435 j\u0430\u0432\u0438 \u043F\u043E 15-30 \u043C\u0438\u043D\u0443\u0442\u0438",
          line_7: "\u0414\u0430\u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0435\u043A\u0430 \u0441\u0430\u043A\u0430\u0442\u0435 \u0434\u0430 \u0458\u0430 \u043D\u0430\u043F\u0443\u0448\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430?"
        },
        mo: {
          line_1: "\xCE\u021Bi place oferta?",
          line_2: "\xCE\u021Bi vom povesti totul despre acest produs, vom oferi cele mai bune condi\u021Bii \u0219i \xEE\u021Bi vom prezenta ofertele promo\u021Bionale potrivite!",
          line_3: "Nume",
          line_4: "Telefon",
          line_5: "Sun\u0103-m\u0103",
          line_6: "Operatorul te va suna \xEEn 15-20 de minute",
          line_7: "Sunte\u021Bi siguri ca dori\u021Bi s\u0103 p\u0103r\u0103si\u021Bi site-ul nostru?"
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
          line_1: "Podoba\u0142a ci si\u0119 ta oferta?",
          line_2: "Opowiemy ci wszystko na temat tego produktu, zaproponujemy najlepsze warunki i przedstawimy odpowiednie oferty promocyjne!",
          line_3: "Imi\u0119",
          line_4: "Telefon",
          line_5: "Zadzwo\u0144 do mnie",
          line_6: "Operator oddzwoni w ci\u0105gu 15-30 minut",
          line_7: "Czy na pewno chcesz opu\u015Bci\u0107 nasz\u0105 stron\u0119?"
        },
        pt: {
          line_1: "Gostou da oferta?",
          line_2: "Iremos falar-lhe mais sobre o produto, sugerir as melhores condi\xE7\xF5es poss\xEDveis e apresentar as ofertas com descontos relevantes!",
          line_3: "Nome",
          line_4: "N\xFAmero de telefone",
          line_5: "Ligue-me de volta",
          line_6: "O operador ligar\xE1 para voc\xEA dentro de 15 a 30 minutos",
          line_7: "Tem certeza de que quer sair do nosso site?"
        },
        ro: {
          line_1: "\xCE\u021Bi place oferta?",
          line_2: "\xCE\u021Bi vom povesti totul despre acest produs, vom oferi cele mai bune condi\u021Bii \u0219i \xEE\u021Bi vom prezenta ofertele promo\u021Bionale potrivite!",
          line_3: "Nume",
          line_4: "Telefon",
          line_5: "Sun\u0103-m\u0103",
          line_6: "Operatorul te va suna \xEEn 15-20 de minute",
          line_7: "Sunte\u021Bi siguri ca dori\u021Bi s\u0103 p\u0103r\u0103si\u021Bi site-ul nostru?"
        },
        ru: {
          line_1: "\u041F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435?",
          line_2: "\u041C\u044B \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u0412\u0430\u043C \u0432\u0441\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0442\u043E\u0432\u0430\u0440\u0435, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0435\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043C \u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438!",
          line_3: "\u0418\u043C\u044F",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043C\u043D\u0435",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442 \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 15-30 \u043C\u0438\u043D\u0443\u0442",
          line_7: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u043D\u0430\u0448 \u0441\u0430\u0439\u0442?"
        },
        sk: {
          line_1: "P\xE1\u010Dila sa v\xE1m t\xE1to na\u0161a ponuka?",
          line_2: "Povieme v\xE1m v\u0161etko o tomto produkte, pon\xFAkneme najlep\u0161ie podmienky a predstav\xEDme v\xE1m \u010Fal\u0161ie vhodn\xE9 ponuky v akcii!",
          line_3: "Meno",
          line_4: "Telef\xF3nne \u010D\xEDslo",
          line_5: "Zavolajte mi sp\xE4\u0165",
          line_6: "Oper\xE1tor v\xE1m zavol\xE1 sp\xE4\u0165 do 15-30 min\xFAt",
          line_7: "Naozaj chcete opusti\u0165 na\u0161u str\xE1nku?"
        },
        sl: {
          line_1: "Vam je bila ta ponudba v\u0161e\u010D?",
          line_2: "Povedali vam bomo vse o tem izdelku, ponudili najbolj\u0161e pogoje in vas seznanili s primernimi akcijskimi ponudbami!",
          line_3: "Ime",
          line_4: "Telefon",
          line_5: "Prosim, pokli\u010Dite me nazaj",
          line_6: "Operater vas bo poklical nazaj v 15-30 minutah",
          line_7: "Ste prepri\u010Dani, da \u017Eelite zapustiti na\u0161e spletno mesto?"
        },
        sr: {
          line_1: "Da li vam se svidela ova ponuda?",
          line_2: "Re\u0107i \u0107emo vam sve o ovom proizvodu, ponuditi najbolje uslove i upoznati vas sa odgovaraju\u0107im promocijama!",
          line_3: "Ime",
          line_4: "Telefon",
          line_5: "Nazovite me",
          line_6: "Operater \u0107e vas nazvati za 15-30 minuta",
          line_7: "Sigurno \u017Eelite da napustite na\u0161 sajt?"
        },
        sv: {
          line_1: "Gillar du detta erbjudande?",
          line_2: "Vi ber\xE4ttar allt om den h\xE4r varan. Vi erbjuder dig de b\xE4sta villkoren och hittar l\xE4mpliga kampanjerbjudanden!",
          line_3: "Namn",
          line_4: "Telefon",
          line_5: "Ring mig tillbaka",
          line_6: "Operat\xF6ren ringer upp dig om 15-30 minuter",
          line_7: "\xC4r du s\xE4ker p\xE5 att du vill l\xE4mna v\xE5r webbplats?"
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
          line_1: "\u041E\u0451 \u0431\u0430 \u0448\u0443\u043C\u043E \u0438\u043D \u043F\u0435\u0448\u043D\u0438\u04B3\u043E\u0434 \u043F\u0438\u0441\u0430\u043D\u0434 \u043E\u043C\u0430\u0434?",
          line_2: "\u041C\u043E \u0431\u0430 \u0448\u0443\u043C\u043E \u0434\u0430\u0440 \u0431\u043E\u0440\u0430\u0438 \u0438\u043D \u043C\u0430\u0445\u0441\u0443\u043B\u043E\u0442 \u0445\u0430\u043C\u0430\u0440\u043E \u0431\u0430\u0451\u043D \u043C\u0435\u043A\u0443\u043D\u0435\u043C, \u0448\u0430\u0440\u043E\u0438\u0442\u0445\u043E\u0438 \u0430\u0437 \u0445\u0430\u043C\u0430 \u0431\u0435\u0445\u0442\u0430\u0440\u0438\u043D\u0440\u043E \u043F\u0435\u0448\u043A\u0430\u0448 \u043C\u0435\u043A\u0443\u043D\u0435\u043C, \u0432\u0430 \u0431\u043E \u043F\u0435\u0448\u043D\u0438\u0445\u043E\u0434\u043E\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0433\u043E\u0442\u0438\u0438 \u043C\u0443\u0432\u043E\u0444\u0438\u043A\u0438 \u0448\u0443\u043C\u043E \u0431\u0443\u0434\u0430 \u043E\u0448\u043D\u043E \u043C\u0435\u0441\u043E\u0437\u0435\u043C!",
          line_3: "\u041D\u043E\u043C",
          line_4: "\u0420\u0430\u043A\u0430\u043C\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u0411\u0430 \u043C\u0430\u043D \u0437\u0430\u043D\u0433 \u0437\u0430\u043D\u0435\u0434",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0431\u0430 \u0448\u0443\u043C\u043E \u0431\u0430\u044A\u0434\u0438 15-30 \u0434\u0430\u043A\u0438\u043A\u0430 \u0437\u0430\u043D\u0433 \u043C\u0435\u0437\u0430\u043D\u0430\u0434",
          line_7: "\u0428\u0443\u043C\u043E \u0434\u0430\u0440 \u04B3\u0430\u049B\u0438\u049B\u0430\u0442 \u043C\u0435\u0445\u043E\u04B3\u0435\u0434 \u0441\u0430\u04B3\u0438\u0444\u0430\u0440\u043E \u0442\u0430\u0440\u043A \u043A\u0443\u043D\u0435\u0434?"
        },
        th: {
          line_1: "\u0E0A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E19\u0E35\u0E49\u0E44\u0E2B\u0E21",
          line_2: "\u0E40\u0E23\u0E32\u0E08\u0E30\u0E1A\u0E2D\u0E01\u0E04\u0E38\u0E13\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E19\u0E35\u0E49 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E2A\u0E19\u0E2D\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E41\u0E25\u0E30\u0E40\u0E2A\u0E19\u0E2D\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21!",
          line_3: "\u0E0A\u0E37\u0E48\u0E2D",
          line_4: "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
          line_5: "\u0E42\u0E17\u0E23\u0E01\u0E25\u0E31\u0E1A",
          line_6: "\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E08\u0E30\u0E42\u0E17\u0E23\u0E01\u0E25\u0E31\u0E1A\u0E43\u0E19 15-30 \u0E19\u0E32\u0E17\u0E35",
          line_7: "\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E44\u0E2B\u0E21"
        },
        tr: {
          line_1: "Bu teklifi be\u011Fendiniz mi?",
          line_2: "Bu \xFCr\xFCnle ilgili her \u015Feyi size anlataca\u011F\u0131z, en iyi ko\u015Fullar\u0131 sunaca\u011F\u0131z ve uygun promosyon tekliflerini size bilaca\u011F\u0131z!",
          line_3: "\u0130sim",
          line_4: "Telefon",
          line_5: "Beni tekrar aramak i\xE7in",
          line_6: "Operat\xF6r sizi 15-30 dakika sonra arayacakt\u0131r",
          line_7: "Sitemizden ayr\u0131lmak istedi\u011Finize emin misiniz?"
        },
        uk: {
          line_1: "\u0421\u043F\u043E\u0434\u043E\u0431\u0430\u0432\u0441\u044F \u0446\u0435\u0439 \u0442\u043E\u0432\u0430\u0440?",
          line_2: "\u041C\u0438 \u0440\u043E\u0437\u043F\u043E\u0432\u0456\u043C\u043E \u0412\u0430\u043C \u0432\u0441\u0435 \u043F\u0440\u043E \u0446\u0435\u0439 \u0442\u043E\u0432\u0430\u0440, \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u0443\u043C\u043E\u0432\u0438 \u0442\u0430 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u043C\u043E \u0437 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043C\u0438 \u0430\u043A\u0446\u0456\u0439\u043D\u0438\u043C\u0438 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F\u043C\u0438!",
          line_3: "\u0406\u043C'\u044F",
          line_4: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
          line_5: "\u041F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438 \u043C\u0435\u043D\u0456",
          line_6: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 15-30 \u0445\u0432\u0438\u043B\u0438\u043D",
          line_7: "Are you sure you want to leave our site?"
        },
        ur: {
          line_1: "\u06A9\u06CC\u0627  \u0622\u067E \u06A9\u0648 \u06CC\u06C1 \u067E\u06CC\u0634\u06A9\u0634 \u067E\u0633\u0646\u062F \u0622\u0626\u06CC\u061F",
          line_2: " \u06C1\u0645 \u0622\u067E \u06A9\u0648 \u0627\u0633 \u0645\u0635\u0646\u0648\u0639 \u06A9\u06D2 \u0628\u0627\u0631\u06D2 \u0645\u06CC\u06BA \u0633\u0628 \u06A9\u0686\u06BE \u0628\u062A\u0627\u0626\u06CC\u06BA \u06AF\u06D2\u060C \u0622\u067E \u06A9\u0648 \u0628\u06C1\u062A\u0631\u06CC\u0646 \u0634\u0631\u0627\u0626\u0637 \u06A9\u06CC \u067E\u06CC\u0634\u06A9\u0634 \u06A9\u0631\u06CC\u06BA \u06AF\u06D2 \u0627\u0648\u0631 \u0627\u06CC\u06A9 \u0645\u0646\u0627\u0633\u0628 \u062A\u0634\u06C1\u06CC\u0631\u06CC \u067E\u06CC\u0634\u06A9\u0634 \u062A\u0644\u0627\u0634 \u06A9\u0631\u0646\u06D2 \u0645\u06CC\u06BA \u0645\u062F\u062F \u0641\u0631\u0627\u06C1\u0645 \u06A9\u0631\u06CC\u06BA \u06AF\u06D2!",
          line_3: "\u0646\u0627\u0645",
          line_4: "\u0641\u0648\u0646 \u0646\u0645\u0628\u0631",
          line_5: " \u0645\u062C\u06BE\u06D2 \u0648\u0627\u067E\u0633 \u06A9\u0627\u0644 \u06A9\u0631\u06CC\u06BA",
          line_6: "\u0627\u06CC\u06A9 \u0622\u067E\u0631\u06CC\u0679\u0631 \u0622\u067E \u06A9\u0648 15 \u0633\u06D2 30 \u0645\u0646\u0679 \u0645\u06CC\u06BA \u0648\u0627\u067E\u0633 \u06A9\u0627\u0644 \u06A9\u0631\u06D2 \u06AF\u0627",
          line_7: "\u06A9\u06CC\u0627 \u0622\u067E \u06A9\u0648 \u06CC\u0642\u06CC\u0646 \u06C1\u06D2 \u06A9\u06C1 \u0622\u067E \u06C1\u0645\u0627\u0631\u06CC \u0633\u0627\u0626\u0679 \u06A9\u0648 \u0686\u06BE\u0648\u0691\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u061F"
        },
        uz: {
          line_1: "USHBU TAKLIF SIZGA MAQULMI?",
          line_2: "Sizga ushbu mahsulot haqida barchasini so\u2019zlab beramiz, sizga eng yaxshi sharoitlarni taklif qilamiz va sizni tegishli reklama takliflari bilan ham tanishtiramiz!",
          line_3: "Sizning ismingiz",
          line_4: "Sizning telefon raqamingiz",
          line_5: "Meni qaytaring",
          line_6: "Operator sizga 15-30 daqiqada qo'ng'iroq qiladi",
          line_7: "Are you sure you want to leave our site?"
        },
        vi: {
          line_1: "B\u1EA1n th\u1EA5y \u0111\u1EC1 ngh\u1ECB n\xE0y h\u1EA5p d\u1EABn ch\u1EE9?",
          line_2: "Ch\xFAng t\xF4i s\u1EBD gi\u1EDBi thi\u1EC7u m\u1ECDi th\xF4ng tin s\u1EA3n ph\u1EA9m, c\xE1c \u0111i\u1EC1u kho\u1EA3n t\u1ED1t nh\u1EA5t c\u0169ng nh\u01B0 c\xE1c ch\u01B0\u01A1ng tr\xECnh khuy\u1EBFn m\xE3i ph\xF9 h\u1EE3p!",
          line_3: "T\xEAn",
          line_4: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
          line_5: "G\u1ECDi l\u1EA1i cho t\xF4i",
          line_6: "Chuy\xEAn vi\xEAn s\u1EBD li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n trong 15-30 ph\xFAt",
          line_7: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n r\u1EDDi trang?"
        },
        zh: {
          line_1: "\u60A8\u559C\u6B22\u8FD9\u4E2A\u63D0\u8BAE\u5417\uFF1F",
          line_2: "\u6211\u4EEC\u5C06\u5411\u60A8\u4ECB\u7ECD\u6240\u6709\u6709\u5173\u4EA7\u54C1\u7684\u4FE1\u606F\uFF0C\u63D0\u4F9B\u6700\u597D\u7684\u6761\u4EF6\uFF0C\u53CA\u9002\u5F53\u7684\u4FC3\u9500\u4F18\u60E0\uFF01",
          line_3: "\u59D3\u540D",
          line_4: "\u8054\u7CFB\u7535\u8BDD",
          line_5: "\u7ED9\u6211\u56DE\u7535\u8BDD",
          line_6: "\u63A5\u7EBF\u5458\u5C06\u572815-30\u5206\u949F\u5185\u7ED9\u60A8\u56DE\u7535\u8BDD",
          line_7: "\u60A8\u786E\u5B9A\u8981\u79BB\u5F00\u6211\u4EEC\u7684\u7F51\u7AD9\u5417\uFF1F"
        }
      };
      return i2.hasOwnProperty(e2) ? i2[e2] : i2.en;
    }(function(e2) {
      const i2 = {
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
      return i2.hasOwnProperty(e2) ? i2[e2] : "en";
    }(g)), T = function() {
      $("#cpa_customModalBlock").removeClass("cpa_modalHidden");
    };
    h.length && 0 == p.length && 0 == c.length && (0 == $("#cpa_customModalBlock").length && $("body").append('<div id="cpa_customModalBlock" class="cpa_customModalBlock cpa_callBackModal cpa_modalHidden"> <div class="cpa_fixedModalBlock"> <div class="cpa_innerModalBlock"> <div class="cpa_modalClose"></div> <div class="cpa_modalContent"> <div class="cpa_modalHeading">' + N.line_1 + '</div> <div class="cpa_modalText">' + N.line_2 + '</div> <div class="cpa_modalForm"> <form> <input type="hidden" name="tid" value="' + e + '"> <input class="cpa_modalDefaultInput" name="name" type="text" placeholder="' + N.line_3 + '"> <input class="cpa_modalDefaultInput" name="phone" type="text" placeholder="' + N.line_4 + '"> <input class="cpa_modalSubmitButton" id="order-now-modal" type="submit" value="' + N.line_5 + '"></form> </div> <div class="spa_modalSubTextBlock"> <div class="cpa_modal_timeIcon"></div> <div class="cpa_modal_subText">' + N.line_6 + '</div> </div> </div> <div class="cpa_modalShadow"></div> </div></div></div>'), $("#cpa_customModalBlock .cpa_modalClose").click(function() {
      $("#cpa_customModalBlock").addClass("cpa_modalHidden"), setTimeout(T, 1e3 * h);
    }), $(document).mouseleave(function(e2) {
      e2.clientY < 10 && T();
    }), setTimeout(T, 1e3 * h)), e.length && window.history && window.history.pushState && ($(window).on("popstate", function(i2) {
      if ("" !== location.hash.split("#!/")[1]) {
        if ("" === window.location.hash)
          return location.href = "https://bing.com" + e, setTimeout(function() {
            window.location = "https://bing.com" + e;
          }, 0), i2.preventDefault(), false;
      }
    }), window.history.pushState("forward", null, "./#" + e));
  });
})();
