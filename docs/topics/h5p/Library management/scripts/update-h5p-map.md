# update-h5p-map.ts

## Overview

`update-h5p-map.ts` is a Node.js script located in the [h5p-server](https://github.com/hpi-schul-cloud/h5p-server) repository that generates a mapping of H5P library machine names to their corresponding GitHub repositories for given organizations and users. The output is saved to a specified file, typically in YAML format. This mapping is useful for automating H5P library management and integration.

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

This will compile the script from TypeScript to JavaScript using SWC and then execute the compiled JavaScript file with environment variables loaded from `.env` via dotenv.

## Usage from Command Line

To use the `update-h5p-map.ts` script directly from the command line, follow these steps:

### 1. Compile the Script from TypeScript to JavaScript

First, compile the TypeScript scripts to JavaScript using SWC:

```bash
npm run h5p:build
```

This will generate JavaScript files in `scripts/h5p/`.

### 2. Run the Compiled JavaScript Script

Next, run the compiled JavaScript file with Node.js (using dotenv to load environment variables):

```bash
dotenv -- node ./scripts/h5p/update-h5p-map.js [options]
```

#### Command-Line Options
- `--help` or `-h`: Show usage information.
- `--organization` or `-o`: GitHub organization name. Default: `h5p`
- `--target` or `-t`: Path to the output file. Default: `scripts/h5p/config/h5p-library-repo-map.yaml`

If no options are provided, defaults are used for input and map files.

### Usage Example

```bash
npm run h5p:build
dotenv -- node ./scripts/h5p/update-h5p-map.js
```

## Prerequisites
- Node.js version 24 (as specified in the h5p-server package.json)
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
