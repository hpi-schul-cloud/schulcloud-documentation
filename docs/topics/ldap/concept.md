# LDAP Sync

The LDAP Sync is a highly configurable and scalable tool to import Users, Classes, and Schools from an LDAP System into the Bildungscloud.

## Strukture

Each external LDAP Server that should be synced has to be configured with a `system` object in the database.

Through the `system` object, many details for the structure of the external LDAP can be configured, so they can be automatically mapped to our datastructure.

There is a UI under /administration/school-settings where a school admin is able to configure an LDAP system for his own school himself. However bear in mind that this is a fairly complicated and errorprone matter, that should be done by people with technikal knowledge and be closely monitored by Support.

Its also possible to set up an LDAP System with multiple schools.

The actual Synchronisation is triggered regularly via a Cronjob, and is implemented with a producer/consumer pattern via RabbitMQ.

## Requirements

The external LDAP System has to be accessible for our Server.
If necessary, the corresponding IP adresses should be whitelisted in the firewall of the LDAP Provider. (This means we need to ensure the IP Adress used by the server does not randomly change)

Each user in the LDAP must have the following attributes, though their naming may vary:

- uid (used as login name, must be unique)
- uuid (must be immutable and unique)
- mail (must be unique)
- givenName (firstname)
- sn (surname)
- objectClass (must include the value `person`)

The role of the user can either be an attribute, or an ldap group (`memberOf`). There must be the following roles, though their naming may vary:

- ROLE_STUDENT
- ROLE_TEACHER
- ROLE_ADMIN

You can also give the role `ROLE_NO_SC` to users that should not be synced.

## Components

The Code can be found in the legacy Server under src/services/sync/strategies.

The three main components are the `LDAPSyncer`, `LDAPSyncerConsumer`, and `LDAPSystemSyncer`.

the `LDAPSyncer` will process a single LDAP System, fetch and parse its data to identify its schools, classes, and users, and push each of those as a rabbitMQ event.

the `LDAPSyncerConsumer` will consume these events, and create or update the corresponding objects in the Bildungscloud.

the `LDAPSystemSyncer` provides an API to run all configured LDAP Systems with a single command.

## Scaling

The LDAP Sync is, as of writing this, not yet implemented as a microservice, but part of the legacy Server.

However when multiple Servers are deployed and connected via RabbitMQ, they will share and balance the work among themselves.

Do ensure each of the Servers that should partake in the LDAP Sync has `FEATURE_SYNCER_CONSUMER_ENABLE` set.
