# Github-hosted markdown blog

### Steps

1. fork repository
2. in the settings, activate Github Pages using `/docs` as the source
3. start writing markdown content in the `pages` folder
    - use `?` suffix for local links to other pages
    - use `docs/assets` to store assets
4. Serve `index.html` locally to display markdown dynamically while writing 

### Ready to build?

4. run `node utils/build.js` to generate html

### Custom domain?

5. under Github Pages settings, add custom url and enforce HTTPS
