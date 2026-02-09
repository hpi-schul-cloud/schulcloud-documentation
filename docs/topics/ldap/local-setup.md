# Setting up LDAP server on local & dev environments

## Introduction

This guide describes how to test the LDAP adapter in a local or dev environment. For this we use the following Docker image: [ghcr.io/hpi-schul-cloud/sc-openldap-single:main](http://ghcr.io/hpi-schul-cloud/sc-openldap-single:main) It provides a multitude of users for testing, in a compatible format.

---

## Setting up the LDAP server for local development & testing purposes

### Starting the LDAP Container

The first step is to start a Docker container with the **sc-openldap-single** image and exposed 389 port for the ldap protocol connections.

Note that there have been issues running the ldaps protocol.

```bash
docker run -d -p 389:389 --name openldap ghcr.io/hpi-schul-cloud/sc-openldap-single:main
```

You can verify the deployment using [Apache Directory Studio™](https://directory.apache.org/studio/) or a simlar software to connect:

- **Hostname:** `localhost` or `127.0.0.1`
- **Port:** `389`
- **Bind DN or user:** `cn=admin,dc=example,dc=org`
- **Bind password:** `admin`

### Connecting to the LDAP Container

Since we are not using the ldaps protocoll for the local deployment, we have to configure the server to accept insecure ldap connections. Add the following to your environment variables:

```bash
FEATURE_ALLOW_INSECURE_LDAP_URL_ENABLED: true
```

To configure a school in the Bildungscloud to use your new LDAP deployment, there are two ways: Either you add the necessary data directly in the database, or you add the system in the UI.

To make the changes directly, add the following Object in the `systems` collection

```json
{
  "type": "ldap",
  "alias": "testldap-schoolOne0",
  "ldapConfig": {
    "active": true,
    "federalState": {
      "$oid": "0000b186816abba584714c53"
    },
    "url": "ldap://127.0.0.1:389",
    "rootPath": "o=schoolOne0,dc=de,dc=example,dc=org",
    "searchUser": "cn=admin,dc=example,dc=org",
    "searchUserPassword": "<encryt this with your Base64 Key>",
    "provider": "general",
    "providerOptions": {
      "schoolName": "Paul-Gerhardt-Gymnasium",
      "userPathAdditions": "ou=users",
      "classPathAdditions": "ou=groups",
      "roleType": "group",
      "userAttributeNameMapping": {
        "givenName": " givenName",
        "sn": "sn",
        "dn": "dn",
        "uuid": "uuid",
        "uid": "uid",
        "mail": "mail",
        "role": "memberOf"
      },
      "roleAttributeNameMapping": {
        "roleStudent": "cn=ROLE_STUDENT,ou=roles,o=schoolOne0,dc=de,dc=example,dc=org",
        "roleTeacher": "cn=ROLE_TEACHER,ou=roles,o=schoolOne0,dc=de,dc=example,dc=org",
        "roleAdmin": "cn=ROLE_ADMIN,ou=roles,o=schoolOne0,dc=de,dc=example,dc=org",
        "roleNoSc": "cn=ROLE_NBC_EXCLUDE,ou=roles,o=schoolOne0,dc=de,dc=example,dc=org"
      },
      "classAttributeNameMapping": {
        "description": "description",
        "dn": "dn",
        "uniqueMember": "member"
      }
    }
  },
}
```

Then add the following properties to a school object of your choice.

```json
{
  [...]
  "systems": [
    {
      "$oid": "<id of the system you just created>"
    }
  ],
  "ldapSchoolIdentifier": "o=schoolOne0,dc=de,dc=example,dc=org"
}
```

Alternatively, in the UI you can login as a school admin and navigate to /administration/school-settings, and under "Authentication" click on "Add LDAP System".

Refer to the example above for the values. (note that the password only has to be encrypted if you add it to the database manually)

> **Note:** you can not use `localhost` as the hostname, since that will be rejected by the validator. use the ip adress `127.0.0.1` instead.

Once you have filled all the fields you can verify the config.

---

## Triggering the LDAP sync

Before triggering the LDAP sync ensure you have a working RabbitMQ setup, and add the following environment variables

```bash
FEATURE_SYNCER_CONSUMER_ENABLE: 'true'
SYNC_API_KEY: 'a-key-of-your-choice'
```

Then trigger the sync with the following request:

```bash
curl -X POST -H "X-API-Key: $SYNC_API_KEY" "$API_HOST/v1/sync?target=ldap"
```

You should get a response similar to:

```json
[{"success":true,"errors":[],"systems":{"Paul-Gerhardt-Gymnasium":{"success":true,"errors":[],"schools":1,"users":1226,"classes":17}}}]
```
