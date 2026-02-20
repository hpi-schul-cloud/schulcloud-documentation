# Schul-Cloud Roster Service API

## Overview

The Roster Service API provides endpoints for retrieving user and group metadata for the Schul-Cloud roster system.
The endpoints are defined in [feathers js](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/src/services/roster/index.js) while the actual implementation is done in NestJS and can be found in the [schulcloud-server repository](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/modules/roster/service/feathers-roster.service.ts)

## Authentication

- **Type:** HTTP Bearer (JWT)

## Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/roster` | Health check for roster service | No |
| GET | `/roster/users/{user}/metadata` | Retrieves user metadata for roster | No |
| GET | `/roster/users/{user}/groups` | Retrieves list of groups for a user | No |
| GET | `/roster/groups/{id}` | Retrieves a single group by ID | No |

### GET `/roster`
Health check endpoint to verify the roster service is available.
**Response:** `200 OK` - Returns "Roster interface available"

---

### GET `/roster/users/{user}/metadata`

Retrieves metadata for a specific user.

**Parameters:**
| Name | In | Required | Description |
|------|-----|----------|-------------|
| `user` | path | Yes | User parameter |
| `pseudonym` | query | Yes | User pseudonym |

**Response:** `200 OK`
```json
{
  "data": {
    "user_id": "string (24 hex chars)",
    "username": "string",
    "type": "teacher | student"
  }
}
```

---

### GET `/roster/users/{user}/groups`

Retrieves all groups (courses) associated with a user.

**Parameters:**
| Name | In | Required | Description |
|------|-----|----------|-------------|
| `user` | path | Yes | User parameter |
| `toolId` | query | Yes | Tool ID |
| `pseudonym` | query | Yes | User pseudonym |

**Response:** `200 OK`
```json
{
  "data": {
    "groups": [
      {
        "group_id": "string (24 hex chars, course ID)",
        "name": "string (course name)",
        "student_count": "integer (min: 1)"
      }
    ]
  }
}
```

---

### GET `/roster/groups/{id}`

Retrieves details of a specific group (course or room) including its members.

**Parameters:**
| Name | In | Required | Description |
|------|-----|----------|-------------|
| `id` | path | Yes | ID of the group to return |

**Response:** `200 OK`
```json
{
  "data": {
    "students": [
      {
        "user_id": "string (user pseudonym)",
        "username": "string (iframe HTML data)"
      }
    ],
    "teachers": [
      {
        "user_id": "string (user pseudonym)",
        "username": "string (iframe HTML data)"
      }
    ]
  }
}
```

**Error Responses:**
- `404 Not Found` - Group not found
- `500 Internal Server Error` - General error

---

## Data Models

### User Types
- `teacher`
- `student`

### Identifiers
- User IDs and Group IDs (MongoDB ObjectId)

