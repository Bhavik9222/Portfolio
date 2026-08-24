# Deploy Bhavik's Portfolio — FREE (no credit card)

Your Astro site already has everything it needs. `base` is set to `/portfolio`,
so the deployed URL is `https://YOURUSERNAME.github.io/portfolio/`.

------------------------------------------------------------------------------
OPTION A — GitHub Pages  (RECOMMENDED — your repo already has the workflow)
------------------------------------------------------------------------------
1. Create a GitHub repo called `portfolio` (public).
2. Push your code:
       git init           (only if .git not present)
       git add -A
       git commit -m "portfolio"
       git branch -M main
       git remote add origin https://github.com/YOURUSERNAME/portfolio.git
       git push -u origin main
   IMPORTANT: the branch MUST be named `main` (the workflow watches `main`).
3. On GitHub: repo -> Settings -> Pages.
     Source: "GitHub Actions"
     Under the workflow list pick "Astro" and Save.
4. Push commits. Go to repo -> Actions -> "Deploy to GitHub Pages" -> wait for green.
5. Site URL: https://bhavik9222.github.io/portfolio/

  Config note: if you want it at the ROOT (https://bhavik9222.github.io/) instead,
  change `base` from '/portfolio' to '/' in astro.config.mjs and push again.

------------------------------------------------------------------------------
OPTION B — Netlify  (easiest, drag & drop)
------------------------------------------------------------------------------
1. Build locally:     npm run build      -> produces the `dist/` folder.
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page.
4. Done — you get an instant https://your-site.netlify.app URL.
   For a custom path, set Deploy settings: Base = "", Directory = "dist".

------------------------------------------------------------------------------
OPTION C — Vercel
------------------------------------------------------------------------------
1. Install:     npm i -g vercel
2. From the folder:  vercel
3. Follow prompts -> it auto-detects Astro. Base directory = ./dist is the build output,
   but Vercel reads package.json, so just "Next" on Build Settings (Command: npm run build, Output: dist).

------------------------------------------------------------------------------
OPTION D — Cloudflare Pages
------------------------------------------------------------------------------
1. git push to GitHub (see steps 1-2 in Option A).
2. https://pages.cloudflare.com/ -> "Create project" -> connect repo.
3. Build command: `npm run build`, Output directory: `dist`.

------------------------------------------------------------------------------
CHECKLIST — before going live
------------------------------------------------------------------------------
[x] Profile picture copied to public/bhavik.jpg (now 512x619)
[ ] Links to LinkedIn / GitHub / Email / Resume are yours
[ ] Add public/resume.pdf if you want the Resume button to work
[ ] Test on mobile (the layout is responsive)
