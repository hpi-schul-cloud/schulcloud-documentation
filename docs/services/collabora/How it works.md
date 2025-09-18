# How Collabora Works
Collabora is an online office suite that enables collaborative editing of documents, spreadsheets, and presentations directly in the browser. It integrates with Schulcloud to provide users with online and real-time editing capabilities. Office documents are displayed on the column board as collabora styled elements.

## System components
The Collabora integration in Schulcloud consists of several key system components:
### Vue Client
The Vue client is responsible for displaying Collabora office documents in an iframe. It requests an authorized Collabora document URL from the file storage API, adds user and locale information, and embeds the document for editing or viewing. On mount, it sets up postMessage communication between the iframe and the parent Vue app to enable and disable collabora features. This component acts as the user interface bridge between Schulcloud and Collabora.

The File Element component of the Vue client maps board permissions to Collabora's view and edit modes. This ensures that users with edit rights can modify documents, while others are restricted to view-only mode.

### Collabora Server
The Collabora server is deployed as a Docker container using the official Collabora code version. It is responsible for providing the online document editing functionality within the Schulcloud system. The server receives authorized requests from the Vue client, fetches the requested files from the file storage server, and renders the document editor in the browser. It manages collaborative editing sessions, enforces access control using tokens, and ensures that users can view and edit office documents in real time.

#### Configuration in dof_app_deploy
The Collabora server is configured in the `dof_app_deploy` repository using specific parameters to control its behavior and performance:

- `--o:ssl.enable=false`: Disables SSL within the Collabora server (SSL termination is handled externally).
- `--o:ssl.termination=true`: Enables SSL termination, allowing secure connections to be handled by a reverse proxy or load balancer.
- `--o:num_prespawn_children=4`: Sets the number of pre-spawned child processes to 4, improving responsiveness for concurrent users.
- `--o:per_document.bgsave_timeout_secs=600`: Sets the background save timeout for each document to 600 seconds (10 minutes).
- `--o:net.connection_timeout_secs=600`: Sets the network connection timeout to 600 seconds, allowing longer-running connections without interruption.

### File Storage server
The File Storage server acts as a central integration point between Schulcloud, Collabora Online, and the underlying storage backend. It exposes WOPI endpoints that enable real-time document collaboration. Its main responsibilities include:

- **Access Control & Authorization:** Validates user permissions and generates secure access tokens, ensuring only authorized users can view or edit documents through Collabora. Coordinates with Schulcloud's authorization services for token validation.

- **File Metadata & Status:** Provides Collabora with essential metadata (such as file name, size, and permissions) via endpoints like `CheckFileInfo`, allowing Collabora to correctly display and manage documents.

- **File Content Streaming:** Streams file contents to Collabora for viewing or editing (`GetFile` endpoint), and receives updated file contents from Collabora to save back to the storage system (`PutFile` endpoint).

- **Feature Enablement & Security:** Checks if Collabora integration is enabled for a given file and ensures files are safe to access (e.g., not blocked due to viruses or unsupported formats).

### Schulcloud Server
The Schulcloud server acts as the central authentication and authorization service within the system. It validates user identities, manages access permissions, and issues secure tokens that allow users to interact with Collabora and the File Storage server. The Schulcloud server ensures that only authorized users can access or edit documents.

## Configs
`FEATURE_COLUMN_BOARD_COLLABORA_ENABLED` enables Collabora Feature in Vue client and File Storage server.

`COLLABORA_MAX_FILE_SIZE_IN_BYTES` sets the maximum allowed file size for documents to be opened and edited with Collabora. If a file exceeds this limit, it cannot be opened in the Collabora editor, but it can still be saved to the storage system.

`WOPI_URL` sets the origin of the wopi endpoint for the collabora server.

`WOPI_POST_MESSAGE_ORIGIN` sets the domain the collabora server page sends/receives PostMessages from, we only listen to messages from this domain. PostMessage communication is used in collabora page in vue client.

`WOPI_TOKEN_TTL_IN_SECONDS` sets the time-to-live (TTL) for WOPI access tokens in seconds. This determines how long a token remains valid for accessing documents via Collabora.


## Workflow
The workflow describes how the different system components interact when opening a document on the column boord:

### Opening a document

1. User clicks on an office document on the board.
2. A new browser tab opens, displaying a Vue page with an embedded iframe.
3. When the Vue page mounts, it requests an authorized Collabora URL from the file storage server.
4. The file storage server requests an authorization token from the Schulcloud server.
5. The file storage server queries the Collabora server to discover the URL of the responsible Collabora instance in the cluster.
6. The file storage server combines the token and Collabora URL, then returns them to the Vue page.
7. The Vue page loads the Collabora URL in the iframe, initiating a request to the Collabora server.
8. The Collabora server requests the document file with the token from the file storage server.
9. The file storage server validates the authorization token with the Schulcloud server.
10. The file storage server responds with the requested file.
11. The Collabora server renders the editor with the document data inside the iFrame of the Vue page.


![Collabora workflow](how_it_works.png)