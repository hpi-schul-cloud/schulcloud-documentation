# Technical details

## Introduction

In tldraw, **Y-Redis** and **S3 storage** are integrated to support collaborative drawing features, data synchronization, and persistent storage in a scalable and efficient manner. The combination of **Yjs** (used for collaborative editing), **Y-Redis** (for real-time data synchronization), and **S3** (for file storage) enables the platform to handle complex collaborative interactions and large-scale, persistent storage of drawing data.

### How tldraw Uses Y-Redis and S3 Storage:

1. **Real-time Collaboration with Yjs:**
   - **Yjs** is the backbone of real-time collaboration in tldraw. It provides a **CRDT-based (Conflict-free Replicated Data Type)** framework for handling shared documents where changes made by one user are automatically and consistently synchronized across all other users in the same session.
   - In tldraw, the **drawing canvas** or **document** is represented as a **Yjs document**. Users can draw shapes, lines, text, or modify the canvas in real time.
   - The **Yjs document** tracks all changes in the form of small, incremental edits. These edits could be changes to the position of objects, the creation of new objects (e.g., shapes or lines), or modification of existing elements.

2. **Y-Redis for Real-Time Data Synchronization:**
   - **Y-Redis** is used to store and synchronize these Yjs documents across multiple users in real time. 
   - Redis, being a fast in-memory key-value store, provides low-latency updates that are crucial for real-time collaboration. It is used for:
     - **Broadcasting updates**: When one user makes a change, Yjs sends that change to the Redis server, which then distributes the change to all other connected users.
     - **Data persistence**: Changes are stored in Redis and can be fetched by other users at any time to maintain consistency.
   - The use of **Redis Pub/Sub** allows different instances of the tldraw application to subscribe to channels. When one user makes a change, the Redis system publishes the change, and other users (who are subscribed to that document) get updated immediately.

3. **S3 Storage for Persistent and Large-Scale File Storage:**
   - While Y-Redis ensures real-time synchronization and collaboration, **S3** (Amazon Simple Storage Service) is used for **persistent storage** of larger files or data that need to be saved across sessions.
   - **S3** is highly scalable and can store large amounts of data. For tldraw, S3 is primarily used for:
     - **Storing canvases and drawings**: While **Y-Redis** handles real-time data synchronization and storage of changes, the worker service is responsible for **periodically persisting** the state of the collaborative canvas to **S3 storage**.
   - **S3 as a file store**: Unlike Redis, which is an in-memory store designed for fast access and transient data, S3 is optimized for storing larger data in a persistent manner. This makes it suitable for storing media files, large canvas snapshots, and other assets that don't need to be constantly updated in real-time.
   
4. **Integration Between Y-Redis and S3:**
   - **Y-Redis** and **S3** serve different but complementary purposes:
     - **Y-Redis** handles **real-time synchronization** of drawing changes and interactions, ensuring that users see each other's edits in near real-time.
     - **S3** handles **long-term storage** and **backup** of the drawings or canvases themselves. For example, when a user closes the app or saves their session, the drawing data is saved to S3.
   - The worker service will save snapshots of the collaborative document or canvas to S3 periodically, ensuring that the state of the canvas is preserved even if a user disconnects or the server restarts.

5. **How tldraw's Workflow Would Look Using Y-Redis and S3:**
   - **Step 1: Collaborative Drawing Session**
     - Users interact with the tldraw canvas, making real-time changes (drawing shapes, text, etc.).
     - The changes are immediately propagated through **Yjs** and **Y-Redis**. Y-Redis stores these changes in memory and broadcasts them to other users.
     - Each user's drawing operations are synchronized, so everyone sees the same live canvas.

   - **Step 2: Saving the Canvas**
     - On a regular basis the worker service will send a **snapshot of the canvas** (or the entire Yjs document) to **S3**. This can include data about the shapes, their positions, colors, and any other relevant canvas data.
     - The snapshot can be stored as a **JSON object**, an image, or another format, depending on how tldraw chooses to serialize the data.

   - **Step 3: Retrieving Saved Data**
     - When a user returns to the drawing session or opens the application at a later time, the application queries **S3** for the last saved canvas snapshot.
     - Once retrieved, the snapshot is loaded back into the application, allowing users to continue editing from where they left off.
     - Y-Redis can be used in the background to ensure that any new changes made by users are synchronized in real time while they are working on the canvas.

6. **Scalability and Fault Tolerance:**
   - **Redis Scaling**: As more users join the session, Redis allows scaling horizontally, ensuring that updates are propagated quickly to all connected clients.
   - **S3 Scaling**: S3 is designed to scale automatically and handle large amounts of storage without performance degradation. This makes it ideal for storing large or numerous drawing assets, like high-resolution images or full snapshots of large canvases.

### Benefits of Using Y-Redis and S3 Together:

- **Real-time Collaboration**: Y-Redis ensures that changes made by users are immediately reflected for all participants, enabling fluid collaboration on the canvas.
- **Persistence**: S3 provides long-term storage for the canvas and drawing data, allowing for version control, backups, and recovery in case of unexpected disruptions.
- **Scalability**: Redis handles real-time data synchronization efficiently, even with a large number of concurrent users. S3 handles large files and assets without requiring custom infrastructure management.
- **Separation of Concerns**: Redis is optimized for fast, real-time data synchronization, while S3 handles large-scale, persistent storage, allowing tldraw to leverage both for different aspects of the application.

### Example Scenario:

- **User A** and **User B** start a collaborative session in tldraw, and they can see each other's updates in real time (thanks to Y-Redis).
- After some time, the worker service saves the drawing to S3, and now the drawing is stored in S3 as a persistent snapshot.
- **User B**, who was not connected when the session ended, can later load the canvas from S3, where the most recent version is stored.
- Meanwhile, as new users join the session, **Y-Redis** continues to handle the real-time synchronization of the drawing, ensuring smooth interaction.

### Conclusion:

In **tldraw**, **Y-Redis** and **S3** are integrated to deliver a collaborative and scalable experience. Y-Redis ensures real-time synchronization of drawing changes among multiple users, while S3 provides persistent and scalable storage for canvas data. This combination allows tldraw to offer seamless collaboration, persistent storage, and fault-tolerant handling of large-scale data.

## Backend

### Deployments

Tldraw is deployed as a separate application from schoulcloud-server and consists of the following deployments :

- tldraw-server-deployment - deployment for tldraw-server's instances.
- tldraw-worker-deployment - deployment for worker's instances.
- tldraw-client-deployment - deployment for tldraw-client's instances.

### Tldraw-server code structure

- tldraw-config.controller.ts - controller that exposes tldraw server configuration to be used by the tldraw client.
- tldraw-document.controller.ts - controller that expose HTTP deletion method outside the tldraw-server application.
- tldraw-document.service.ts - service used by TldrawDocumentController.
- redis.service.ts - encapsulates the logic for creating and managing Redis instances, supporting both standalone and sentinel configurations, and integrates seamlessly with the NestJS framework.
- ioredis.adapter.ts - encapsulates the logic for interacting with Redis, including defining custom commands and subscribing to channels. It leverages the ioredis library and integrates with the application's configuration and logging systems to provide a robust and flexible Redis adapter.
- api.service.ts - API service for y-redis.
- ws.service.ts - Responsibe for Redis communication.
- metrics.service.ts - service resonsible for storing application-level metrics.
- worker.service.ts - responsible for persisting the current state of changed tldraw documents into the file storage.

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

- https://github.com/yjs/y-redis - code from this package was used to add y-redis as a persistence to tldraw

- https://discord.com/invite/SBBEVCA4PG discord channel with open questions and answers

- https://grafana.dbildungscloud.dev/d/b6b28b2b-3129-4772-8102-e32981d2c2e3/devops-tldraw-metrics?orgId=1&refresh=1m&var-source=sc-dev-dbc&var-env=main&var-env=tldraw-debugging - grafana v

- https://grafana.dbildungscloud.org/d/b6b28b2b-3129-4772-8102-e32981d2c2e0/devops-tldraw?orgId=1&from=now-6h&to=now&refresh=1m - grafana metrics

- https://github.com/nimeshnayaju/yjs-tldraw - yjs with tldraw POC

- https://github.com/yjs/y-websocket/tree/master/bin - yjs/y-websocket repo

- https://github.com/erdtool/yjs-scalable-ws-backend/tree/main - Yjs scalable WS backend with redis example

- https://teamchat.dbildungscloud.de/channel/G9hJWv92zXEESKK3X - rocketchat discussion "tldraw syncronisation for release again"

- https://teamchat.dbildungscloud.de/group/SagK4sCyujhu6yZr8 - rocketchat discussion "Tldraw deployment"s
