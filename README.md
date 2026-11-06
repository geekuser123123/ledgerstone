# Ledgerstone: Website

A one-page site for Ledgerstone, which provides Solo and self-directed 401(k) plan support in
Washington, DC, from an office at 525 Eastern Ave NE, Fairmount Heights, MD (at the DC line). It's static with no dependencies, built
with Node and deployed to **Netlify** at `https://ledgerstone.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `ledgerstone`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages (Terms governed by Maryland law), plus
`/thank-you/` and `404.html`.

## Design

- **Palette:** oxblood `#7A2A35` / `#3E1219`, ink `#241416`, limestone `#EFE9DF`, paper `#F8F5EF`, brass `#C9A15A`
- **Type:** Libre Caslon Text (display) and Public Sans (text), both self-hosted
- **Logo:** a Caslon "L" with brass ledger lines on an oxblood tile (`src/brand.mjs`)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
