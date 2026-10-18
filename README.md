# Mohamed Ali’s portfolio

Source for [mohameda.li](https://mohameda.li/), built with Gatsby, React, and Tailwind CSS.

## Local preview

Use Node.js 18. The site does not use Gatsby’s Sharp image plugins, so dependency scripts can be skipped when installing the legacy dependency tree.

```sh
npm ci --ignore-scripts
NODE_OPTIONS=--openssl-legacy-provider npm run build
npm run serve
```

Pushing to `master` runs the production GitHub Actions deployment.
