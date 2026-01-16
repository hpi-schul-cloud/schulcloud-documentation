# OAuth

## Login Process in SVS

![OAuth Flow](./img/oauth_flow.drawio.svg)

The following steps illustrated above:<ol><li>The client initiates the flow by click on the "Login via XYZ" button and directing the user to the authorization endpoint.</li><li>The identity provider authenticates the user and establishes whether the resource owner grants or denies the client’s access request.</li><li>Assuming the resource owner grants access, the identity provider redirects the user back to the SVS-Client using the redirect_uri provided in the authentication endpoint request earlier. The redirect includes an authorization code provided by the identity provider.</li><li>The client then requests an access token with the given authentication code from the SVS-Server which&nbsp;</li><li>The client requests the signing key from the identity provider to validate the token signature. <span style="color:var(--ds-text,#172b4d);">The SVS-Server validates the signature of the ID tokens according to</span><span style="color:var(--ds-text,#172b4d);">&nbsp;the specified algorithm</span><span style="color:var(--ds-text,#172b4d);">.</span></li><li><span style="color:var(--ds-text,#172b4d);">The provisioning for the specific external system is executed to either create or update user data.</span></li><li><span style="color:var(--ds-text,#172b4d);">A JWT is generated for the user</span></li><li><span style="color:var(--ds-text,#172b4d);">The JWT is stored in the client for later request against the SVS-Server-API</span>

## Module Design

![OAuth Module Design](./img/Oauth_Module_Design.drawio.svg)