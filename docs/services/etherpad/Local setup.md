# Local Setup

## Running the Etherpad server

To run the Etherpad service for the local development and resting purposes you can follow the below steps:

1. Create a new dir that will contain all the needed files that we'll want to use when running the Etherpad service.
Create a directory called sc-etherpad and then enter it, in Unix-like systems you can use the following command: 

    `mkdir sc-etherpad && cd sc-etherpad`

2. Create a new file called APIKEY.txt in it, with the following content:

    `381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd`

    We'll use this file to set a fixed Etherpad's API key on the Etherpad server's start.

3. Create also a file called settings.env with the following content:

    ```
    REQUIRE_SESSION="true"
    PAD_OPTIONS_SHOW_CHAT="true"
    DISABLE_IP_LOGGING="true"
    DEFAULT_PAD_TEXT="Schreib etwas!\n\nDieses Etherpad wird synchronisiert, während du tippst, so dass alle Betrachter jederzeit den selben Text sehen. So könnt ihr auf einfache Weise gemeinsam an Dokumenten arbeiten."
    DB_TYPE=mongodb
    DB_URL=mongodb://host.docker.internal:27017/etherpad
    ```
    We'll use this file to provide all the needed environment variables to the Etherpad's server.

    Please note the last line, that contains the MongoDB connection string:

    `DB_URL=mongodb://host.docker.internal:27017/etherpad`

    Here we're using the host.docker.internal hostname which should make it possible for the Etherpad's container to connect to the host's local network and should work out of the box e.g. on macOS. But please modify it accordingly to your needs and your Docker's network configuration. An alternative configuaration would be to use `DB_URL=mongodb://localhost:27017/etherpad` and than add `--network="host"` to the following docker run command.

4. Next, start the Etherpad's container:
    ```
    docker run -d \
        -p 9001:9001 \
        --env-file ./settings.env \
        -v ./APIKEY.txt:/opt/etherpad-lite/APIKEY.txt \
        --name sc-etherpad \
        docker.io/etherpad/etherpad:2.0.0
    ```
    Please note we're using the docker.io/etherpad/etherpad:2.0.0 image in the command above which might be not the one that is being used anytime in the future when you read this article. To make sure you're using the current version (the one that is currently being used in the SchulCloud platform), please refer to the https://github.com/hpi-schul-cloud/dof_app_deploy/blob/main/ansible/group_vars/infra/dof_etherpad.yml file.

5. To allow communication between schulcloud- and etherpad-server the following env vars must be set: 
    ```
    TLDRAW_ADMIN_API_CLIENT__API_KEY=randomString
    ADMIN_API__ALLOWED_API_KEYS=randomString
    TLDRAW_ADMIN_API_CLIENT__BASE_URL=http://localhost:3349
    ```

Now we should have the Etherpad service running locally on port 9001, we can verify it's working properly e.g. by fetching the current Etherpad's API version:

```
~ curl -v http://127.0.0.1:9001/api
*   Trying 127.0.0.1:9001...
* Connected to 127.0.0.1 (127.0.0.1) port 9001
> GET /api HTTP/1.1
> Host: 127.0.0.1:9001
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

We can also verify that the API key has been set successfully, let's use the example API call from the Etherpad's documentation ( https://etherpad.org/doc/v2.0.0/#_example_1 ):

```
~ curl -v http://127.0.0.1:9001/api/1/createAuthorIfNotExistsFor\?apikey\=381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd\&name\=Michael\&authorMapper\=7
*   Trying 127.0.0.1:9001...
* Connected to 127.0.0.1 (127.0.0.1) port 9001
> GET /api/1/createAuthorIfNotExistsFor?apikey=381d67e6347d235ac9446da3ea10a82efd6f8ae09fa2e90efeda80f82feeb4fd&name=Michael&authorMapper=7 HTTP/1.1
> Host: 127.0.0.1:9001
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
~ curl -v http://127.0.0.1:9001/api/1/createAuthorIfNotExistsFor\?apikey\=secret\&name\=Michael\&authorMapper\=7
*   Trying 127.0.0.1:9001...
* Connected to 127.0.0.1 (127.0.0.1) port 9001
> GET /api/1/createAuthorIfNotExistsFor?apikey=secret&name=Michael&authorMapper=7 HTTP/1.1
> Host: 127.0.0.1:9001
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