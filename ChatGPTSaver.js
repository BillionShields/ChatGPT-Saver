javascript: ! function() { var e, t, n = ["openai.com", "chatdoc.com", "firefly.adobe.com", "bing.com", "chatyoutube.com", "clipdrop.co", "chatpdf.com"],
        o = ["yellow", "red"]; let r = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px;margin-top:20px;margin-bottom:20px;border-radius:10px;background-color:###;z-index:9999;font-size:larger;"; var a = r.slice().replace("###", o[1]),
        c = r.slice().replace("###", o[0]);

    function l(e, t, n) { var o = document.createElement("div"); switch (o.innerText = e, o.style.backgroundColor = n, n) {
            case "yellow":
                o.style.cssText = c; break;
            case "red":
                o.style.cssText = a; break }
        document.body.appendChild(o), setTimeout((function() { o.remove() }), t) }

    function i(e, t, n) { if ("" === t.trim()) l("Saving Failed. No text extracted", 1e4, o[1]);
        else { var r = "Thanks for using ChatGPT Saver.(C)2023 by SZ\nhttps://github.com/BillionShields/ChatGPT-Saver\n\n",
                a = new Blob([r + t], { type: "text/plain" }),
                c = document.createElement("a"),
                i = (new Date).toLocaleString().replace(/[:\/]/g, "");
            c.download = "ChatGPT_" + e + "_" + i + ".txt", c.href = URL.createObjectURL(a), c.click(), l(r, 3e3, o[0]) } }

    function s() { e = "ClipDrop Stable Diffusion"; const n = document.querySelector('input[name="input-prompt"]');
        t = n.value + "\n\n"; const o = document.querySelectorAll('img[src^="blob:"]'),
            r = Array.from(o).map((e => e.src));
        t += r.join("\n"), i(e, t) }

    function m() { e = document.querySelector(".ant-menu-item-selected .ant-menu-title-content").textContent; const n = Array.from(document.querySelectorAll(".chat-message-row.human .chat-message")),
            o = Array.from(document.querySelectorAll(".chat-message-row.ai .chat-message"));
        t = ""; for (let e = 0; e < Math.max(n.length, o.length); e++) t += (n[e] ? "Q: " + n[e].textContent + "\n" : "") + (o[e + 1] ? "A: " + o[e + 1].textContent + "\n" : "");
        i(e, t) }

    function u() { e = "Firefly Generative AI chat "; var n = document.querySelector("div[role='form']");
        t = window.location.href + "\n\n" + n.querySelector("textarea").value + "\n\n"; var o = n.querySelectorAll("textarea");
        o.length > 1 && o[1].remove(), t += n.innerText.trim() + "\n\n"; for (var r = document.getElementsByTagName("img"), a = new Set, c = 0; c < r.length; c++) { var l = r[c].src;
            l.startsWith("blob:") && !a.has(l) && a.add(l) }
        t += Array.from(a).join("\n"), i(e, t) }

    function d() { e = "BingGPT"; let t = ""; const n = ["text-message-content", "ac-container"].map((e => h(document, e))),
            o = Math.max(n[0].length, n[1].length); for (let e = 0; e < o; e++) n[0][e] && (t += "Q: " + n[0][e].textContent + "\n"), n[1][e] && (t += "A: " + n[1][e].textContent + "\n");
        i(e, t) }

    function f() { const e = document.querySelector("a[href*='youtube.com']");
        i(e.textContent, `${e.href}\n${Array.from(document.querySelectorAll(".chat-bubble")).map((e=>{const t=e.cloneNode(!0),n=t.querySelector(".text-slate-300");return n?n.textContent:t.textContent})).join("\n\n")}`) }

    function h(e, t) { const n = []; return e.querySelectorAll("*").forEach((e => { e.shadowRoot && n.push(...h(e.shadowRoot, t)), (e.classList.contains(t) || e.matches(t)) && n.push(e) })), n } for (var y = 0; y < n.length; y++)
        if (window.location.href.includes(n[y])) switch (y) {
            case 0:
                e = document.querySelector(".bg-gray-800 .flex-1").textContent.substring(0, 30), t = Array.from(document.querySelectorAll(".text-base")).map((function(e) { var t = e.cloneNode(!0),
                        n = t.querySelector(".flex-grow.flex-shrink-0"); return n && n.remove(), t.textContent })).join("\n\n"), i(e, t); break;
            case 1:
                e = document.getElementsByClassName("file-list-item active")[0].getElementsByClassName("file-item-name-content")[0].textContent, t = Array.from(document.getElementsByClassName("message")).map((function(e) { return e.textContent })).join("\n\n"), i(e, t); break;
            case 2:
                u(); break;
            case 3:
                d(); break;
            case 4:
                f(); break;
            case 5:
                s(); break;
            case 6:
                m(); break } }();