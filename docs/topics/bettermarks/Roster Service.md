# Feathers Roster Service

## Description

The `FeathersRosterService` is an internal service that provides roster data for CTL (Context External Tool) pseudonyms. It acts as a bridge between the Feathers framework and the NestJS roster module, enabling external tools (e.g., Bettermarks) to resolve and display usernames while maintaining user privacy through pseudonymization.

> ⚠️ **Note:** This service is intended for internal use only and should not be imported into other NestJS modules.

## Key Features

- **User Metadata Resolution**: Retrieves user information (ID, username, role) based on pseudonyms
- **Group Management**: Fetches user groups from both courses and rooms
- **Privacy Protection**: All user identifiers are pseudonymized before being exposed to external tools
- **Tool Validation**: Ensures external tools are properly configured and activated at school level
- **Column Board Integration**: Supports external tool references within column boards (feature-flagged)

## Supported Contexts

The service supports two types of learning contexts:

| Context | Description |
|---------|-------------|
| **Courses** | Traditional course-based groupings with students, teachers, and substitution teachers |
| **Rooms** | Flexible room-based groupings with role-based membership (owner, admin, editor, viewer) |

## Role Mapping

Users are categorized based on their roles:

| Category | Roles Included |
|----------|----------------|
| **Teachers** | `TEACHER`, `COURSETEACHER`, `COURSESUBSTITUTIONTEACHER` |
| **Students** | `STUDENT`, `COURSESTUDENT` |

## Dependencies

- `UserService` - User data retrieval
- `PseudonymService` - Pseudonym management and iframe subject generation
- `CourseService` - Course data access
- `ExternalToolService` - External tool configuration
- `SchoolExternalToolService` - School-level tool settings
- `ContextExternalToolService` - Context-specific tool instances
- `ColumnBoardService` - Column board integration
- `RoomService` / `RoomMembershipService` - Room and membership management
