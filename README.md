# ss-solution-website

Static marketing website to showcase Screen Service Solution.

## Repository structure

- `src/` contains the deployable static website. Both Azure Static Web Apps and GitHub Pages publish this directory directly.
- `src/staticwebapp.config.json` contains Azure Static Web Apps runtime configuration.
- `.github/workflows/github-pages.yml` deploys the `src/` directory to GitHub Pages.
- `.github/workflows/azure-static-web-apps.yml` deploys the `src/` directory to Azure Static Web Apps.

## Hosting recommendation

Keep the site as a plain static site and deploy the same immutable source directory (`src/`) to both hosts. This avoids drift between Azure Static Web Apps and GitHub Pages because every HTML, CSS, JavaScript, image, font, APK, and config file is served from the same folder.

### GitHub Pages setup

1. In GitHub, open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The workflow uploads `src/` as the Pages artifact, and `src/.nojekyll` disables Jekyll processing so static assets are published exactly as committed.

### Azure Static Web Apps setup

1. Create an Azure Static Web Apps resource connected to this repository.
2. Add the deployment token as the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` if Azure does not create it automatically.
3. Use these build settings:
   - App location: `src`
   - API location: leave blank
   - Output location: leave blank
   - Build preset: custom/static HTML, no app build
4. Push to `main` or run the **Deploy to Azure Static Web Apps** workflow manually.

Azure reads `src/staticwebapp.config.json` at deploy time for headers, trailing slash behavior, and 404 handling. GitHub Pages uses `src/404.html` for not-found responses, so both hosts now share an explicit 404 page instead of silently serving the home page for missing URLs.

## Local preview

Use any static file server from the repository root, for example:

```bash
python3 -m http.server 8080 --directory src
```

Then open <http://localhost:8080>.
