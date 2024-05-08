How it works
============

# Create
![Create tldraw workflow](./assets/Create TLDRAW.drawio.svg)

Creation of Tldraw starts with creation proccess for Courses and CourseBoard. It has Representation in CourseBoard as card's element (BoardNode in db). After creating Representation of drawing we can enter actual tldraw SPA client (left side of picture).

1. User enters CourseBoard and creates Representation of whiteboard (tldraw) in CourseCard.
2. Data is saved and feedback with proper creation is given - user can see Representation and can enter whiteboard.
3. By entering whiteboard user is redirected to SPA tldraw-client.
4. Tldraw-client is starting WS connection with tldraw-server.
5. Tldraw-server firstly checks if user has permission to this resource (by checking if user has a permission to Representation of whiteboard -BoardNode).
    Id of Representation is same as drawingName, which is visible in tldraw-client url.
6. If user has permission tldraw-server is allowing to remain connection and getting drawing data from separate tldraw-db. If there were no drawing data saved tldraw-server will create it automatically. 

# Usage
![Usage tldraw workflow](./assets/Use tldraw.drawio.svg)

## Connection

1. user joins tldraw board
2. tldraw-client connects to one of the tldraw-server pods and tries to establish websocket connection
3. tldraw-server calls schulcloud-server via HTTP requests to check user permissions, if everything is fine the websocket connection is established
4. tldraw-server gets stored tldraw board data from mongodb and sends it via websocket to connected users
5. tldraw-server starts subscribing to Redis PUBSUB channel corresponding to tldraw board name to listen to changes from other pods

## Sending updates/storing data

1. tldraw-client sends user's drawing changes to the tldraw-server via websocket connection
2. tldraw-server stores the board update in the mongodb - basically creates a diff between what's already stored and what's being updated
3. tldraw-server pushes the update to correct Redis channel so that clients connected to different pods have synchronized board data
4. other pods subscribing to Redis channel send updates to their connected clients via websocket whenever they see a new message on Redis channel

# Delete
![Delete tldraw workflow](./assets/Delete TLDRAW.drawio.svg)

1. User from schulcloud app in CourseBoard deletes whiteboard (tldraw) instance form CardBoard.
2. Having drawingName sc-server is removing Representation data in sc-database - BoardNodes collection ( drawingName === BoardNode id)
3. Sc-server is calling tldraw-server via tldraw-management rules in tldraw-server-svc to delete all data that has given id).
4. After deletion user sees refreshed state of CourseBoard. 