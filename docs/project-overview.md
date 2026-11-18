# OnScreenSync public website

The website is OnScreenSync's public introduction and entry point. It explains the digital signage product, helps prospective users compare plans or learn about partnering, and directs customers to the dashboard. It also hosts files that the TV players use.

## What visitors and devices can find

- Product information, examples of signage uses, service tiers, FAQs, partner information, and privacy and cookie notices.
- Links to dashboard sign-in and registration, product videos, and support resources.
- A downloadable Android TV APK and machine-readable bootstrap configuration that tells the TV players where to find their service endpoints.

## How it is organised

The deployable site is [src](../src). It contains standalone HTML pages, styles, scripts, images, fonts, and public downloads. The homepage is index.html, and [config.json](../src/config.json) is the TV bootstrap file. [Deployment workflows](../.github/workflows) publish the same static directory to GitHub Pages or Azure Static Web Apps. The [README](../README.md) explains local preview and hosting behavior.

## What it relies on

- **Management Dashboard UI** handles the customer sign-in and registration flows linked from the website. **OnScreenSync TV players** consume its bootstrap file to discover their backend routes.
- **Bootstrap, jQuery, Popper, and Font Awesome** support layout, interaction, and icons. Some pages link to YouTube or load external services such as Tidio chat and Google Maps.
- **GitHub Pages** and **Azure Static Web Apps** provide static hosting. A local static file server can preview the checked-in pages.
