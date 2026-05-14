Place your CV PDF in this folder as:

  Avashik-Ahamed-CV.pdf

Then open src/data/siteContent.ts and set:

  cvDownloadEnabled: true

The Download CV button resolves via import.meta.env.BASE_URL (see siteContent.ts),
so it works on GitHub Pages under a repo path as well as on the site root.
