# User Data & Pseudonymization — External API Perspective

## Overview

When external tools (e.g., Bettermarks) make requests to the Roster API, all user data is protected through pseudonymization. The API ensures that no real user identities are exposed to third-party services.

---

## Data Returned per Endpoint

### `GET /roster/users/{user}/metadata`

| Field | Value | Pseudonymized? |
|-------|-------|----------------|
| `user_id` | User's internal database ID | ❌ No |
| `username` | Iframe HTML content | ✅ Yes (real name hidden) |
| `type` | `teacher` or `student` | ❌ No (role only) |

> **Note:** This endpoint requires a valid pseudonym in the query parameter. Only authorized requests with a matching pseudonym can retrieve metadata.

---

### `GET /roster/users/{user}/groups`

| Field | Value | Pseudonymized? |
|-------|-------|----------------|
| `group_id` | Course/Room ID | ❌ No |
| `name` | Course/Room name | ❌ No |
| `student_count` | Number of students | ❌ No |

> **Note:** Group information is returned, but no individual user data is exposed in this response.

---

### `GET /roster/groups/{id}`

For each group member (students and teachers):

| Field | Value | Pseudonymized? |
|-------|-------|----------------|
| `user_id` | **Pseudonym string** | ✅ Yes |
| `username` | Iframe HTML content | ✅ Yes |

---

## What External Tools **Cannot** See

| Protected Data | Reason |
|----------------|--------|
| Real user ID | Replaced with tool-specific pseudonym |
| Real username/name | Replaced with iframe HTML subject |
| Email address | Never exposed |
| Personal details | Never exposed |
| School information | Not directly exposed |

---

## Pseudonymization Details

### Pseudonym Characteristics

- **Unique per tool**: Each external tool receives a different pseudonym for the same user
- **Consistent**: The same tool always receives the same pseudonym for a given user
- **Non-reversible**: External tools cannot derive real user data from the pseudonym

### Username Field

The `username` field does **not** contain the actual username. Instead, it contains:
- An **iframe HTML subject** — a rendered HTML snippet
- This allows display in the external tool without exposing real identity

---

## Summary Table

| Endpoint | Real ID Exposed | Real Name Exposed | Uses Pseudonym |
|----------|-----------------|-------------------|----------------|
| `/users/{user}/metadata` | Yes (internal ID) | No (iframe) | Required in request |
| `/users/{user}/groups` | N/A | N/A | Required in request |
| `/groups/{id}` | No | No | Yes (in response) |
