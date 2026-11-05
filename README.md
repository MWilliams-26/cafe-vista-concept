# Café Vista Hoboken: website refresh concept

A one-page website concept for [Café Vista](https://cafevistahoboken.com/), 527 Monroe St, Hoboken, plus a short brief for the owner at `/notes` explaining what the current site is costing them. Research, sources, the asset record and open questions are in [RESEARCH.md](RESEARCH.md).

It is a static site in `public/` (HTML, CSS and a little JavaScript) with no build step. It deploys to Cloudflare as an assets-only Worker.

## Preview locally

```sh
npm install
npm run dev        # wrangler dev, serves public/ like Cloudflare does (including /notes and the 404 page)
```

Or, without Node: `python3 -m http.server -d public` (use `/notes.html` there).

Add `?at=<day 0-6>-<HH:MM>` to fake the time for the open/closed sign, for example `/?at=1-15:30` for Monday at 3:30 pm.

## Images

`npm run images` rebuilds `public/assets/img/*.webp` and `public/assets/og.jpg` from the café's own photos (needs curl and ImageMagick 7).

## Deploy

```sh
npx wrangler login   # or set CLOUDFLARE_API_TOKEN
npm run deploy       # publishes https://cafe-vista-concept.<subdomain>.workers.dev
```

The preview sends `X-Robots-Tag: noindex` and a disallow-all `robots.txt` so it never competes with the café's real site in search.
