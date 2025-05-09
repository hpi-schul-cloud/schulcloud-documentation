# Local Setup

## Running the Etherpad server

To run the Etherpad service for the local development and resting purposes you can follow the below steps:

1. Create a new dir that will contain all the needed files that we'll want to use when running the Etherpad service.
Create a directory called sc-etherpad and then enter it, in Unix-like systems you can use the following command: 

    `mkdir sc-etherpad && cd sc-etherpad`

2. Create a new file called `APIKEY.txt` in it, with the following content:

    `381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd`

    We'll use this file to set a fixed Etherpad's API key on the Etherpad server's start.

3. Create also a file called `settings.env` with the following content:

    ```
    REQUIRE_SESSION="true"
    PAD_OPTIONS_SHOW_CHAT="true"
    DISABLE_IP_LOGGING="true"
    DEFAULT_PAD_TEXT="Schreib etwas!\n\nDieses Etherpad wird synchronisiert, während du tippst, so dass alle Betrachter jederzeit den selben Text sehen. So könnt ihr auf einfache Weise gemeinsam an Dokumenten arbeiten."
    DB_TYPE=mongodb
    DB_URL=mongodb://host.docker.internal:27017/etherpad
    AUTHENTICATION_METHOD=apikey
    ```
    We'll use this file to provide all the needed environment variables to the Etherpad's server.

    Please note the line that contains the MongoDB connection string:

    `DB_URL=mongodb://host.docker.internal:27017/etherpad`

    Here we're using the `host.docker.internal` hostname which should make it possible for the Etherpad's container to connect to the host's local network and should work out of the box e.g. on macOS. On WSL2 it might not work out of the box and need some extra work, see e.g. this [stackoverflow thread](https://stackoverflow.com/questions/63898430/how-can-i-access-a-service-running-on-wsl2-from-inside-a-docker-container).
    
    An alternative configuaration would be to use `DB_URL=mongodb://localhost:27017/etherpad` and then add `--network="host"` to the following docker run command. `--network="host"` removes the port mapping though. You can change the port Etherpad is listening on by adding `PORT=9002` (or the port number you need) to settings.env.

4. Next, start the Etherpad's container:
    ```
    docker run -d \
        -p 9002:9001 \
        --env-file ./settings.env \
        -v ./APIKEY.txt:/opt/etherpad-lite/APIKEY.txt \
        --name sc-etherpad \
        docker.io/etherpad/etherpad:2.2.7
    ```
    We're using the docker.io/etherpad/etherpad:2.2.7 image in the command above. To make sure you're using the version that is currently used in the SchulCloud platform, please refer to https://github.com/hpi-schul-cloud/dof_app_deploy/blob/main/ansible/roles/dof_etherpad/defaults/main.yml.
    
    The bound port on the host (here 9002) is arbitrary, though port 9001 is used by MinIO in our default project setup and thus we use a different one here.

5. Now we should have the Etherpad service running locally on port 9002, we can verify it's working properly e.g. by    fetching the current Etherpad's API version:

    ```
    ~ curl -v http://127.0.0.1:9002/api
    *   Trying 127.0.0.1:9002...
    * Connected to 127.0.0.1 (127.0.0.1) port 9002
    > GET /api HTTP/1.1
    > Host: 127.0.0.1:9002
    > User-Agent: curl/8.4.0
    > Accept: */*
    > 
    < HTTP/1.1 200 OK
    < X-Powered-By: Express
    < X-UA-Compatible: IE=Edge,chrome=1
    < Referrer-Policy: same-origin
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 26
    < ETag: W/"1a-2HmNLqF3wPt+KQRlEmGwH4O+xu4"
    < Date: Fri, 29 Mar 2024 13:27:00 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5
    < 
    * Connection #0 to host 127.0.0.1 left intact
    {"currentVersion":"1.3.0"}
    ```

    We can also verify that the API key has been set successfully, let's use the example API call from the Etherpad's documentation ( https://etherpad.org/doc/v2.2.7/#_example_1 ):

    ```
    ~ curl -v http://127.0.0.1:9002/api/1/createAuthorIfNotExistsFor\?apikey\=381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd\&name\=Michael\&authorMapper\=7
    *   Trying 127.0.0.1:9002...
    * Connected to 127.0.0.1 (127.0.0.1) port 9002
    > GET /api/1/createAuthorIfNotExistsFor?apikey=381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd&name=Michael&authorMapper=7 HTTP/1.1
    > Host: 127.0.0.1:9002
    > User-Agent: curl/8.4.0
    > Accept: */*
    > 
    < HTTP/1.1 200 OK
    < X-Powered-By: Express
    < X-UA-Compatible: IE=Edge,chrome=1
    < Referrer-Policy: same-origin
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 66
    < ETag: W/"42-bg92QA1xRFO6QmkNRbNXhfsFBUM"
    < Date: Fri, 29 Mar 2024 13:40:05 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5
    < 
    * Connection #0 to host 127.0.0.1 left intact
    {"code":0,"message":"ok","data":{"authorID":"a.7BgkAuzbHXR1G8Cv"}}
    ```

    In case of an unsuccessful result (e.g. improperly set or invalid API key) we would receive the following response:
    ```
    ~ curl -v http://127.0.0.1:9002/api/1/createAuthorIfNotExistsFor\?apikey\=secret\&name\=Michael\&authorMapper\=7
    *   Trying 127.0.0.1:9002...
    * Connected to 127.0.0.1 (127.0.0.1) port 9002
    > GET /api/1/createAuthorIfNotExistsFor?apikey=secret&name=Michael&authorMapper=7 HTTP/1.1
    > Host: 127.0.0.1:9002
    > User-Agent: curl/8.4.0
    > Accept: */*
    > 
    < HTTP/1.1 401 Unauthorized
    < X-Powered-By: Express
    < X-UA-Compatible: IE=Edge,chrome=1
    < Referrer-Policy: same-origin
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 54
    < ETag: W/"36-dbJd0O+vdNi3zPpwRXE+1EGLTho"
    < Date: Fri, 29 Mar 2024 13:39:44 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5
    < 
    * Connection #0 to host 127.0.0.1 left intact
    {"code":4,"message":"no or wrong API Key","data":null}
    ```

6. Set the following config values in the server:
    | Key | Value |
    | --- | --- |
    | ETHERPAD__API_KEY | 381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd |
    | ETHERPAD__URI | http://localhost:9002/api/1 |
    | ETHERPAD__PAD_URI | http://localhost:9002/p |

     Set the following config values in the client:
    | Key | Value |
    | --- | --- |
    | ETHERPAD__PAD_URI | http://localhost:9002/p |
    | ETHERPAD__PAD_PATH | /p |
    | ETHERPAD__NEW_DOMAIN | localhost |

    For the other config values the defaults in `default.schema.json` should work.

7. Now you should be able to create and use Etherpads in boards and topics.