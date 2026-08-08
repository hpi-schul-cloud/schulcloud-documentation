---
sidebar_position: 1
---

# Getting started

Make sure to have the following software installed

- node 24
- MongoDB 6.0+
- RabbitMQ

```bash
git clone git@github.com:hpi-schul-cloud/schulcloud-server.git
```

Install the packages

```bash
cd schulcloud-server
npm ci
```

Start MongoDb & RabbitMQ.
Then seed the database

```bash
npm run setup
```

The last step is to start the dev server with.

```bash
npm run nest:start:dev
```
