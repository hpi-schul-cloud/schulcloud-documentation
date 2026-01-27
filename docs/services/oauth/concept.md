# OAuth

## Login Process in SVS

![OAuth Flow](./img/oauth_flow.drawio.svg)

The following steps illustrated above:

1. The client initiates the flow by click on the "Login via XYZ" button and directing the user to the authorization endpoint.
2. The identity provider authenticates the user and establishes whether the resource owner grants or denies the client's access request.
3. Assuming the resource owner grants access, the identity provider redirects the user back to the SVS-Client using the redirect_uri provided in the authentication endpoint request earlier. The redirect includes an authorization code provided by the identity provider.
4. The client then requests an access token with the given authentication code from the SVS-Server which
5. The client requests the signing key from the identity provider to validate the token signature. The SVS-Server validates the signature of the ID tokens according to the specified algorithm.
6. The provisioning for the specific external system is executed to either create or update user data.
7. A JWT is generated for the user
8. The JWT is stored in the client for later request against the SVS-Server-API

## Module Design

![OAuth Module Design](./img/Oauth_Module_Design.drawio.svg)