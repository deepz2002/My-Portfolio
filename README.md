# Deepak A — Portfolio

React + Vite + Tailwind CSS portfolio. Full-screen sections, binary-rain background, terminal dark/light themes.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/My-Portfolio/
```

## Edit content

All text, links, experience and projects live in [`src/data.js`](src/data.js).

## Deploy to GitHub Pages

1. Push to `main` on `github.com/deepz2002/My-Portfolio`.
2. In the repo: **Settings → Pages → Source: GitHub Actions** (one-time).
3. The workflow in `.github/workflows/deploy.yml` builds and publishes to
   `https://deepz2002.github.io/My-Portfolio/`.

If the repo name changes, update `base` in `vite.config.js` to match.

## Visitor analytics (PostHog + cookie consent)

1. Create a free project at [posthog.com](https://posthog.com) and copy the **Project API key** (`phc_…`).
2. In PostHog: **Project settings → Web analytics → enable Cookieless server hash mode** (required for visitors who decline cookies).
3. Local: copy `.env.example` to `.env.local` and fill in the key.
4. GitHub: **Settings → Secrets and variables → Actions → Variables** → add `VITE_POSTHOG_KEY` (and `VITE_POSTHOG_HOST` if you use the EU cloud).

Every visit is counted; visitors who **accept** cookies get a person profile, are recognised on return visits and have session replays.
To know exactly *who* opened the site, share personal links: `https://deepz2002.github.io/My-Portfolio/?ref=acme-recruiter` — the `ref` shows up on that visitor's events.
Custom events: `section_viewed` (how far they scrolled) and `engagement_tab_viewed`.
