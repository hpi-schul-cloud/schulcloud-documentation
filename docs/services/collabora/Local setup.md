# Local Setup for Collabora

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

4. **Open a document in Schulcloud:**
   - Navigate to the column board. Add an office document.
   - On click the document should open in the Collabora editor in your browser.
