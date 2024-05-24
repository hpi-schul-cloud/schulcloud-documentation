# How it works

## Configuration

- NEST_LOG_LEVEL - logging level
- FEATURE_TLDRAW_ENABLED - flag determining if tldraw is enabled
- TLDRAW_URI - address of tldraw server 
- INCOMING_REQUEST_TIMEOUT - request timeout
- TLDRAW_DB_URL - mongoDB connection string
- TLDRAW__SOCKET_PORT - port number for websockets connection
- TLDRAW__PING_TIMEOUT - timeout for ping-pong during establishing websockets connection
- TLDRAW__FINALIZE_DELAY - delay in ms before checking if can finalize a tldraw board
- TLDRAW__GC_ENABLED - if tldraw garbage collector should be enabled
- TLDRAW__DB_COMPRESS_THRESHOLD - threshold size for tldraw mongo documents compression
- TLDRAW__MAX_DOCUMENT_SIZE - max size of a single tldraw document in mongo
- TLDRAW__ASSETS_ENABLED - enables uploading assets to tldraw board
- TLDRAW__ASSETS_SYNC_ENABLED - enables synch of tldraw board assets with filestorage (no longer used)
- TLDRAW__ASSETS_MAX_SIZE - maximum asset size in bytes
- TLDRAW__ASSETS_ALLOWED_MIME_TYPES_LIST - listy of allowed assets MIME types
- REDIS_URI - Redis connection string
- TLDRAW_CLIENT_REPLICAS - number of pods for tldraw-client 
- TLDRAW_SERVER_REPLICAS - number of pods for tldraw-server
- TLDRAW_ADMIN_API_CLIENT__API_KEY - authorization API key for accessing tldraw controller (delete flow) 
- TLDRAW_ADMIN_API_CLIENT__BASE_URL - address of tldraw controller (delete flow) 

In order to have deletion functionality fully working you have to fill those feature flags, e.g.:
- ADMIN_API__ALLOWED_API_KEYS=["7ccd4e11-c6f6-48b0-81eb-abcdef123456"]
- TLDRAW_ADMIN_API_CLIENT__API_KEY="7ccd4e11-c6f6-48b0-81eb-abcdef123456"
- TLDRAW_ADMIN_API_CLIENT__BASE_URL="http://localhost:3349"

## Create
![Create tldraw workflow](./assets/Create TLDRAW.drawio.svg)

Creation of Tldraw starts with creation proccess for Courses and CourseBoard. It has Representation in CourseBoard as card's element (BoardNode in db). After creating Representation of drawing we can enter actual tldraw SPA client (left side of picture).

1. User enters CourseBoard and creates Representation of whiteboard (tldraw) in CourseCard.
2. Data is saved and feedback with proper creation is given - user can see Representation and can enter whiteboard.
3. By entering whiteboard user is redirected to SPA tldraw-client.
4. Tldraw-client is starting WS connection with tldraw-server.
5. Tldraw-server firstly checks if user has permission to this resource (by checking if user has a permission to Representation of whiteboard -BoardNode).
    Id of Representation is same as drawingName, which is visible in tldraw-client url.
6. If user has permission tldraw-server is allowing to remain connection and getting drawing data from separate tldraw-db. If there were no drawing data saved tldraw-server will create it automatically. 

## Usage
![Usage tldraw workflow](./assets/Use tldraw.drawio.svg)

### Connection

1. user joins tldraw board
2. tldraw-client connects to one of the tldraw-server pods and tries to establish websocket connection
3. tldraw-server calls schulcloud-server via HTTP requests to check user permissions, if everything is fine the websocket connection is established
4. tldraw-server gets stored tldraw board data from mongodb and sends it via websocket to connected users
5. tldraw-server starts subscribing to Redis PUBSUB channel corresponding to tldraw board name to listen to changes from other pods

### Sending updates/storing data

1. tldraw-client sends user's drawing changes to the tldraw-server via websocket connection
2. tldraw-server stores the board update in the mongodb - basically creates a diff between what's already stored and what's being updated
3. tldraw-server pushes the update to correct Redis channel so that clients connected to different pods have synchronized board data
4. other pods subscribing to Redis channel send updates to their connected clients via websocket whenever they see a new message on Redis channel

## Delete
![Delete tldraw workflow](./assets/Delete TLDRAW.drawio.svg)

1. User from schulcloud app in CourseBoard deletes whiteboard (tldraw) instance form CardBoard.
2. Having drawingName sc-server is removing Representation data in sc-database - BoardNodes collection ( drawingName === BoardNode id)
3. Sc-server is calling tldraw-server via tldraw-management rules in tldraw-server-svc to delete all data that has given id).
4. After deletion user sees refreshed state of CourseBoard. 

## Assets
### files upload

Images/GIFs can be uploaded into tldraw whiteboard by every user with access to the board. We use s3 storage to physically store uploaded assets while tldraw only holds URL to a resource.

The files are uploaded by calling schulcloud-api's fileController upload endpoint. This is possible because tldraw is represented as a boardnode called drawing-element. Mongo id of this drawing-element is a roomId used in URL param when connecting to a specific board.

### files deletion

Because of the undo/redo functionality of tldraw (user can basically undo an upload of an image, undo a deletion, then redo upload etc.) we needed a way to clean up unused assets from the storage. We could not use soft delete/restore endpoints every time undo/redo happens due to various issues with performance/user experience and technical challenges that arose when testing different scenarios. We decided to go with cron job solution: once per day, at midnight by default, we would go through each board stored in database, get every asset that's stored as URL but no longer used as an active drawing and then delete all of them via amqp call to filesStorage service.

For implementation details, take a look at: tldraw-files.console.ts.