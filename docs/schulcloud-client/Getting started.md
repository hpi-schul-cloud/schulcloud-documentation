---
sidebar_position: 1
---

# Getting started

Make sure to have the following software installed

- node 18

```bash
git clone git@github.com:hpi-schul-cloud/schulcloud-client.git
```

Install the packages
```bash
cd schulcloud-client
npm ci
```

```bash
npm run build
```

The last step is to start the dev server with.
```bash
npm run watch
```

If you want to change the instance you need to set an env variable
```bash
declare -x SC_THEME="n21"
node node_modules/gulp/bin/gulp.js clear-cache && node node_modules/gulp/bin/gulp.js
npm run watch
```
