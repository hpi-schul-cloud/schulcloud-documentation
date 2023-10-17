# Website

This website is a documentation aggregator for all Schulcloud-Verbund software.

It is deployed at https://documentation.dbildungscloud.dev/


This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm ci
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Note that the search will only work with the build command.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Update the docs

Create a new branch. Change the /docs files.

### Deployment

Create a pull request and once your changes are merged into main the website will automatically deploy the new version.

### Important

Do not remove the branch `gh-pages`. This branch is auto generated and contains the hosted website.