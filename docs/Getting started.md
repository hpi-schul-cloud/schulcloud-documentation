# Getting started

## Glossary / Quick Links

- [Getting started](#getting-started)
  - [Glossary / Quick Links](#glossary--quick-links)
  - [Windows Installation — (also possible in WSL)](#windows-installation--also-possible-in-wsl)
    - [Two Options: Direct in Windows or in WSL](#two-options-direct-in-windows-or-in-wsl)
    - [Installation in WSL](#installation-in-wsl)
    - [Installation in Windows](#installation-in-windows)
      - [Prerequisites for Installation](#prerequisites-for-installation)
      - [1. Create local folder and clone project from Github](#1-create-local-folder-and-clone-project-from-github)
      - [2. Set up database](#2-set-up-database)
      - [3. Set up server](#3-set-up-server)
        - [Prerequisites](#prerequisites)
        - [Start server](#start-server)
      - [4. Set up Legacy Client (schulcloud-client)](#4-set-up-legacy-client-schulcloud-client)
      - [5. Set up Nuxt Client](#5-set-up-nuxt-client)
      - [Possible Issues](#possible-issues)
  - [Installation for MacOS (Intel \& Apple M1 Chip)](#installation-for-macos-intel--apple-m1-chip)
    - [Prerequisites](#prerequisites-1)
    - [1. Create local folder and clone project from Github](#1-create-local-folder-and-clone-project-from-github-1)
    - [2. Set up database](#2-set-up-database-1)
      - [2.1 Updating mongo version on Mac if used via homebrew service (tested on MacBook Pro M1 Max, August 2025)](#21-updating-mongo-version-on-mac-if-used-via-homebrew-service-tested-on-macbook-pro-m1-max-august-2025)
    - [3. Set up server](#3-set-up-server-1)
      - [Prerequisites (Apple M1 Chip)](#prerequisites-apple-m1-chip)
      - [Prerequisites (Intel \& Apple M1 Chip)](#prerequisites-intel--apple-m1-chip)
      - [Start server](#start-server-1)
    - [4. Set up Legacy Client (schulcloud-client)](#4-set-up-legacy-client-schulcloud-client-1)
      - [Possible Issues](#possible-issues-1)
    - [5. Set up Nuxt Client](#5-set-up-nuxt-client-1)
      - [For Apple M1 Chips](#for-apple-m1-chips)
      - [For Intel \& Apple M1 Chips](#for-intel--apple-m1-chips)
      - [Possible Issues](#possible-issues-2)
  - [Setup of Connected Systems](#setup-of-connected-systems)
    - [Set up calendar](#set-up-calendar)
    - [Test local mailing](#test-local-mailing)
    - [Local Files Storage](#local-files-storage)
    - [Local Legacy File System](#local-legacy-file-system)
    - [Generate image previews](#generate-image-previews)
    - [Local antivirus via Docker](#local-antivirus-via-docker)
    - [Set up Redis](#set-up-redis)
    - [Set up SuperHero Dashboard](#set-up-superhero-dashboard)

---

## Windows Installation — (also possible in WSL)

### Two Options: Direct in Windows or in WSL

There are two options to install Schulcloud: directly in Windows or in WSL (Windows Subsystem for Linux).

### Installation in WSL

For installation in WSL see: [Install Development Env on Windows 10 with WSL2 (Window Subsystem for Linux)](/spaces/DBH/pages/218530491/Install+Development+Env+on+Windows+10+with+WSL2+Window+Subsystem+for+Linux)

### Installation in Windows

#### Prerequisites for Installation

For installation directly under C:/ administrator rights are required, otherwise the work environment can also be created in the user directory (C:/Users/[Username]).

- Install [Git](https://git-scm.com/downloads) if not available
- Install [Node](https://nodejs.org/de/) (check version, see package.json)
  - [nvm](https://github.com/coreybutler/nvm-windows) (Node Version Manager) is recommended --- (explain nvm usage in more detail)
  - Practical guide from Microsoft: [Set up your Node.js development environment directly on Windows](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows)
- [Python](https://www.python.org/downloads/windows/) 2.7
- [ConEmu](https://conemu.github.io/) or another terminal

Add each to PATH, log out/log in if necessary or at least reopen CMD if already open.

#### 1. Create local folder and clone project from Github

1. Create and open folder (in this guide ~/Bildungscloud/ is used as path)

   ```bash
   cd /d C:/ && md Bildungscloud && cd Bildungscloud
   ```

2. Clone repositories

   ```bash
   git clone https://github.com/hpi-schul-cloud/schulcloud-server
   git clone https://github.com/hpi-schul-cloud/schulcloud-client
   git clone https://github.com/hpi-schul-cloud/nuxt-client
   ```

   Not necessary for running Bildungscloud, but still interesting for developers are the repositories for our [End-2-End tests](https://github.com/hpi-schul-cloud/end-to-end-tests) and the [Deployment](https://github.com/hpi-schul-cloud/dof_app_deploy).

#### 2. Set up database

- Create database folder

  ```bash
  md C:/Bildungscloud/db
  ```

- [Install MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (Community Server)
- Start database (adjust version and path accordingly beforehand)

  ```bash
  "C:\Program Files\MongoDB\Server\5.0\bin\mongod" --dbpath "D:\apps\SchulCloud\db"
  ```

- Fill database with test data

  In the schulcloud-server folder:

  ```bash
  npm run setup:db:seed
  ```

- Install [MongoDB Compass](https://www.mongodb.com/try/download/tools) to view the database

#### 3. Set up server

##### Prerequisites

- Install packages

  ```bash
  cd schulcloud-server && npm ci
  ```

- Install [Erlang](https://www.erlang.org/) (not necessarily required)
- Install [Docker](https://www.docker.com/get-started/) (or [Colima](https://github.com/abiosoft/colima) via **brew install colima docker**)
- Install [RabbitMQ](https://www.rabbitmq.com/) ([Installation Guide](https://www.rabbitmq.com/install-windows.html))

##### Start server

- Start RabbitMQ

  ```bash
  docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3.8.9-management
  ```

- Start server

  ```bash
  npm run nest:start:dev
  ```
  
  (or `npm run nest:start:debug`)

Successful if [http://localhost:3030/](http://localhost:3030/) shows the feathers start page.

#### 4. Set up Legacy Client (schulcloud-client)

- Install packages

  ```bash
  npm i -g nodemon
  cd schulcloud-client && npm ci
  ```

- Build client

  ```bash
  npm run build
  ```

- Start client

  ```bash
  npm run watch
  ```

Successful if [http://localhost:3100/](http://localhost:3100/) shows the Bildungscloud start page.

#### 5. Set up Nuxt Client

- Install packages

  ```bash
  npm ci
  ```

- Start Nuxt Client

  ```bash
  npm run serve
  ```

Successful if [http://localhost:4000/](http://localhost:4000/) shows the Bildungscloud start page.

#### Possible Issues

- [Install support for C and C++ in Visual Studio](https://docs.microsoft.com/de-de/cpp/build/vscpp-step-0-installation?view=msvc-170)
  - There can be problems with the 2022 version, then you can install the [2019 version](https://visualstudio.microsoft.com/de/vs/older-downloads/)


## Installation for MacOS (Intel & Apple M1 Chip)

### Prerequisites

- Install [Homebrew](https://brew.sh/) (incl. Xcode Command Line Tools, if not available)
- Install [Git](https://git-scm.com/downloads) if not available
- Install [Node](https://nodejs.org/de/) (check version, see package.json)
  - [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) is recommended

### 1. Create local folder and clone project from Github

1. Create and open folder (in this guide ~/Bildungscloud/ is used as path)

   ```bash
   mkdir Bildungscloud && cd Bildungscloud
   ```

2. Clone repositories

   ```bash
   git clone https://github.com/hpi-schul-cloud/schulcloud-server
   git clone https://github.com/hpi-schul-cloud/schulcloud-client
   git clone https://github.com/hpi-schul-cloud/nuxt-client
   ```

   Not necessary for running Bildungscloud, but still interesting for developers are the repositories for our [End-2-End tests](https://github.com/hpi-schul-cloud/end-to-end-tests) and the [Deployment](https://github.com/hpi-schul-cloud/dof_app_deploy).

### 2. Set up database

- Create database folder

  ```bash
  mkdir ~/Bildungscloud/db
  ```

- [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) (Community Server)

  ```bash
  brew tap mongodb/brew
  brew install mongodb-community@5.0
  ```

- Fill database with test data

  In the schulcloud-server folder:

  ```bash
  npm run setup:db:seed
  ```

- Install [MongoDB Compass](https://www.mongodb.com/try/download/tools) to view the database
- A few helpful tips for working with MongoDB: https://docs.dbildungscloud.de/x/NIJdD

#### 2.1 Updating mongo version on Mac if used via homebrew service (tested on MacBook Pro M1 Max, August 2025)

1. stop recent service: `brew services stop mongodb/brew/mongodb-community@_VERSION_`
   1. check activity window if `mongod` is not present anymore
   2. check list of current homebrew services and check for stoped service: `brew services list`

2. uninstall recent version (*if no local database backup necessary*): `brew uninstall mongodb/brew/mongodb-community@_VERSION_`
   1. `brew autoremove` to remove unneeded dependencies
   2. check `brew services list`, recent mongodb version should not be present anymore

3. remove old db data within `/opt/homebrew/var` with `rm -rf mongodb` and simply create the new empty folder `mkdir /opt/homebrew/var/mongodb` (or remove content of folder itself, what ever is easier for you)

4. go to `/opt/homebrew/etc` and check `mongod.conf` if value `storage.dbPath` is set to before created folder `/opt/homebrew/var/mongodb`

5. install new version with `brew install mongodb/brew/mongodb-community@_NEW_VERSION_`

6. check `/opt/homebrew/opt` if correct service is present (and old one is gone)

7. check for working mongod service with correct config: `mongod --config /opt/homebrew/etc/mongod.conf`

8. stop mongod and simply leave homebrew service running in the background with `brew services start mongodb/brew/mongodb-community@_NEW_VERSION_`

9. check list of current homebrew services and check for started service: `brew services list`

10. be happy and use your wished database software (e.g. Studio 3T), connect to your local db and check if `db.version()` suits your desired version

11. (beforehand of course seed your local database with e.g. `npm run setup:db:seed` in server)

### 3. Set up server

#### Prerequisites (Apple M1 Chip)

- Install [CMake](https://cmake.org/) (via Homebrew)

  ```bash
  brew install cmake
  ```

#### Prerequisites (Intel & Apple M1 Chip)

- Install packages

  ```bash
  cd schulcloud-server && npm ci
  ```

- Install [Docker](https://www.docker.com/get-started/)
- Install [RabbitMQ](https://www.rabbitmq.com/) (via [Homebrew](https://www.rabbitmq.com/install-homebrew.html))

  ```bash
  brew install rabbitmq
  ```

#### Start server

- Start database

  ```bash
  brew services start mongodb-community@5.0
  ```

- Start RabbitMQ

  ```bash
  docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3.8.9-management
  ```

- Start server (automatic reload after saving changes)

  ```bash
  npm run nest:start:dev
  ```
  
  (or `npm run nest:start:debug`)

Successful if [http://localhost:3030/](http://localhost:3030/) shows the feathers start page.

### 4. Set up Legacy Client (schulcloud-client)

- Install packages

  ```bash
  cd schulcloud-client && npm ci
  ```

- Build client (style adjustments are only correctly considered after this command)

  ```bash
  npm run build
  ```

- Start client (automatic reload after saving changes)

  ```bash
  npm run watch
  ```

- Choose different theme (e.g. N21)

  ```bash
  declare -x SC_THEME="n21"
  npm run build
  npm run start
  ```

#### Possible Issues

- Python is required, sometimes despite existing Python 3 version an attempt is made to reinstall the CommandLineTools of MacOS. Can be provoked with the command **python -v**

  First check if the directory `/Library/Developer/CommandLineTools` exists. If yes, install python via homebrew if not already done (in the latest version) and then copy the following lines to the known path collection of the system considering the current version:
  
  ```
  /opt/homebrew/opt/python@3.9/libexec/bin
  /opt/homebrew/bin/python3
  ```

Successful if [http://localhost:3100/](http://localhost:3100/) shows the Bildungscloud start page.

### 5. Set up Nuxt Client

#### For Apple M1 Chips

- Install [Google Chrome](https://www.google.com/chrome/)

  This is recommended to avoid installing Chromium. For development and testing, common browsers should be installed on the system anyway.

- Bypass Chromium installation

  ```bash
  cd nuxt-client
  export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
  export PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  ```

  or

  ```bash
  cd nuxt-client
  export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
  export PUPPETEER_EXECUTABLE_PATH="which chromium"
  ```

#### For Intel & Apple M1 Chips

- Install packages

  ```bash
  npm ci
  ```

- Start Nuxt Client (automatic reload after saving changes)

  ```bash
  npm run serve
  ```

- Choose different theme (e.g. N21)

  ```bash
  declare -x SC_THEME="n21"
  npm run build
  npm run start
  ```

Successful if [http://localhost:4000/](http://localhost:4000/) shows the Bildungscloud start page.

#### Possible Issues

If you get the following error message when running `npm ci`:

<details>
<summary>Canvas Installation Error (click to expand)</summary>

```
npm ERR! code 1
npm ERR! path /Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas
npm ERR! command failed
npm ERR! command sh -c node-pre-gyp install --fallback-to-build --update-binary
npm ERR! Failed to execute '/Users/AdminUser/.nvm/versions/node/v18.16.1/bin/node /Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release --napi_version=8 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v108' (1)
npm ERR! node-pre-gyp info it worked if it ends with ok
npm ERR! node-pre-gyp info using node-pre-gyp@1.0.10
npm ERR! node-pre-gyp info using node@18.16.1 | darwin | arm64
npm ERR! node-pre-gyp http GET https://github.com/Automattic/node-canvas/releases/download/v2.11.0/canvas-v2.11.0-node-v108-darwin-unknown-arm64.tar.gz
npm ERR! node-pre-gyp ERR! install response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.0/canvas-v2.11.0-node-v108-darwin-unknown-arm64.tar.gz 
npm ERR! node-pre-gyp WARN Pre-built binaries not installable for canvas@2.11.0 and node@18.16.1 (node-v108 ABI, unknown) (falling back to source compile with node-gyp) 
npm ERR! node-pre-gyp WARN Hit error response status 404 Not Found on https://github.com/Automattic/node-canvas/releases/download/v2.11.0/canvas-v2.11.0-node-v108-darwin-unknown-arm64.tar.gz 
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@9.4.0
npm ERR! gyp info using node@18.16.1 | darwin | arm64
npm ERR! gyp info ok 
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@9.4.0
npm ERR! gyp info using node@18.16.1 | darwin | arm64
npm ERR! gyp info find Python using Python version 3.11.4 found at "/opt/homebrew/opt/python@3.11/bin/python3.11"
npm ERR! gyp info spawn /opt/homebrew/opt/python@3.11/bin/python3.11
npm ERR! gyp info spawn args [
npm ERR! gyp info spawn args   '/Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
npm ERR! gyp info spawn args   'binding.gyp',
npm ERR! gyp info spawn args   '-f',
npm ERR! gyp info spawn args   'make',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/config.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/Users/AdminUser/Library/Caches/node-gyp/18.16.1/include/node/common.gypi',
npm ERR! gyp info spawn args   '-Dlibrary=shared_library',
npm ERR! gyp info spawn args   '-Dvisibility=default',
npm ERR! gyp info spawn args   '-Dnode_root_dir=/Users/AdminUser/Library/Caches/node-gyp/18.16.1',
npm ERR! gyp info spawn args   '-Dnode_gyp_dir=/Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp',
npm ERR! gyp info spawn args   '-Dnode_lib_file=/Users/AdminUser/Library/Caches/node-gyp/18.16.1/<(target_arch)/node.lib',
npm ERR! gyp info spawn args   '-Dmodule_root_dir=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas',
npm ERR! gyp info spawn args   '-Dnode_engine=v8',
npm ERR! gyp info spawn args   '--depth=.',
npm ERR! gyp info spawn args   '--no-parallel',
npm ERR! gyp info spawn args   '--generator-output',
npm ERR! gyp info spawn args   'build',
npm ERR! gyp info spawn args   '-Goutput_dir=.'
npm ERR! gyp info spawn args ]
npm ERR! /bin/sh: pkg-config: command not found
npm ERR! gyp: Call to 'pkg-config pixman-1 --libs' returned exit status 127 while in binding.gyp. while trying to load binding.gyp
npm ERR! gyp ERR! configure error 
npm ERR! gyp ERR! stack Error: `gyp` failed with exit code: 1
npm ERR! gyp ERR! stack     at ChildProcess.onCpExit (/Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:325:16)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:513:28)
npm ERR! gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:291:12)
npm ERR! gyp ERR! System Darwin 22.5.0
npm ERR! gyp ERR! command "/Users/AdminUser/.nvm/versions/node/v18.16.1/bin/node" "/Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--update-binary" "--module=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release/canvas.node" "--module_name=canvas" "--module_path=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release" "--napi_version=8" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v108"
npm ERR! gyp ERR! cwd /Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas
npm ERR! gyp ERR! node -v v18.16.1
npm ERR! gyp ERR! node-gyp -v v9.4.0
npm ERR! gyp ERR! not ok 
npm ERR! node-pre-gyp ERR! build error 
npm ERR! node-pre-gyp ERR! stack Error: Failed to execute '/Users/AdminUser/.nvm/versions/node/v18.16.1/bin/node /Users/AdminUser/.nvm/versions/node/v18.16.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --update-binary --module=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release/canvas.node --module_name=canvas --module_path=/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas/build/Release --napi_version=8 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v108' (1)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/@mapbox/node-pre-gyp/lib/util/compile.js:89:23)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess.emit (node:events:513:28)
npm ERR! node-pre-gyp ERR! stack     at maybeClose (node:internal/child_process:1091:16)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:302:5)
npm ERR! node-pre-gyp ERR! System Darwin 22.5.0
npm ERR! node-pre-gyp ERR! command "/Users/AdminUser/.nvm/versions/node/v18.16.1/bin/node" "/Users/AdminUser/Bildungscloud/nuxt-client/node_modules/.bin/node-pre-gyp" "install" "--fallback-to-build" "--update-binary"
npm ERR! node-pre-gyp ERR! cwd /Users/AdminUser/Bildungscloud/nuxt-client/node_modules/canvas
npm ERR! node-pre-gyp ERR! node -v v18.16.1
npm ERR! node-pre-gyp ERR! node-pre-gyp -v v1.0.10
npm ERR! node-pre-gyp ERR! not ok
```

</details>

Make sure you're using the correct Node version with `nvm use` and also install the following dependency to install the canvas package:

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

After that, `npm ci` should run without problems.

## Setup of Connected Systems

### Set up calendar

You can find the instructions for setting up the calendar under [Setup postgreSQL for calendar service](/spaces/DBH/pages/202572100/Setup+postgreSQL+for+calendar+service). However, this is not necessary for daily use.

### Test local mailing

- Use [Mail Drop](https://github.com/kaffeekrone/mail-drop)

### Local Files Storage

1. Clone repository and perform installation as described in repo readme: https://github.com/hpi-schul-cloud/file-storage

2. Start the service

   ```bash
   npm run start:files-storage:dev
   ```

3. In the **legacy client**, the value of "CORS" must be set to false in the ".env" file, otherwise an upload via the old service is not possible.

4. **Minio** is used here as local storage.

   Execute the following command via local terminal to create a storage via Minio, which is then accessible via [http://localhost:9000](http://localhost:9000):

   ```bash
   docker run \
     --name minioS3storage \
     -p 9000:9000 \
     -p 9001:9001 \
     -e "MINIO_ROOT_USER=miniouser" \
     -e "MINIO_ROOT_PASSWORD=miniouser" \
     quay.io/minio/minio server /data --console-address ":9001"
   ```

### Local Legacy File System

Minio must be set up, see "Local Files Storage"

1. After seeding the local database (for example via the command "npm run setup:db" in the server repository), a collection named "storageproviders" must still be created, as there is no seed data for it with the necessary credentials (security aspect). The following document should then be inserted into this collection:

   **storageproviders collection:**
   ```json
   {
       "_id" : ObjectId("62949a4003839b6162aa566b"),
       "isShared" : true,
       "region" : "eu-central-1",
       "type" : "S3",
       "endpointUrl" : "http://localhost:9000",
       "accessKeyId" : "miniouser",
       "secretAccessKey" : "<secret>",
       "maxBuckets" : 150.0,
       "freeBuckets" : 138.0,
       "createdAt" : ISODate("2021-02-09T09:30:42.507+0000"),
       "updatedAt" : ISODate("2022-05-30T10:28:48.970+0000"),
       "__v" : 0.0
   }
   ```

2. For this to be used, the appropriate provider must be entered in the "schools" collection in the respective school being used. Let's assume we want to use the user "lehrer@schul-cloud", then we go to the school named "Paul-Gerhardt-Gymnasium" and supplement the document there with the additional attribute and appropriate value from the storageprovider document created above:

   **schools collection:**
   ```json
   "storageProvider" : ObjectId("62949a4003839b6162aa566b")
   ```

3. Now both the new and the old file service can be used.

### Generate image previews

The File Storage Service uses Imagemagick to generate preview images. For preview images to be generated, Imagemagick must be installed locally.

[This script](https://gist.github.com/hurricup/e14ae5bc47705fca6b1680e7a1fb6580) installs Imagemagick with support for heic files (also works under WSL).

**p.s.:** If no preview is displayed - because it is still blocked by virus scan -, then in MongoDB: `fileRecord.securityCheck.status` can be overwritten with `verified`.

### Local antivirus via Docker

To run ClamAV locally as antivirus scanner - it is sufficient to start a corresponding Docker container as follows:

```bash
docker run -d -p 3310:3310 mkodockx/docker-clamav:alpine
```

### Set up Redis

In our deployments we use [Redis](https://redis.io/) for caching. Locally, Redis is not absolutely necessary. If Redis is not set up locally, an in-memory store is used by default, which does not need to be set up separately.

If Redis is to be used locally, the following steps are necessary for setup:

1. Start Redis as [Docker container](https://hub.docker.com/_/redis) **or** install locally.
2. In the server, enter the URL of Redis as default under `REDIS_URI` in `default.schema.json` (normally: `redis://localhost:6379`).
3. In the Legacy Client, enter the URL of Redis as default for `REDIS_URI` in `config/global.js`.

### Set up SuperHero Dashboard

Prerequisite: clone the repo from https://github.com/hpi-schul-cloud/superhero-dashboard

To work with the SuperHero Dashboard (SHD) - which is basically used as a database layer for editing user data for non-devs - there are a few things to consider since using Node version 20.

**Under Windows:** Many packages used in the SHD are very outdated and require the installation of additional C++ packages to install the dependencies of the repository. Here it is best to work along the error log and install the respective packages afterwards.

**Under Mac:** For the same reason, the package "distutils" is used here, which is normally covered by the Python installation, but has not been included there since Python 3.12. Here you have to go a separate way to get the necessary functionalities. It is best to use one of the following ways using homebrew under macOS.

1. The installation of `brew install python-setuptools`, in the hope that everything necessary was installed there.
2. If 1. doesn't work, you should use the old Python version using `brew install python@3.11` then the corresponding Env Var must be set in ".zshrc". Either with `export PYTHON=3.11` or `export npm_config_python=/opt/homebrew/bin/python3.11`, if necessary, both can be used at the same time, nothing can break for now.