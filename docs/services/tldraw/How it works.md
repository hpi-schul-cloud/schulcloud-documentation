# How it works

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
- WORKER_MIN_MESSAGE_LIFETIME - minimal lifetime of a message consumed by the worker
- WORKER_TASK_DEBOUNCE - minimum idle time (in milliseconds) of the pending messages to be claimed
- WORKER_TRY_CLAIM_COUNT - the maximum number of messages to claim
- X_API_ALLOWED_KEYS - list of allowed xAPI keys

In order to have deletion functionality fully working you have to fill those feature flags, e.g.:

tldraw-server :
- X_API_ALLOWED_KEYS="7ccd4e11-c6f6-48b0-81eb-abcdef123456"

schulcloud-server :
- TLDRAW_ADMIN_API_CLIENT_API_KEY="7ccd4e11-c6f6-48b0-81eb-abcdef123456"
- TLDRAW_ADMIN_API_CLIENT_BASE_URL="http://localhost:3349"

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