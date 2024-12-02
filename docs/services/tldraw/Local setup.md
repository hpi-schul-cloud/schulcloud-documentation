# Local setup

### To run tldraw locally:

1. Run redis i.e. in a docker container, it will work on localhost:6379 by default which is what the REDIS_URI env var is set to, for example on wsl: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/
2. In the tldraw-server make a copy of .env.default and rename it to .env, in order to use the default configuration.
3. To run
   1. npm run nest:start:dev (schulcloud-server)
   2. npm run nest:start:files-storage:dev (schulcloud-server with s3, if you want to upload files)
   3. npm run start:server:dev (tldraw-server)
   4. npm run start:worker:dev (tldraw-server)
   5. npm run dev (schulcloud-client)
   6. npm run servce (nuxt-client)
   7. npm run dev (tldraw-client)

### Create new whiteboard:

1. Go to a course
2. Go to 'Column board'
3. Create a new card and a new 'Whiteboard' element within it, then click it
4. A new browser tab with URL like: http://localhost:4000/tldraw?roomName=65c37329b2f97cc714d31c00 will open
5. Change the port part from 4000 to 3046, which is the default port of tldraw-client app
6. You should see a working tldraw whiteboard now
