# Fetchseed

Fetchseed is a Next.js App Router site for a UK-registered technology consultancy delivering offshore services, R&D centres, and digital transformation consulting.

## Development

Use Node.js and npm:

```sh
npm install
npm run dev
```

## Deploy to Cloudflare Pages

This site is configured as a static Next.js export. In Cloudflare Pages, connect the repository and use:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** `22`

Or deploy from the terminal with Wrangler:

```sh
npm install
npm run build
npx wrangler pages deploy out --project-name fetchseed
```

The contact form currently confirms submissions in the browser only. Connect it to a form endpoint or a Cloudflare Worker before relying on it for real inquiries.

## Built with

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
