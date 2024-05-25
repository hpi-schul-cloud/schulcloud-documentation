# Local setup

### To run tldraw locally:

1. Run all of the apps needed for schulcloud like mongodb, backend, frontend, file storage etc.
2. Run redis i.e. in a docker container, it will work on localhost:6379 by default which is what the REDIS_URI env var is set to
3. On schulcloud-server repo: npm run nest:start:tldraw:dev
4. On tldraw-client repo: npm run dev

### Create new whiteboard:

1. Go to a course
2. Go to 'Column board'
3. Create a new card and a new 'Whiteboard' element within it, then click it
4. A new browser tab with URL like: http://localhost:4000/tldraw?roomName=65c37329b2f97cc714d31c00 will open
5. Change the port part from 4000 to 3046, which is the default port of tldraw-client app
6. You should see a working tldraw whiteboard now

