# Authentification

## JWT

JSON Web Tokens (JWT) are an open standard (RFC 7519) for securely transmitting information between parties as a JSON object.

### Structure of a JWT

A JWT consists of three parts, separated by dots (`.`):

```
header.payload.signature
```

#### 1. Header
Contains the token type and the signing algorithm used:
```json
{
  "alg": "RS256",
  "typ": "JWT"
}
```

#### 2. Payload
Contains the claims (statements about the user):
```json
{
  "sub": "userId123",
  "iat": 1707494400,
  "exp": 1707498000,
  "roles": ["student"]
}
```

#### 3. Signature
Verifies the integrity of the token:
```
RSASHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  privateKey
)
```

### Public/Private Key Signing

The Schulcloud uses **asymmetric encryption**:

| Key | Usage |
|-----|-------|
| **Private Key** | Signs the JWT (auth server only) |
| **Public Key** | Verifies the JWT (all services) |

### Benefits

- **Stateless**: No server-side session storage required
- **Scalable**: Each service can validate tokens independently
- **Secure**: Signature prevents tampering

### Example Flow

```
1. Login → Server creates JWT with Private Key
2. Client stores JWT
3. Request + JWT → Service validates with Public Key
4. Access granted/denied
```

## Auto Logout

To handle auto logouts and token refresh for user JWTs, we use Valkey as a "JWT-Session-Store". 
The user can refresh their JWT until the maximum lifetime of the JWT is reached.

## Related Code

- [Auth Guard Decorators](https://github.com/hpi-schul-cloud/schulcloud-server/tree/main/apps/server/src/infra/auth-guard) - Infra module for our NestJS decorators
- [Auth Strategies](https://github.com/hpi-schul-cloud/schulcloud-server/tree/main/apps/server/src/infra/auth-guard/strategy) - Authentication strategy implementations
- [Authentication Module](https://github.com/hpi-schul-cloud/schulcloud-server/tree/main/apps/server/src/modules/authentication) - Main authentication module
- [Login Controller](https://github.com/hpi-schul-cloud/schulcloud-client/blob/main/controllers/login.js) - Legacy-client-side login controller

OAuth
- [OAuth Controller](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/modules/oauth/api/oauth.controller.ts) - OAuth API controller
- [OAuth Provider Controller](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/modules/oauth-provider/api/oauth-provider.controller.ts) - OAuth provider API controller

## Authentification Stategies

We have 3 base login strategies.
1. For the jwt it self over http.
2. For the jwt but used in web sockets.
3. For x-api-key. 

The x-api-key stategy is nearly deprecated and will be replaced with system user logins based on the first strategy.

## Decorator Example

[MeController Example](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/modules/me/api/me.controller.ts)

```typescript
import { JwtAuthentication } from '@infra/auth-guard';
import { Controller } from '@nestjs/common';

@JwtAuthentication()
@Controller('me')
export class MeController {
  // ...
}
```


## TODO:

- oauth
- SVS vs IDMs
- provining hint/link
