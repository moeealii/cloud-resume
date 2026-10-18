# Mohamed Ali’s portfolio

A Gatsby site for [mohameda.li](https://mohameda.li/). Content lives in `src/pages/index.js`; styles are in `src/styles.css`.

## Local preview

Use Node.js 18. The original Gatsby dependency tree includes an old Sharp release, so install without dependency lifecycle scripts. The site does not use Gatsby’s Sharp plugins.

```sh
npm ci --ignore-scripts
NODE_OPTIONS=--openssl-legacy-provider npm run build
npm run serve
```

Pushing to `master` triggers the GitHub Actions workflow that builds the site, syncs `public/` to S3, and invalidates CloudFront.
