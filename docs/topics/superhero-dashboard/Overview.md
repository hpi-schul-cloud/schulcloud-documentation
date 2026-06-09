# Overview

The superhero-dashboard (short SHD) is the UI for instance-wide configuration and data manipulation. It is used by users with the role "superhero", which is basically the support team.

![alt text](shd-screenshot.png)

## Technical Overview

It is a client-server application based on [Handlebars](https://handlebarsjs.com/) and [Express.js](https://expressjs.com/en/). 

The integration of Handlebars with Express is done with handlebars-wax like described in [this paragraph from the handlebars-wax-docs](https://github.com/shannonmoeller/handlebars-wax#enginefile-data-callback-handlebarswax).

Static files are built with [gulp.js](https://gulpjs.com/).

## Integration in the Schulcloud

```mermaid
flowchart LR
  browser --> superhero-dashboard
  subgraph schulcloud-kubernetes-cluster
    superhero-dashboard --> schulcloud-server
    superhero-dashboard --> admin-api-server
    superhero-dashboard --> file-storage
  end
```

Like shown above the superhero-dashboard communicates with the following schucloud-apps:
- [schulcloud-server](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/apps/server.app.ts)
- [admin-api-server](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/apps/admin-api-server.app.ts) (for user-batch-deletion)
- [file-storage](https://github.com/hpi-schul-cloud/file-storage/blob/main/src/apps/files-storage.app.ts) (for school-files-deletion)

All communucation is via HTTP inside the kubernetes-cluster.

## HTTP Basic Auth
Unlike other schulcloud-apps the superhero-dashboard is protected by [HTTP Basic Auth](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication) on deployed instances like configured [here](https://github.com/hpi-schul-cloud/superhero-dashboard/blob/b4d7f1fcc1dd6862b5cc7f0837654c25abd0bdd6/ansible/roles/superhero-dashboard/templates/ingress.yml.j2#L10).

## Environment Variables
- PORT
- BODYPARSER_LIMIT
- BACKEND_URL
- FILES_STORAGE_API_URL
- ADMIN_API_URL
- ADMIN_API_KEY
- SC_NAV_TITLE
- SC_THEME
- FEATURE_MEDIA_SHELF_ENABLED
- FEATURE_USER_LOGIN_MIGRATION_ENABLED
- FEATURE_SHOW_OUTDATED_USERS
- FEATURE_ENABLE_LDAP_SYNC_DURING_MIGRATION 

Defaults are set where the variables are used in the code.

## Local setup

Clone the repository: https://github.com/hpi-schul-cloud/superhero-dashboard and proceed like described in the README.

For a minimal setup the schulcloud-server must be running also. 

The defaults of the environment variables are fine for the normal local setup.
