# Technical details

## Backend
We are using pure Web Sockets implementation to establish connection between client and server. The reason why we used pure websockets is because tldraw-client is using y-websockets from Yjs library, that does not connect with socket.io web sockets. We also have to implement broadcasting mechanism to provide stateless solution. To achive that goal we decided to use Redis. We used ioredis library to connect to our Redis instance. Everytime user make some changes at first it is handled to the server instance that he is connected to an then this change is send to the channel with the name of the board and servers that also operate that board are listening on this channel so they can recive messages from other servers and provide those changes to users that are connected to this pod. We added the same mechanism for awareness channel so every user from every pod can see other users cursours.


Tldraw is deployed as a separate application from schoulcloud-server working on the same namespace as schoulcloud-server. On the backend side we have added couple new resources:

- tldraw-deployment - deployment for tldraw-server's instances.
- tldraw-server-svc - service for tldraw-service to communicate with tldraw-client (WS) and schoulcloud-server (management e.g. deletion of data)
- tldraw-svc-monitor - service to collect metrics from tldraw. Apart from typical metrics like request time we also added two application-level metrics:
  - sc_tldraw_users - number of active users on boards
  - sc_tldraw_boards - number of active boards
- tldraw-ingress - for steering web external traffic to tldraw-server (for now management rules in tldraw-server-svc are closed from external clients) 


### Tldraw-server code structure

- tldraw.ws.service.ts - main service responsible for establishing web socket connection as well as saving data to database. Responsibe for Redis communication.
- tldraw.controller.ts - controller that expose HTTP deletion method outside the tldraw-server application.
- tldraw.server.ts - service used by TldrawController.
- y-mongodb.ts - main adapter to connect with mongodb, provides transaction mechanism, calucalate diffs between revision and to apply updates.
- tldraw-board.repo.ts - repository object to connect TldrawWsService and YMongodb.
- tldraw.repo.ts - repository used by TldrawService to find and delete boards from database.
- ws-shared-doc.do.ts - main structure representing tldraw drawing during web socket communication. it holds all the web-socket addresses that are connected to this board, so we can inform all the connected clients about changes.  
- tldraw-drawing.entity.ts - object representing tldraw drawingn entity in database.
- metrics.service.ts - service resonsible for storing application-level metrics.


On the backend side we are also using Yjs library to store tldraw board in memory and to calculate diffs after the board is changed.

## Frontend

### Key Files
- stores/setup.ts – this file provides a real-time collaboration environment for a drawing application using the WebSocket and Yjs libraries.
- hooks/useMultiplayerState.ts – custom hook for managing multiplayer state.
- App.tsx – main application component integrating Tldraw and multiplayer state.

### Frontend Technologies

The frontend of the project is built using React and leverages various libraries and tools for enhanced functionality. Here is an overview of the key frontend technologies:

- React: A JavaScript library for building user interfaces.
- Yjs: A real-time collaboration framework for synchronizing shared state.
- Tldraw: A library for drawing functionalities in the application. We use the old version of tldraw:  https://github.com/tldraw/tldraw-v1, after the tldraw team releases the official update of the new version, we will work on the new version and integrate it with the needs of our users. 

### State Managment

1. Yjs is integrated into the project for real-time collaboration. The central state (shapes, bindings, assets) is managed using Yjs maps.
2. store.ts handles the configuration of Yjs, WebSocket connections, and provides centralized maps for shapes, bindings, and assets
3. useMultiplayerState.ts -This hook manages the multiplayer state, including loading rooms, handling file system operations, and updating Yjs maps:
   - Mounting and handling changes in Tldraw App.
   - Presence management and user updates.
   - File system operations like opening and saving projects.

#### useTldrawUiSanitizer.ts 
This hook is designed to observe changes in the DOM, specifically targeting certain buttons and a horizontal rule (< hr>), and hides them if they match a specific ID pattern. We hide this elements and left just only Language and Keyboard shortcuts.

#### Event Handling
   - onMount: Handles mounting of the Tldraw app.
   - onChangePage: Manages page changes and updates Yjs maps.
   - onUndo and onRedo: Handle undo and redo operations.
   - onChangePresence: Manages presence changes in the collaborative environment.
   - onAssetCreate: This function is triggered when a user attempts to upload an asset (like an image or a file).

#### Useful links
- https://tldraw.dev/  - documentation for the new version of tldraw

- https://old.tldraw.com/ - tldraw live application

- https://github.com/tldraw/tldraw-v1 - tldraw v1 repo

- https://github.com/MaxNoetzold/y-mongodb-provider - code from this package was used to add mongodb as a persistence to tldraw

- https://discord.com/invite/SBBEVCA4PG discord channel with open questions and answers

- https://grafana.dbildungscloud.dev/d/b6b28b2b-3129-4772-8102-e32981d2c2e3/devops-tldraw-metrics?orgId=1&refresh=1m&var-source=sc-dev-dbc&var-env=main&var-env=tldraw-debugging - grafana v

- https://grafana.dbildungscloud.org/d/b6b28b2b-3129-4772-8102-e32981d2c2e0/devops-tldraw?orgId=1&from=now-6h&to=now&refresh=1m - grafana metrics

- https://github.com/nimeshnayaju/yjs-tldraw - yjs with tldraw POC

- https://github.com/yjs/y-websocket/tree/master/bin - yjs/y-websocket repo

- https://github.com/erdtool/yjs-scalable-ws-backend/tree/main - Yjs scalable WS backend with redis example

- https://teamchat.dbildungscloud.de/channel/G9hJWv92zXEESKK3X - rocketchat discussion "tldraw syncronisation for release again"

- https://teamchat.dbildungscloud.de/group/SagK4sCyujhu6yZr8 - rocketchat discussion "Tldraw deployment"s

