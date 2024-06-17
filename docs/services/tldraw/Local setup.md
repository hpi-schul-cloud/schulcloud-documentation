# Local setup

### To run tldraw locally:

1. Run redis i.e. in a docker container, it will work on localhost:6379 by default which is what the REDIS_URI env var is set to, for example on wsl: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/
2. Add to server repo the .env with following values 
   Please note redis default user is use and you can pass random value as password like the 123. 
    REDIS_URI=redis://default:123@127.0.0.1:6379
    TLDRAW_ADMIN_API_CLIENT__API_KEY=randomString
    ADMIN_API__ALLOWED_API_KEYS=randomString
    TLDRAW_ADMIN_API_CLIENT__BASE_URL=http://localhost:3349
3. To run
   1. npm run nest:start:dev (schulcloud-server)
   2. nest:start:files-storage:dev (schulcloud-server with s3, if you want to upload files)
   3. npm run nest:start:tldraw:dev (schulcloud-server)
   4. npm run dev (schulcloud-client)
   5. npm run servce (nuxt-client)
   6. npm run dev (tldraw-client)

### Create new whiteboard:

1. Go to a course
2. Go to 'Column board'
3. Create a new card and a new 'Whiteboard' element within it, then click it
4. A new browser tab with URL like: http://localhost:4000/tldraw?roomName=65c37329b2f97cc714d31c00 will open
5. Change the port part from 4000 to 3046, which is the default port of tldraw-client app
6. You should see a working tldraw whiteboard now

