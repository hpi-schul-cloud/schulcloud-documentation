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
	"ignore": ["apps/server/src/core/**/*", "apps/server/src/infra/**/*", "src/**/*"],
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
		"^THUERINGEN$"
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
- **ignore**: Directories excluded from analysis:
  - `apps/server/src/core/**/*` — Core infrastructure code (too tightly coupled to trace cleanly)
  - `apps/server/src/infra/**/*` — Infrastructure code (same reason)
  - `src/**/*` — Legacy source code (not yet migrated to NestJS)

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
