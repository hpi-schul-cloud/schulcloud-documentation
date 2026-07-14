# Running Knip

[Knip](https://knip.dev/) is a tool for finding unused files, dependencies, and exports in TypeScript/JavaScript projects.

## Installation

Install knip globally:

```bash
npm install -g knip
```

Or use it without installing via npx:

```bash
npx knip
```

## Usage

Run knip from the project root (where `.knip.json` is located):

```bash
knip
```

Or with npx:

```bash
npx knip
```

## Common Output Categories

Knip reports issues in several categories:

- **Unused files** — Files not reachable from any entry point
- **Unused exports** — Exported symbols not imported anywhere
- **Unused dependencies** — Packages in `package.json` not imported in code
- **Duplicate exports** — Multiple exports resolving to the same value

## Useful Flags

```bash
# Show only specific issue types
knip --include files
knip --include exports

# Output as JSON
knip --reporter json

# Show dependency issues only
knip --include dependencies
```

## Configuration Reference

A `.knip.json` file is placed at the project root. Key options:

| Option               | Description                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| `entry`              | Entry points knip uses to trace the dependency graph. The `!` suffix disables built-in default entry patterns. |
| `project`            | Glob patterns defining which files belong to the project.                                                      |
| `ignore`             | Glob patterns for files/directories to exclude from analysis.                                                  |
| `ignoreDependencies` | Package names to exclude from unused dependency checks.                                                        |
| `ignoreBinaries`     | Binary names to exclude from checks.                                                                           |
| `ignoreMembers`      | Regex patterns for class/enum members to exclude from unused member checks.                                    |

See the [full configuration docs](https://knip.dev/reference/configuration) for all options.

---

## file-storage

### Configuration (`.knip.json`)

```json
{
	"$schema": "https://unpkg.com/knip@5/schema.json",
	"entry": ["src/apps/*.ts!", "scripts/**/*.{js,ts}!"],
	"project": ["**/*.{js,ts}!"],
	"ignore": ["src/infra/**/*"],
	"ignoreDependencies": ["eslint-config-prettier", "eslint-plugin-prettier"]
}
```

### Explanation

- **entry**:
  - `src/apps/*.ts` — NestJS app entry points (files-storage, files-storage-consumer, preview-generator-consumer)
  - `scripts/**/*.{js,ts}` — Project scripts (e.g. testing setup)
- **project**: All JS/TS files in the workspace are considered part of the project.
- **ignore**: Directories excluded from analysis:
  - `src/infra/**/*` — Infrastructure code (too tightly coupled to trace cleanly)
- **ignoreDependencies**: Packages excluded from unused dependency checks:
  - `eslint-config-prettier` — Used via ESLint config extension, not directly imported
  - `eslint-plugin-prettier` — Used via ESLint config extension, not directly imported

---

## h5p-server

### Configuration (`.knip.json`)

```json
{
	"$schema": "https://unpkg.com/knip@5/schema.json",
	"entry": ["src/apps/*.ts!", "scripts/**/*.{js,ts}!"],
	"project": ["**/*.{js,ts}!"],
	"ignore": ["src/infra/**/*"],
	"ignoreDependencies": ["eslint-config-prettier", "eslint-plugin-prettier"]
}
```

### Explanation

- **entry**:
  - `src/apps/*.ts` — NestJS app entry points (h5p-editor, h5p-editor-consumer, h5p-library-management)
  - `scripts/**/*.{js,ts}` — Project scripts (e.g. H5P library packaging, testing setup)
- **project**: All JS/TS files in the workspace are considered part of the project.
- **ignore**: Directories excluded from analysis:
  - `src/infra/**/*` — Infrastructure code (too tightly coupled to trace cleanly)
- **ignoreDependencies**: Packages excluded from unused dependency checks:
  - `eslint-config-prettier` — Used via ESLint config extension, not directly imported
  - `eslint-plugin-prettier` — Used via ESLint config extension, not directly imported

---

## schulcloud-server

### Configuration (`.knip.json`)

```json
{
	"$schema": "https://unpkg.com/knip@5/schema.json",
	"entry": [
		"src/app.js!",
		"apps/server/src/apps/*.ts!",
		"apps/server/src/migrations/**/*.ts!",
		"scripts/**/*.{js,ts}!"
	],
	"project": ["**/*.{js,ts}!"],
	"ignore": [
		"apps/server/src/core/**/*",
		"apps/server/src/infra/**/*",
		"apps/server/src/modules/deletion-console/index.ts",
		"apps/server/src/shared/controller/index.ts",
		"apps/server/src/shared/domain/index.ts",
		"apps/server/src/shared/index.ts",
		"apps/server/src/shared/repo/index.ts",
		"src/**/*"
	],
	"ignoreMembers": [
		"^ROLE$",
		"^BLOCKED$",
		"^WONT_CHECK$",
		"^PENDING$",
		"^PASSED$",
		"^FAILED$",
		"^PUBLIC$",
		"^CLIENT_SECRET_POST$",
		"^PRIVATE_KEY_JWT$",
		"^BRANDENBURG$",
		"^NIEDERSACHSEN$",
		"^THUERINGEN$",
		"^UNKNOWN$",
		"^STUDENT_COUNT$",
		"^READ$",
		"^DEMOSTUDENT$",
		"^DEMOTEACHER$",
		"^PINK$",
		"^PURPLE$",
		"^NEXTCLOUD$",
		"^SHOW_OUTDATED_USERS$",
		"^AI_TUTOR$",
		"^TEST$",
		"^MINT_EC$",
		"^NAME$",
		"^HIDDEN$",
		"^DEACTIVATED$",
		"^SKIP_CONSENT$",
		"^ALWAYS_DENY$"
	]
}

```

### Explanation

- **entry**:
  - `src/app.js` — Legacy Feathers app entry point
  - `apps/server/src/apps/*.ts` — NestJS app entry points
  - `apps/server/src/migrations/**/*.ts` — Database migrations
  - `scripts/**/*.{js,ts}` — Project scripts
- **project**: All JS/TS files in the workspace are considered part of the project.
- **ignore**: Directories and files excluded from analysis:
  - `apps/server/src/core/**/*` — Core infrastructure code
  - `apps/server/src/infra/**/*` — Infrastructure code
  - `apps/server/src/modules/deletion-console/index.ts` — Empty barrel file containing only a comment warning not to export from here; Knip flags it as unused
  - `apps/server/src/shared/controller/index.ts` — Empty barrel file containing only a comment warning not to export from here; Knip flags it as unused
  - `apps/server/src/shared/domain/index.ts` — Empty barrel file containing only a comment warning not to export from here; Knip flags it as unused
  - `apps/server/src/shared/index.ts` — Empty barrel file containing only a comment warning not to export from here; Knip flags it as unused
  - `apps/server/src/shared/repo/index.ts` — Empty barrel file containing only a comment warning not to export from here; Knip flags it as unused
  - `src/**/*` — Legacy source code (not yet migrated to NestJS)
- **ignoreMembers**: Regex patterns for enum/class members excluded from unused member checks:
  - `^ROLE$`
    - **Location:** `FilePermissionReferenceModel` in file-permission-reference-model.enum.ts
    - **Reason:** Role-related enum value used via dynamic access
  - `^BLOCKED$`, `^WONT_CHECK$`, `^PENDING$`, `^PASSED$`, `^FAILED$`
    - **Location:** `FileSecurityCheckStatus` in file-security-check-status.enum.ts
    - **Reason:** Security scan status enum values consumed externally by the file storage service
  - `^PUBLIC$`
    - **Location:** `SubjectType` in subject-type.enum.ts and `LtiPrivacyPermission` in lti-privacy-permission.enum.ts
    - **Reason:** Visibility/privacy enum values used at runtime
  - `^CLIENT_SECRET_POST$`, `^PRIVATE_KEY_JWT$`
    - **Location:** `TokenEndpointAuthMethod` in token-endpoint-auth-method.enum.ts
    - **Reason:** OAuth authentication method enum values used in configuration
  - `^BRANDENBURG$`, `^NIEDERSACHSEN$`, `^THUERINGEN$`
    - **Location:** `SchulcloudTheme` in schulcloud-theme.enum.ts
    - **Reason:** Federal state/theme enum values referenced in external configuration
  - `^UNKNOWN$`
    - **Location:** `CommonCartridgeResourceType` in common-cartridge.enums.ts
    - **Reason:** Fallback/default enum value used in switch statements and error handling
  - `^STUDENT_COUNT$`
    - **Location:** `ClassSortQueryType` in class-sort-query-type.enum.ts
    - **Reason:** Sort/filter enum value used via query parameters
  - `^READ$`
    - **Location:** `CrudOperation` in crud-operation.enum.ts
    - **Reason:** CRUD operation enum value resolved dynamically at runtime
  - `^DEMOSTUDENT$`, `^DEMOTEACHER$`
    - **Location:** `RoleName` in rolename.enum.ts
    - **Reason:** Demo role enum values used in seeding/configuration
  - `^PINK$`, `^PURPLE$`
    - **Location:** `RoomColor` in room-color.enum.ts
    - **Reason:** Color enum values consumed by the frontend via API responses
  - `^NEXTCLOUD$`
    - **Location:** `SchoolFeature` in school-feature.enum.ts
    - **Reason:** Storage provider enum value used in feature flag configuration
  - `^SHOW_OUTDATED_USERS$`
    - **Location:** `SchoolFeature` in school-feature.enum.ts
    - **Reason:** Feature flag enum value toggled via school settings
  - `^AI_TUTOR$`
    - **Location:** `SchoolFeature` in school-feature.enum.ts
    - **Reason:** Feature enum value used in feature flag configuration
  - `^TEST$`
    - **Location:** `SchoolPurpose` in school-purpose.enum.ts
    - **Reason:** School purpose enum value used in conditional logic
  - `^MINT_EC$`
    - **Location:** `SchoolPurpose` in school-purpose.enum.ts
    - **Reason:** School purpose enum value referenced in external configuration
  - `^NAME$`
    - **Location:** `ExternalToolSortBy` in external-tool-sort.params.ts
    - **Reason:** Sort/filter enum value used via query parameters
  - `^HIDDEN$`, `^DEACTIVATED$`
    - **Location:** `ExternalToolParameterDatasheetTemplateProperty` in external-tool-parameter-datasheet-template-property.ts
    - **Reason:** Visibility/status enum values used in admin workflows
  - `^SKIP_CONSENT$`
    - **Location:** `ExternalToolParameterDatasheetTemplateProperty` in external-tool-parameter-datasheet-template-property.ts
    - **Reason:** Consent policy enum value used in tool configuration
  - `^ALWAYS_DENY$`
    - **Location:** `GuestPolicy` in bbb-create.config.ts
    - **Reason:** Guest access policy enum value used in video conference configuration

---

## tldraw-server

### Configuration (`.knip.json`)

```json
{
	"$schema": "https://unpkg.com/knip@5/schema.json",
	"entry": ["src/apps/*.ts!", "scripts/**/*.{js,ts}!"],
	"project": ["**/*.{js,ts}!"],
	"ignore": ["src/infra/**/*"]
}
```

### Explanation

- **entry**:
  - `src/apps/*.ts` — NestJS app entry points (tldraw-server, tldraw-worker)
  - `scripts/**/*.{js,ts}` — Project scripts (e.g. client generation, testing setup)
- **project**: All JS/TS files in the workspace are considered part of the project.
- **ignore**: Directories excluded from analysis:
  - `src/infra/**/*` — Infrastructure code (too tightly coupled to trace cleanly)

---

## Template for Other Repositories

Copy the section below and fill in the details for your repository.

### \<repository-name\>

#### Configuration (`.knip.json`)

```json
{
	"$schema": "https://unpkg.com/knip@5/schema.json",
	"entry": ["<path/to/entry-point>!"],
	"project": ["**/*.{js,ts}!"],
	"ignore": ["<path/to/ignored/directory>/**/*"]
}
```

#### Explanation

- **entry**:
  - `<path/to/entry-point>` — Description of this entry point
- **project**: Description of what is included.
- **ignore**: Directories excluded from analysis:
  - `<path/to/ignored/directory>/**/*` — Reason for exclusion
