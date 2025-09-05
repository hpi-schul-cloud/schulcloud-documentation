# Local Setup for Collabora

This guide describes how to set up Collabora for local development and testing, inspired by the Etherpad setup instructions.

## Prerequisites
- Docker installed on your machine
- Schulcloud server running locally

## Steps

1. **Clone the Collabora Docker image:**
   ```bash
   docker pull collabora/code
   ```

2. **Start Collabora container:**
   ```bash
   docker run -t -d -p 9980:9980 -e "domain=localhost" --name collabora collabora/code
   ```

3. **Configure Schulcloud to use Collabora:**
   - Set the Collabora endpoint in Schulcloud configuration (e.g., `http://localhost:9980`).
   - Ensure Schulcloud can access the Collabora container.

4. **Open a document in Schulcloud:**
   - Navigate to a document and select "Edit with Collabora".
   - The document should open in the Collabora editor in your browser.

## Troubleshooting
- Make sure ports are not blocked by firewall.
- Check Docker logs for errors: `docker logs collabora`
- Ensure Schulcloud and Collabora are running on the same network.

---
For more advanced configuration, refer to the [Collabora documentation](https://www.collaboraoffice.com/code/).
