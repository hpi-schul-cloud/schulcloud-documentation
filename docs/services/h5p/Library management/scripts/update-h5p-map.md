# update-h5p-map.ts

## Overview

`update-h5p-map.ts` is a Node.js script that generates a mapping of H5P library machine names to their corresponding GitHub repositories for a given organization. The output is saved to a specified file, typically in YAML format. This mapping is useful for automating H5P library management and integration in schulcloud-server.

## How It Works
1. **Argument Parsing:**
   - Uses the `arg` package to parse command-line arguments for organization name and output file path.
2. **GitHub Interaction:**
   - Instantiates `H5PGitHubClient` to interact with the GitHub API.
   - Fetches all repositories for the specified organization.
   - Builds a map of H5P library machine names to their repository paths by reading `library.json` from each repo.
3. **Output:**
   - Writes the resulting map to the target file using `fileSystemHelper.writeLibraryRepoMap`.

## Usage via npm

To run the `update-h5p-map.ts` script using default options, you'll just have to call:

```bash
npm run h5p:update-h5p-map
```

This will compile the script from TypeScript to JavaScript and then execute the compiled JavaScript file.

## Usage from Command Line

To use the `update-h5p-map.ts` script directly from the command line, follow these steps:

### 1. Compile the Script from TypeScript to JavaScript

First, compile the TypeScript script to JavaScript using the TypeScript compiler:

```bash
npx tsc scripts/h5p/update-h5p-map.ts --esModuleInterop
```

This will generate a JavaScript file at `scripts/h5p/update-h5p-map.js`.

### 2. Run the Compiled JavaScript Script

Next, run the compiled JavaScript file with Node.js:

```bash
node ./scripts/h5p/update-h5p-map.js [options]
```

#### Command-Line Options
- `--help` or `-h`: Show usage information.
- `--organization` or `-o`: GitHub organization name. Default: `h5p`
- `--target` or `-t`: Path to the output file. Default: `config/h5p-library-repo-map.yaml`

If no options are provided, defaults are used for input and map files.

### Usage Example

```bash
npx tsc scripts/h5p/update-h5p-map.ts --esModuleInterop
source .env
node ./scripts/h5p/update-h5p-map.js
```

## Prerequisites
- Node.js installed
- Environment variable `GITHUB_PERSONAL_ACCESS_TOKEN` set with a valid GitHub token
- Required dependencies installed (run `npm ci` in the project root)

## Required Environment Variable

To update the H5P library to GitHub repository map using `update-h5p-map.ts`, you only need the following environment variable:

- `GITHUB_PERSONAL_ACCESS_TOKEN`: Required if you need to access private repositories or increase GitHub API rate limits. Set this variable to a valid GitHub personal access token.

Set this variable in your environment before running the script to avoid authentication or permission errors.

## Output
- The script writes a YAML file mapping H5P library machine names to their GitHub repositories.
- Example output entry:
  ```yaml
  H5P.InteractiveVideo: h5p/h5p-interactive-video
  H5P.QuestionSet: h5p/h5p-question-set
  ```

## Troubleshooting
- Ensure your GitHub token has sufficient permissions to read repositories.
- If the output file is not created, check for errors in the console and verify the target path exists and is writable.

## Related Files
- `service/h5p-github.client.js`: GitHub API client logic
- `helper/file-system.helper.js`: File writing utilities

---
For further details, see inline comments in the script source code.
