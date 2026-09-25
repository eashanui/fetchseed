# Fetchseed

Fetchseed is a Next.js App Router site for a UK-registered technology consultancy delivering offshore services, R&D centres, and digital transformation consulting.

## Development

Use Node.js and npm:

```sh
npm install
npm run dev
```

## Deploy to Cloudflare

This site is configured as a static Next.js export and can deploy as a Cloudflare static-assets Worker. Use these settings in the Cloudflare Workers build configuration:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** `22`
- **Deploy command:** `npm run deploy`

Or deploy from the terminal with Wrangler:

```sh
npm install
npm run deploy:pages
```

The repository includes `wrangler.jsonc`, which tells Wrangler to deploy the generated `out/` directory as static assets. Do not enable the automatic OpenNext migration; this project does not need a server runtime.

The contact form currently confirms submissions in the browser only. Connect it to a form endpoint or a Cloudflare Worker before relying on it for real inquiries.

## Built with

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
