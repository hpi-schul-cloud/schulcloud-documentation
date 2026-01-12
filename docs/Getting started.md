# Getting started

## Glossar / Quick Links

- [Getting started](#getting-started)
  - [Glossar / Quick Links](#glossar--quick-links)
  - [Windows Installation — (auch in WSL möglich)](#windows-installation--auch-in-wsl-möglich)
    - [Zwei Möglichkeiten: Direkt in Windows oder in WSL](#zwei-möglichkeiten-direkt-in-windows-oder-in-wsl)
    - [Installation in WSL](#installation-in-wsl)
    - [Installation in Windows](#installation-in-windows)
      - [Voraussetzungen für Installation](#voraussetzungen-für-installation)
      - [1. Lokalen Ordner erstellen und Projekt von Github ziehen](#1-lokalen-ordner-erstellen-und-projekt-von-github-ziehen)
      - [2. Datenbank einrichten](#2-datenbank-einrichten)
      - [3. Server einrichten](#3-server-einrichten)
        - [Voraussetzungen](#voraussetzungen)
        - [Server starten](#server-starten)
      - [4. Legacy Client (schulcloud-client) einrichten](#4-legacy-client-schulcloud-client-einrichten)
      - [5. Nuxt Client einrichten](#5-nuxt-client-einrichten)
      - [Mögliche Probleme](#mögliche-probleme)
  - [Installation für MacOS (Intel \& Apple M1 Chip)](#installation-für-macos-intel--apple-m1-chip)
    - [Voraussetzungen](#voraussetzungen-1)
    - [1. Lokalen Ordner erstellen und Projekt von Github ziehen](#1-lokalen-ordner-erstellen-und-projekt-von-github-ziehen-1)
    - [2. Datenbank einrichten](#2-datenbank-einrichten-1)
      - [2.1 Updating mongo version on Mac if used via homebrew service (tested on MacBook Pro M1 Max, August 2025)](#21-updating-mongo-version-on-mac-if-used-via-homebrew-service-tested-on-macbook-pro-m1-max-august-2025)
    - [3. Server einrichten](#3-server-einrichten-1)
      - [Voraussetzungen (Apple M1 Chip)](#voraussetzungen-apple-m1-chip)
      - [Voraussetzungen (Intel \& Apple M1 Chip)](#voraussetzungen-intel--apple-m1-chip)
      - [Server starten](#server-starten-1)
    - [4. Legacy Client (schulcloud-client) einrichten](#4-legacy-client-schulcloud-client-einrichten-1)
      - [Mögliche Probleme](#mögliche-probleme-1)
    - [5. Nuxt Client einrichten](#5-nuxt-client-einrichten-1)
      - [Für Apple M1 Chips](#für-apple-m1-chips)
      - [Für Intel \& Apple M1 Chips](#für-intel--apple-m1-chips)
      - [Mögliche Probleme](#mögliche-probleme-2)
  - [Setup angeschlossener Systeme](#setup-angeschlossener-systeme)
    - [Kalender einrichten](#kalender-einrichten)
    - [Lokales Mailing testen](#lokales-mailing-testen)
    - [Lokaler Files Storage](#lokaler-files-storage)
    - [Lokales Legacy File System](#lokales-legacy-file-system)
    - [Previews für Bilder generieren](#previews-für-bilder-generieren)
    - [Virenschutz lokal per Docker](#virenschutz-lokal-per-docker)
    - [Redis einrichten](#redis-einrichten)
    - [SuperHero-Dashboard einrichten](#superhero-dashboard-einrichten)

---

## Windows Installation — (auch in WSL möglich)

### Zwei Möglichkeiten: Direkt in Windows oder in WSL

Es gibt die Möglichkeiten die Schulcloud direkt in Windows zu installieren oder in WSL (Windows Subsystem for Linux).

### Installation in WSL

Für die Installation in WSL siehe: [Install Development Env on Windows 10 with WSL2 (Window Subsystem for Linux)](/spaces/DBH/pages/218530491/Install+Development+Env+on+Windows+10+with+WSL2+Window+Subsystem+for+Linux)

### Installation in Windows

#### Voraussetzungen für Installation

Für die Installation direkt unter C:/ werden Administratorrechte vorausgesetzt, ansonsten kann die Arbeitsumgebung auch im Benutzerverzeichnis (C:/Benutzer/[Nutzername]) erstellt werden.

- [Git](https://git-scm.com/downloads) installieren, falls nicht vorhanden
- [Node](https://nodejs.org/de/) installieren (Version beachten, siehe package.json)
  - Hierfür ist [nvm](https://github.com/coreybutler/nvm-windows) (Node Version Manager) empfehlenswert --- (nvm usage genauer erklären)
  - Praktische Anleitung von Microsoft: [Set up your Node.js development environment directly on Windows](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows)
- [Python](https://www.python.org/downloads/windows/) 2.7
- [ConEmu](https://conemu.github.io/) oder einen anderen Terminal

Jeweils zu PATH hinzufügen, ggf. abmelden/anmelden oder mindestens CMD neu öffnen falls schon offen.

#### 1. Lokalen Ordner erstellen und Projekt von Github ziehen

1. Ordner erstellen und öffnen (in diesem Guide wird als Pfad ~/Bildungscloud/ benutzt)

   ```bash
   cd /d C:/ && md Bildungscloud && cd Bildungscloud
   ```

2. Repositories klonen

   ```bash
   git clone https://github.com/hpi-schul-cloud/schulcloud-server
   git clone https://github.com/hpi-schul-cloud/schulcloud-client
   git clone https://github.com/hpi-schul-cloud/nuxt-client
   ```

   Zum Laufen der Bildungscloud nicht notwendig, aber für Entwickler dennoch interessant sind die Repositories für unsere [End-2-End-Tests](https://github.com/hpi-schul-cloud/end-to-end-tests) und das [Deployment](https://github.com/hpi-schul-cloud/dof_app_deploy).

#### 2. Datenbank einrichten

- Datenbankordner anlegen

  ```bash
  md C:/Bildungscloud/db
  ```

- [MongoDB installieren](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (Community Server)
- Datenbank starten (Version und Pfad entsprechend vorher anpassen)

  ```bash
  "C:\Program Files\MongoDB\Server\5.0\bin\mongod" --dbpath "D:\apps\SchulCloud\db"
  ```

- Datenbank mit Testdaten füllen

  Im schulcloud-server Ordner:

  ```bash
  npm run setup:db:seed
  ```

- [MongoDB Compass](https://www.mongodb.com/try/download/tools) installieren zum Einsehen der Datenbank

#### 3. Server einrichten

##### Voraussetzungen

- Pakete installieren

  ```bash
  cd schulcloud-server && npm ci
  ```

- [Erlang](https://www.erlang.org/) installieren (nicht zwangsläufig notwendig)
- [Docker](https://www.docker.com/get-started/) installieren (oder [Colima](https://github.com/abiosoft/colima) via **brew install colima docker**)
- [RabbitMQ](https://www.rabbitmq.com/) installieren ([Installation Guide](https://www.rabbitmq.com/install-windows.html))

##### Server starten

- RabbitMQ starten

  ```bash
  docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3.8.9-management
  ```

- Server starten

  ```bash
  npm run nest:start:dev
  ```
  
  (oder `npm run nest:start:debug`)

Erfolgreich, wenn [http://localhost:3030/](http://localhost:3030/) die feathers Startseite zeigt.

#### 4. Legacy Client (schulcloud-client) einrichten

- Pakete installieren

  ```bash
  npm i -g nodemon
  cd schulcloud-client && npm ci
  ```

- Client bauen

  ```bash
  npm run build
  ```

- Client starten

  ```bash
  npm run watch
  ```

Erfolgreich, wenn [http://localhost:3100/](http://localhost:3100/) die Bildungscloud Startseite zeigt.

#### 5. Nuxt Client einrichten

- Pakete installieren

  ```bash
  npm ci
  ```

- Nuxt Client starten

  ```bash
  npm run serve
  ```

Erfolgreich, wenn [http://localhost:4000/](http://localhost:4000/) die Bildungscloud Startseite zeigt.

#### Mögliche Probleme

- [Installieren der Unterstützung für C und C++ in Visual Studio](https://docs.microsoft.com/de-de/cpp/build/vscpp-step-0-installation?view=msvc-170)
  - Es kann Probleme mit der 2022 Version geben, dann kann man die [2019 Version](https://visualstudio.microsoft.com/de/vs/older-downloads/) installieren


## Installation für MacOS (Intel & Apple M1 Chip)

### Voraussetzungen

- [Homebrew](https://brew.sh/) installieren (inkl. Xcode Command Line Tools, falls nicht vorhanden)
- [Git](https://git-scm.com/downloads) installieren, falls nicht vorhanden
- [Node](https://nodejs.org/de/) installieren (Version beachten, siehe package.json)
  - Hierfür ist [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) empfehlenswert

### 1. Lokalen Ordner erstellen und Projekt von Github ziehen

1. Ordner erstellen und öffnen (in diesem Guide wird als Pfad ~/Bildungscloud/ benutzt)

   ```bash
   mkdir Bildungscloud && cd Bildungscloud
   ```

2. Repositories klonen

   ```bash
   git clone https://github.com/hpi-schul-cloud/schulcloud-server
   git clone https://github.com/hpi-schul-cloud/schulcloud-client
   git clone https://github.com/hpi-schul-cloud/nuxt-client
   ```

   Zum Laufen der Bildungscloud nicht notwendig, aber für Entwickler dennoch interessant sind die Repositories für unsere [End-2-End-Tests](https://github.com/hpi-schul-cloud/end-to-end-tests) und das [Deployment](https://github.com/hpi-schul-cloud/dof_app_deploy).

### 2. Datenbank einrichten

- Datenbankordner anlegen

  ```bash
  mkdir ~/Bildungscloud/db
  ```

- [MongoDB installieren](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) (Community Server)

  ```bash
  brew tap mongodb/brew
  brew install mongodb-community@5.0
  ```

- Datenbank mit Testdaten füllen

  Im schulcloud-server Ordner:

  ```bash
  npm run setup:db:seed
  ```

- [MongoDB Compass](https://www.mongodb.com/try/download/tools) installieren zum Einsehen der Datenbank
- Ein paar hilfreiche Tipps zum Umgang mit MongoDB: https://docs.dbildungscloud.de/x/NIJdD

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

### 3. Server einrichten

#### Voraussetzungen (Apple M1 Chip)

- [CMake](https://cmake.org/) installieren (via Homebrew)

  ```bash
  brew install cmake
  ```

#### Voraussetzungen (Intel & Apple M1 Chip)

- Pakete installieren

  ```bash
  cd schulcloud-server && npm ci
  ```

- [Docker](https://www.docker.com/get-started/) installieren
- [RabbitMQ](https://www.rabbitmq.com/) installieren (via [Homebrew](https://www.rabbitmq.com/install-homebrew.html))

  ```bash
  brew install rabbitmq
  ```

#### Server starten

- Datenbank starten

  ```bash
  brew services start mongodb-community@5.0
  ```

- RabbitMQ starten

  ```bash
  docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3.8.9-management
  ```

- Server starten (automatischer Reload nach Speichern von Änderungen)

  ```bash
  npm run nest:start:dev
  ```
  
  (oder `npm run nest:start:debug`)

Erfolgreich, wenn [http://localhost:3030/](http://localhost:3030/) die feathers Startseite zeigt.

### 4. Legacy Client (schulcloud-client) einrichten

- Pakete installieren

  ```bash
  cd schulcloud-client && npm ci
  ```

- Client bauen (Style-Anpassungen werden nur nach diesem Command korrekt berücksichtigt)

  ```bash
  npm run build
  ```

- Client starten (automatischer Reload nach Speichern von Änderungen)

  ```bash
  npm run watch
  ```

- Anderes Theme wählen (bspw. N21)

  ```bash
  declare -x SC_THEME="n21"
  npm run build
  npm run start
  ```

#### Mögliche Probleme

- Python wird benötigt, manchmal wird trotz vorhandener Python 3-Version versucht die CommandLineTools von MacOS neu zu installieren. Bspw. zu provozieren mit dem Command **python -v**

  Zunächst prüfen ob das Verzeichnis `/Library/Developer/CommandLineTools` vorhanden ist. Falls ja, python via homebrew installieren falls nicht bereits geschehen (in der neuesten Version) und danach folgende Zeilen in die bekannte Path collection des Systems kopieren unter Beachtung der aktuellen Version:
  
  ```
  /opt/homebrew/opt/python@3.9/libexec/bin
  /opt/homebrew/bin/python3
  ```

Erfolgreich, wenn [http://localhost:3100/](http://localhost:3100/) die Bildungscloud Startseite zeigt.

### 5. Nuxt Client einrichten

#### Für Apple M1 Chips

- [Google Chrome](https://www.google.com/chrome/) installieren

  Dies ist empfohlen, um die Installation von Chromium zu vermeiden. Zum Entwickeln und Testen sollten gängige Browser sowieso auf dem System installiert sein.

- Chromium Installation umgehen

  ```bash
  cd nuxt-client
  export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
  export PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  ```

  oder

  ```bash
  cd nuxt-client
  export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
  export PUPPETEER_EXECUTABLE_PATH="which chromium"
  ```

#### Für Intel & Apple M1 Chips

- Pakete installieren

  ```bash
  npm ci
  ```

- Nuxt Client starten (automatischer Reload nach Speichern von Änderungen)

  ```bash
  npm run serve
  ```

- Anderes Theme wählen (bspw. N21)

  ```bash
  declare -x SC_THEME="n21"
  npm run build
  npm run start
  ```

Erfolgreich, wenn [http://localhost:4000/](http://localhost:4000/) die Bildungscloud Startseite zeigt.

#### Mögliche Probleme

Wenn ihr bei der Ausführung von `npm ci` folgende Fehlermeldung bekommt:

<details>
<summary>Canvas Installation Error (klicken zum Ausklappen)</summary>

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

Stellt sicher dass ihr mit `nvm use` die richtige Node-Version nutzt und ebenfalls folgende Dependency installiert um das canvas Package zu installieren:

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

Danach sollte `npm ci` wieder problemlos durchlaufen.

## Setup angeschlossener Systeme

### Kalender einrichten

Die Anleitung zum Einrichten des Kalenders findest du unter [Setup postgreSQL for calendar service](/spaces/DBH/pages/202572100/Setup+postgreSQL+for+calendar+service). Zum täglichen Gebrauch ist dies allerdings nicht notwendig.

### Lokales Mailing testen

- [Mail Drop](https://github.com/kaffeekrone/mail-drop) nutzen

### Lokaler Files Storage

1. Repository klonen und Installation wie in Repo readme beschrieben durchführen: https://github.com/hpi-schul-cloud/file-storage

2. Starten des Service

   ```bash
   npm run start:files-storage:dev
   ```

3. Im **legacy Client** muss in der Datei ".env" noch der Wert von "CORS" auf false gesetzt werden, da sonst ein Upload über den alten Service nicht möglich ist.

4. **Minio** wird hier genutzt als lokaler Speicher.

   Über lokalen Terminal folgenden Befehl ausführen um einen Storage über Minio zu erstellen, welcher dann über [http://localhost:9000](http://localhost:9000) erreichbar ist:

   ```bash
   docker run \
     --name minioS3storage \
     -p 9000:9000 \
     -p 9001:9001 \
     -e "MINIO_ROOT_USER=miniouser" \
     -e "MINIO_ROOT_PASSWORD=miniouser" \
     quay.io/minio/minio server /data --console-address ":9001"
   ```

### Lokales Legacy File System

Minio muss aufgesetzt sein siehe dazu "Lokaler Files Storage"

1. Nach dem seeden der lokalen Datenbank (beispielsweise über den Befehl "npm run setup:db" im server-repository) muss noch eine collection mit dem Namen "storageproviders" angelegt werden, da es dafür keine Seed-Daten gibt mit den nötigen Credentials (Sicherheitsaspekt). In diese Collection sollte dann folgendes Dokument eingefügt werden:

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

2. Damit dies auch genutzt werden kann muss in der "schools"-Collection in der jeweils genutzten Schule der passende Provider eingetragen werden. Nehmen wir an, wir wollen den Nutzer "lehrer@schul-cloud" nutzen, dann gehen wir in die Schule mit dem Namen "Paul-Gerhardt-Gymnasium" und ergänzen das Dokument dort mit dem zusätzlichen Attribut und passendem Wert aus dem oben angelegten Storageprovider-Dokument:

   **schools collection:**
   ```json
   "storageProvider" : ObjectId("62949a4003839b6162aa566b")
   ```

3. Jetzt kann sowohl der neue als auch der alte File-Service genutzt werden.

### Previews für Bilder generieren

Der File Storage Service nutzt für die Generierung der Preview Bilder Imagemagick. Damit Previewbilder generiert werden, muss Imagemagick lokal installiert sein.

[Dieses Script](https://gist.github.com/hurricup/e14ae5bc47705fca6b1680e7a1fb6580) installiert Imagemagick mit Support für heic Dateien (funktioniert auch unter WSL).

**p.s.:** Wenn keine Vorschau angezeigt wird - weil sie noch vom Virenscan blockiert wird -, dann kann in MongoDB: `fileRecord.securityCheck.status` mit `verified` überschrieben werden.

### Virenschutz lokal per Docker

Um ClamAV lokal als Virenscanner laufen zu lassen - reicht es wie folgt einen entsprechenden Docker-Container zu starten:

```bash
docker run -d -p 3310:3310 mkodockx/docker-clamav:alpine
```

### Redis einrichten

In unseren Deployments nutzen wir [Redis](https://redis.io/) zum Caching. Lokal ist Redis aber nicht zwingend notwendig. Wenn Redis lokal nicht eingerichtet ist, wird standardmäßig ein in-memory Store genutzt, der nicht extra eingerichtet werden muss.

Falls Redis lokal genutzt werden soll, sind folgende Schritte zur Einrichtung nötig:

1. Redis als [Docker-Container](https://hub.docker.com/_/redis) starten **oder** lokal installieren.
2. Im Server in `default.schema.json` unter `REDIS_URI` die URL von Redis als default eintragen (normalerweise: `redis://localhost:6379`).
3. Im Legacy-Client in `config/global.js` die URL von Redis als default für `REDIS_URI` eintragen.

### SuperHero-Dashboard einrichten

Voraussetzung: klonen des Repos von https://github.com/hpi-schul-cloud/superhero-dashboard

Zur Arbeit mit dem SuperHero-Dashboard (SHD) - welches quasi als Datenbank-Schicht zur Bearbeitung von Nutzerdaten für nicht-Devs genutzt wird - gibt es ein paar Dinge zu beachten seit der Nutzung von Node Version 20.

**Unter Windows:** Viele im SHD genutzte Packages sind sehr veraltet und benötigen die Installation weiterer C++ Packages zur Installation der Abhängigkeiten des Repositories. Hier sollte man sich am besten an dem Fehler-Log entlang bewegen und die jeweiligen Pakete nachinstallieren.

**Unter Mac:** Aus dem gleichen Grund wird hier das Paket "distutils" genutzt, welches normalerweise durch die Python-Installation abgedeckt wird, allerdings seit Python 3.12 nicht mehr dort enthalten ist. Hier muss man also einen separaten Weg gehen, um die notwendigen Funktionalitäten zu erhalten. Bestenfalls nutzt man einen der folgenden Wege mittels homebrew unter macOS.

1. Die Installation von `brew install python-setuptools`, in der Hoffnung dass dort alles notwendige installiert wurde.
2. Falls 1. nicht klappt, sollte man die alte Python-Version nutzen mittels `brew install python@3.11` danach muss die entsprechende Env Var in ".zshrc" gesetzt werden. Entweder mit `export PYTHON=3.11` oder `export npm_config_python=/opt/homebrew/bin/python3.11`, notfalls kann auch einfach beides gleichzeitig genutzt werden, hierbei kann erstmal nicht viel kaputt gehen.