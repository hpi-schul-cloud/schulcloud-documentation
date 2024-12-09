# How it works

The terms Redis and Valkey are used here synonymously and should describe the used in-memory-database.

## Configuration

- AUTHORIZATION_API_HOST - host address of the authorization endpoint (schuldcloud-server)
- FEATURE_TLDRAW_ENABLED - flag determining if tldraw is enabled
- LOGGER_LOG_LEVEL - logging level
- LOGGER_EXIT_ON_ERROR - flag whether an error will cause the application to stop
- METRICS_COLLECT_DEFAULT - flag whether the default metrics shall be collected
- REDIS_CLUSTER_ENABLED - flag whether a redis cluster or used or not
- REDIS_URL - redis connection string
- REDIS_SENTINEL_SERVICE_NAME - name of the redis sentinel service
- REDIS_PREFIX - prefix to be used with redis database
- REDIS_SENTINEL_NAME - name of the redis sentinel
- REDIS_SENTINEL_PASSWORD - password for the redis sentinel
- S3_ACCESS_KEY - access key for S3 storage
- S3_BUCKET - name of the S3 bucket
- S3_ENDPOINT - URL of the S3 service
- S3_PORT - port number for the S3 service
- S3_SECRET_KEY - secret key for S3 storage
- S3_SSL - flag to enable or disable SSL for S3 storage
- TLDRAW_ASSETS_ENABLED - enables uploading assets to tldraw board
- TLDRAW_ASSETS_MAX_SIZE_BYTES - maximum asset size in bytes
- TLDRAW_ASSETS_ALLOWED_MIME_TYPES_LIST - list of allowed assets MIME types
- TLDRAW_WEBSOCKET_PATH - path for the tldraw websocket connection
- TLDRAW_WEBSOCKET_URL - URL for the tldraw websocket connection
- WORKER_MIN_MESSAGE_LIFETIME - minimal lifetime of a update message consumed by the worker
- WORKER_TASK_DEBOUNCE - minimum idle time (in milliseconds) of the pending task messages to be claimed
- WORKER_TRY_CLAIM_COUNT - the maximum number of task messages to claim
- X_API_ALLOWED_KEYS - list of allowed xAPI keys

In order to have deletion functionality fully working locally you have to fill those feature flags, e.g.:

tldraw-server :
- X_API_ALLOWED_KEYS="7ccd4e11-c6f6-48b0-81eb-abcdef123456"

schulcloud-server :
- TLDRAW_ADMIN_API_CLIENT_API_KEY="7ccd4e11-c6f6-48b0-81eb-abcdef123456"
- TLDRAW_ADMIN_API_CLIENT_BASE_URL="http://localhost:3349"

## Create
![Create tldraw workflow](./assets/Create_TLDRAW.drawio.svg)

The Tldraw board can be created by the user on the courses ColumnBoard. It has a representation in ColumnBoard as DrawingElement inside a card (BoardNode in db). After creating representation as DrawingElement we can enter actual Tldraw SPA client on click.

1. User enters ColumnBoard and creates Representation of whiteboard (tldraw) in Card.
2. Data is saved and feedback with proper creation is given - user can see Representation and can enter whiteboard.
3. By entering whiteboard user is redirected to SPA tldraw-client.
4. Tldraw-client is starting WS connection with tldraw-server.
5. Tldraw-server first checks if user has permission to this resource (by checking if user has a permission to Representation of whiteboard - BoardNode).
    Id of Representation is same as drawingName, which is visible in tldraw-client url.
6. If user has permission tldraw-server is allowing to remain connected and getting drawing data from S3 storage. If there is no drawing data available, the tldraw-server will create a new document automatically. 

## Usage
![Usage tldraw workflow](./assets/Use_TLDRAW.drawio.svg)

### Connection

1. User joins tldraw board.
2. Tldraw-client connects to one of the tldraw-server pods and tries to establish websocket connection.
3. Tldraw-server calls schulcloud-server via HTTP requests to check user permissions. If everything is fine, the websocket connection is established.
4. Tldraw-server gets stored tldraw board data from S3 storage and sends it via websocket to connected user.
5. Tldraw-server starts subscribing to Redis PUBSUB channel corresponding to tldraw board name to listen to changes from other pods.

### Sending updates/storing data

1. Tldraw-client sends user's drawing changes to the tldraw-server via websocket connection.
2. Tldraw-server stores the board update in the valkey db - basically creates a diff between what's already stored and what's being updated.
3. Tldraw-server pushes the update to the boards Redis channel so that connected clients on different pods have synchronized board data.
4. Other pods subscribing to Redis channel send updates to their connected clients via websocket whenever they see a new message on Redis channel.
5. Finally the worker will run and persist the current state of the drawing data by applying all currently available updates from valkey on top of the stored drawing data and update the S3 storage accordingly.

## Delete
![Delete tldraw workflow](./assets/Delete_TLDRAW.drawio.svg)

1. User from schulcloud app in ColumnBoard deletes whiteboard (tldraw) instance form Card.
2. Schulcloud-server is removing representation data in schulcloud-database - BoardNodes collection.
3. Schulcloud-server is calling tldraw-server to delete all data that has given id.
4. Tldraw-server sends a delete action via websocket to inform connected clients about deletion. Clients redirect away from Tldraw-board to ensure that no new messages are added to valkey database.
5. Finally the worker will run, clear all updates and data from the valkey db and delete the drawing data from the S3 storage.

## Assets
### files upload

Images/GIFs can be uploaded into tldraw whiteboard by every user with access to the board. We use FilesStorageService from the schulcloud-server to physically store uploaded assets while tldraw only holds URL to a resource.

The files are uploaded by calling schulcloud-api's fileController upload endpoint. This is possible because tldraw is represented as a boardnode called drawing-element. Mongo id of this drawing-element is a roomId used in URL param when connecting to a specific board.

### files deletion

The deletion of files is handled directly by the tldraw-client itself. On deletion in the UI, the client sends a delete request to the file storage. While awaiting the answer from file storage the editing of the Tldraw-board is blocked to prevent race conditions to the file storage.