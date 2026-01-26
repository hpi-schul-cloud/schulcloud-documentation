# Concept of CTL

## Configuration Validation Update

### Change Matrix

| Change | SCHOOL affected | CONTEXT affected |
|--------|:---------------:|:----------------:|
| Change SCOPE of Parameter | ✅ | ✅ |
| New REQUIRED Parameter in SCHOOL | ✅ | ✅ |
| New REQUIRED Parameter in CONTEXT | ❌ | ✅ |
| New OPTIONAL Parameter in SCHOOL | ❌ | ❌ |
| New Optional Parameter in CONTEXT | ❌ | ❌ |
| Parameter NAME changed in SCHOOL | ✅ | ✅ |
| Parameter NAME changed in CONTEXT | ❌ | ✅ |
| Parameter REGEX changed/added in SCHOOL | ✅ | ✅ |
| Parameter REGEX changed/added in CONTEXT | ❌ | ✅ |
| Parameter made OPTIONAL in SCHOOL | ✅ | ❌ |
| Parameter made OPTIONAL in CONTEXT | ❌ | ✅ |
| Parameter made REQUIRED in SCHOOL | ✅ | ✅ |
| Parameter made REQUIRED in CONTEXT | ❌ | ✅ |
| Parameter TYPE changed in SCHOOL | ✅ | ✅ |
| Parameter TYPE changed in CONTEXT | ❌ | ✅ |

### Validation Flow

![Validation Flow](./img/Validation_Flow.drawio.svg)

### OAuth Flow

![Tools OAuth Flow](./img/Tools_OAuth_Flow.drawio.svg)

