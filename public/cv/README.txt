Place your CV PDF in this folder as:

  Avashik-Ahamed-CV.pdf

Then open src/data/siteContent.ts and set:

  cvDownloadEnabled: true

The Download CV button uses import.meta.env.BASE_URL (see siteContent.ts).

Netlify / root hosting: use default Vite base "/".
GitHub Pages project site: the repo workflow sets VITE_BASE_PATH=/repo-name/ when building.
