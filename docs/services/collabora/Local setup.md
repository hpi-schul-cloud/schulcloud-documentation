# Local setup

This guide describes how to set up Collabora for local development and testing.

## Prerequisites
- Docker installed on your machine
- Schulcloud server running locally
- File Storage server running locally

## Steps

1. **Clone the Collabora Docker image:**
   ```bash
   docker pull collabora/code
   ```

2. **Start Collabora container:**
```bash
docker run -t -d \
   --network host \
   -e "extra_params=--o:ssl.enable=false" \
   -e "domain=.*" \
   --name collabora \
   --restart unless-stopped \
   collabora/code
```

Opening http://localhost:9980/ in a browser afterwards should answer with status OK.

On Mac DDEV machines with Docker Desktop running, please make sure that the feature _network host_ is activated in Settings > Ressources > Network.

3. **Open a document in Schulcloud:**
   - Navigate to the column board. Add an office document.
   - On click the document should open in the Collabora editor in your browser.

## Additional
Depending on your setup, it may be necessary to allow Collabora routing from the Docker environment to your FilesStorage.
You can use settings in Docker if you have, for example, Docker Desktop with a license. Alternatively, you can use nginx inside your Docker environment:

```
touch ~/nginx.conf
vim ~/nginx.conf

events {}
http {
    server {
        listen 3000;
        location / {
            proxy_pass http://host.docker.internal:3000;
        }
    }
}


docker run --detach --name nginx-proxy --network bridge --volume ~/nginx.conf:/etc/nginx/nginx.conf:ro nginx
docker run -t -d -p 9980:9980 -e "extra_params=--o:ssl.enable=false" --name collabora --network bridge collabora/code


docker start <container-name-oder-id>
docker logs -f <container-name-oder-id>
```
