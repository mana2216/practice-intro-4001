const { serve } = require("@hono/node-server");
const { Hono } = require("hono");
const { html } = require("hono/html");
const { logger } = require("hono/logger");

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
  const name = c.req.query("name") ?? "ゲスト";
  return c.html(html`
    <!doctype html>
    <html>
      <body>
        <h1>こんにちは！ ${name} さん</h1>
        <p>これは Hono のサンプルアプリケーションです。</p>
      </body>
    </html>
  `);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
