# Getting started with Bettermarks

## What is Bettermarks?
Bettermarks is an online learning system for mathematics with virtual books and many interactive exercises.
Can be directly accessed at https://de.bettermarks.com/

## Integration into SVS

Bettermarks is a standalone external application integrated into SVS.
It is integrated into Schul-Cloud Brandenburg and Niedersächsischen Bildungscloud only.

If enabled, the users can access it directly via External Tools link in a course or Room. No separate login is required.

As soon as users access it, a check is performed to determine whether the person has the necessary access rights, what role the person has, and from which context (course or room) they are accessing it.

During use, this data is sent to Bettermarks in pseudonymized (encrypted) form.

As soon as data is returned from Bettermarks, it is decrypted by the cloud and can be used and analyzed by teachers and students.


### Configuration

External tool config

```
{
    "name": "bettermarks",
    "url": "'$BETTERMARKS_URL'",
    "logoUrl": "'$BETTERMARKS_LOGO_URL'",
    "config_type": "oauth2",
    "config_baseUrl": "'$BETTERMARKS_URL'",
    "config_clientId": "'$BETTERMARKS_OAUTH_CLIENT_ID'",
    "config_skipConsent": false,
    "parameters": [],
    "isHidden": false,
    "openNewTab": true,
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "version": 1
},
```

## How to add it to a course or room

To ceaate an external tool (via SuperHeroDashboard > Tools) and enable it for a school (via Administration > School) check the configuration above and external tools documentaion.

So, Bettermarks is intergrated in SVS as an external tool. This means in Course > Tools and Room will be available to be added and therefor users will see a link which when opened, will load Bettermarks in new tab.
No login is necesary, as the login is performed in background secured and psudonimized using OAuth2 protocol.


## How it works

Currently, Bettermarks calls 3 Endpoints from legacy feathers, retrieving user and group (courses and rooms) metadata:
For the list of endpoints check [Roster Api](./Roster%20Api.md)
For the details of implemtation check [Roster Service documentation](./Roster%20Service.md)


### Infrastructure

These endpoints are not publicly available. Bettermarks server is whitelisted and can access them via a reverse proxy.

Bettermaks external tool is automatically added to 2 namespaces. Check the [deployment](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/ansible/roles/schulcloud-server-init/templates/configmap_file_init.yml.j2#L223) for how this is done.

### How to debug

It can be challenging to actually properly debug, because the calls are triggered by a 3rd party. Therefor, it can be useful to debug remotely, so directly on a development environment fully deployed with Bettermaks integration, on the dev cluster. As mentioned aboove, you can use main branch or a branch called `betternarsks_test`.

Remove Debugging can be done using telepresence:
`telepresence connect -n bettermarks-test --mapped-namespaces bettermarks-test --kubeconfig ~/.kube/sc-dev-nbc.yaml`
`telepresence replace api-deployment --env-file .env`
Start local server in debug mode, and happy debugging.

Note: Valky and MongoDB connection might have a problem to be resolved, especially on macBooks. You might need to resolve the IPs for the mongo DB and add those to the local /etc/hosts, as well as add IPs instead of hostnames valkey.factory.ts.

### Security and Data protection

User data is protected and pseudonimized. Check [pseudominization documentation](./Pseudonymization.md) for details.

Authentication is done using OAuth2, as configuired in bettermarks external tool.
