# marketingsite
There are typically two types of websites:
1. **Single Page Apps** where the user logs in and has an application-like experience where SEO and initial load time probably don't matter.  These are often built with React or Angular.
1. **Web Sites** that are optimized for conveying information and marketing with fast load times and SEO.  These are often built using jQuery and Sass.

This is a repo for deploying Web Sites.  It’s easy to find free/cheap HTML templates with better quality than you could hope to implement in a reasonable time or cost.  This is a template repo for rapidly converting those HTML templates into easily customizable sites that can be deployed for free to a static website host like GitHub Pages, avoiding monthly hosting costs.

## Using the template
1. Find an HTML template for free or low-cost
1. Fork this repo
1. Add your template files to `src/`
1. Modify `package.json` as necessary.  Set the correct paths to your `.scss` file or remove the CSS build entirely.
1. Copy in the content of your template's `index.html` to `src/index.template.html`.
1. Add this HTML snippet into the end of your `body` element to enable live page reloading.
1. Run the development server with live building and live reloading using `yarn watch`.
1. Simplify `src/index.template.html` into a [mustache.js](https://mustache.github.io/) template, moving values to `src/config.json`.
1. Deploy the website with `yarn deploy`.
