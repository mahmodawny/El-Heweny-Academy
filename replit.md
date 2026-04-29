# أكاديمية الحويني لعلوم الحديث

## Overview
A static React + Vite single-page application (in Arabic, RTL) for an academy of Hadith sciences. It includes a home page, books browser with a PDF viewer, posts, lessons, and a sunnah section, all routed via `react-router-dom`.

## Tech Stack
- React 18 (JavaScript/JSX)
- Vite 5 (dev server and bundler)
- react-router-dom 7
- FontAwesome / react-icons
- TypeScript types installed as dev dependencies (project itself is JSX)

## Project Structure
- `index.html` — root HTML entry, loads `src/index.jsx`
- `src/` — React components (`App.jsx`, `header.jsx`, `Home.jsx`, `posts.jsx`, `feedback.jsx`, `Lessons.jsx`, `books.jsx`, `BookViewer.jsx`, `sections.jsx`, `sunnah.jsx`)
- `src/assets/` — book cover images and other static assets
- `public/` — static files served as-is, including `pdfs/` for book PDF files
- `vite.config.js` — Vite config (host `0.0.0.0`, port `5000`, `allowedHosts: true` for the Replit proxy)

## Development
- Workflow: `Start application` runs `npm run dev` and serves the app on port 5000.
- The Vite dev server is configured to bind to `0.0.0.0:5000` and accept all hosts so the Replit preview iframe can reach it.

## Deployment
- Configured as a static deployment in `.replit`: `npm run build` outputs to `dist/`.

## Recent Changes
- 2026-04-29: Migrated from Replit Agent to the Replit environment. Installed npm dependencies and added a placeholder `src/sunnah.jsx` component (file was missing but referenced in `App.jsx` routing).
