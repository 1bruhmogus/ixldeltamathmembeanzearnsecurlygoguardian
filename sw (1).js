<!doctype html>
<html>
  <head>
    <link rel="icon" type="image/x-icon" href="https://www.google.com/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    <title>Fluxus Unlimited</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        background-color: rgb(10, 10, 10);
        color: rgb(225, 225, 225);
        font-size: 18px;
        font-family: "Google Sans", sans-serif;
        font-weight: 400;
        height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      input {
        background-color: transparent;
        color: rgb(225, 225, 225);
        border: none;
        font-size: 16px;
        font-family: "Google Sans", sans-serif;
        font-weight: 400;
        width: 88%;
        height: 92.5%;
        padding-left: 14px;
        padding-right: 14px;
        letter-spacing: 1px;
      }
      input:focus { outline: none; }
      ::placeholder { opacity: 30%; color: rgb(200, 200, 200); }
      .no-cursor { caret-color: transparent; }
      .banner {
        width: 100%;
        height: 220px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .banner-img {
        position: absolute;
        inset: 0; width: 100%; height: 100%;
        object-fit: cover; object-position: center;
      }
      .banner-text {
        position: relative; z-index: 2;
        text-align: center; margin-bottom: 40px;
      }
      .banner-title {
        font-weight: 700; font-style: italic; font-size: 48px;
        letter-spacing: 1px; color: #fff;
        text-shadow: 0 0 40px rgba(255,255,255,0.18);
        line-height: 1; margin-bottom: 10px;
      }
      .banner-sub {
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(220,215,225,0.65);
      }
      .banner-divider {
        width: 180px; height: 1px; margin: 8px auto 0;
        background: linear-gradient(to right, transparent, rgba(200,195,210,0.35), transparent);
      }
      .content {
        display: flex; flex-direction: column;
        align-items: center; padding-top: 50px; padding-bottom: 80px;
      }
      .frame {
        border: rgb(40,40,40) 1.5px solid; border-radius: 10px;
        width: 500px; height: 42px; background-color: rgb(18,18,18);
        transition: border-color 0.2s; display: flex; align-items: center;
      }
      .frame:hover { border-color: rgb(65,65,65); }
      .frame:focus-within { border-color: rgb(85,85,85); }
      .primary-search-action {
        display: flex; align-items: center; justify-content: center;
        background: transparent; border: none; color: inherit;
        padding: 0; margin-right: 7.5px; margin-left: -6px; cursor: pointer;
      }
      #status {
        margin-top: 14px; font-size: 12px; letter-spacing: 1px;
        color: rgba(200,200,200,0.4); min-height: 18px;
      }
      #status.error { color: rgba(255,100,100,0.7); }
    </style>
  </head>
  <body style="margin:0;height:100vh;display:flex;flex-direction:column;align-items:stretch;">
    <div class="banner">
      <img class="banner-img" src="data:image/jpeg;base64,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" alt="" draggable="false"/>
    </div>
    <div class="content">
      <div class="banner-text">
        <div class="banner-title">Fluxus Unlimited</div>
        <div class="banner-sub">Unblocked &nbsp;&#8226;&nbsp; Unrestricted &nbsp;&#8226;&nbsp; Unlimited</div>
        <div class="banner-divider"></div>
      </div>
      <form class="frame" onsubmit="handleSearch(event)">
        <input id="search" class="no-cursor" autocomplete="off"
               autocapitalize="off" placeholder="Search DuckDuckGo or enter URL ..."/>
        <button class="primary-search-action" type="submit">
          <svg style="opacity:45%;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg"
               width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>
          </svg>
        </button>
      </form>
      <div id="status">starting up...</div>
    </div>

    <script>
      const statusEl = document.getElementById("status");
      function setStatus(msg, isError) {
        statusEl.textContent = msg;
        statusEl.className = isError ? "error" : "";
      }

      // Load a script dynamically and return a promise
      function loadScript(src) {
        return new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = src;
          s.onload = resolve;
          s.onerror = () => reject(new Error("Failed to load: " + src));
          document.head.appendChild(s);
        });
      }

      const BASE = location.href.replace(/\/[^\/]*(\?.*)?$/, "");

      async function init() {
        try {
          setStatus("loading proxy engine...");
          await loadScript(BASE + "/uv/uv.bundle.js");

          // uv.bundle.js sets self.Ultraviolet — build config manually
          // so we never depend on uv.config.js referencing Ultraviolet at parse time
          window.__uv$config = {
            prefix:    BASE + "/service/",
            bare:      "https://uv.holyubofficial.net/",
            encodeUrl: Ultraviolet.codec.xor.encode,
            decodeUrl: Ultraviolet.codec.xor.decode,
            handler:   BASE + "/uv/uv.handler.js",
            client:    BASE + "/uv/uv.client.js",
            bundle:    BASE + "/uv/uv.bundle.js",
            config:    BASE + "/uv/uv.config.js",
            sw:        BASE + "/uv/uv.sw.js",
          };

          if (!("serviceWorker" in navigator)) {
            setStatus("service workers not supported in this browser", true);
            return;
          }

          setStatus("registering service worker...");
          const swURL = BASE + "/sw.js?base=" + encodeURIComponent(BASE);
          await navigator.serviceWorker.register(swURL, { scope: BASE + "/service/" });

          setStatus("");
        } catch(err) {
          setStatus(err.message, true);
          console.error(err);
        }
      }

      init();

      function isURL(s) {
        try { new URL(s); return true; } catch(_) {}
        return s.includes(".") && !s.includes(" ");
      }

      async function handleSearch(e) {
        e.preventDefault();
        const val = document.getElementById("search").value.trim();
        if (!val) return;
        setStatus("connecting...");
        const url = isURL(val)
          ? (/^https?:\/\//i.test(val) ? val : "https://" + val)
          : "https://duckduckgo.com/?q=" + encodeURIComponent(val);
        try {
          await navigator.serviceWorker.ready;
          location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        } catch(err) {
          setStatus("failed: " + err.message, true);
        }
      }
    </script>
  </body>
</html>