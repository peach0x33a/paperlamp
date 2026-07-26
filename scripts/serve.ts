// Static server for the showcase site. Usage: bun run site
const root = new URL("../site/", import.meta.url);
const port = Number(process.env.PORT ?? 8787);

Bun.serve({
  port,
  async fetch(req) {
    let path = new URL(req.url).pathname;
    if (path === "/") path = "/index.html";
    const resolved = new URL("." + path, root);
    // The URL parser normalizes dot-segments; assert the result stayed inside site/.
    if (!resolved.pathname.startsWith(root.pathname)) {
      return new Response("Bad request", { status: 400 });
    }
    const file = Bun.file(resolved);
    if (!(await file.exists())) return new Response("Not found", { status: 404 });
    return new Response(file);
  },
});

console.log(`素墨 Quiet Ink showcase → http://localhost:${port}`);
