# package-h5p-libraries.ts

## Overview

`package-h5p-libraries.js` is a Node.ts script used to automate the process of building H5P libraries from their respective GitHub repositories. It reads a list of desired libraries and a mapping of library names to repositories, then downloads and packages each library into a specified temporary folder.

## How It Works
1. **Argument Parsing:**
   - Uses the `arg` package to parse command-line arguments for input files and temporary folder.
2. **Configuration Files:**
   - Reads a YAML file containing the list of libraries to install (`--input`).
   - Reads a YAML file mapping library names to GitHub repositories (`--map`).
3. **Building Libraries:**
   - Instantiates `H5pLibraryPackagerService` with the repo map and temp folder.
   - Downloads, builds and packages each "old" version (highest patch version for each tag) of every library listed in the wish list from its GitHub repository.

## Usage via npm

To run the `package-h5p-libraries.ts` script using default options, you'll just have to call:

```bash
npm run h5p:package-h5p-libraries
```

This will compile the script from TypeScript to JavaScript and then execute the compiled JavaScript file.

## Usage from Command Line

To use the `package-h5p-libraries.ts` script directly from the command line, follow these steps:

### 1. Compile the Script from TypeScript to JavaScript

First, compile the TypeScript script to JavaScript using the TypeScript compiler:

```bash
npx tsc package-h5p-libraries.ts --esModuleInterop
```

This will generate a JavaScript file at `scripts/h5p/package-h5p-libraries.js`.

### 2. Run the Compiled JavaScript Script

Next, run the compiled JavaScript file with Node.js:

```bash
node ./scripts/h5p/package-h5p-libraries.js [options]
```

#### Command-Line Options
- `--help`, `-h`: Show help and usage information.
- `--input <file>`, `-i <file>`: Specify the file containing the list of libraries to be installed. Default: `config/h5p-libraries.yaml`
- `--map <file>`, `-m <file>`: Specify the file containing the library-to-repository map. Default: `scripts/h5p/config/h5p-library-repo-map.yaml`
- `--tmp <folder>`, `-t <folder>`: Specify the temporary folder to use for building libraries. Default: `/tmp/h5p-libraries`

If no options are provided, defaults are used for input and map files.

### Usage Example

```bash
npx tsc scripts/h5p/package-h5p-libraries.ts --esModuleInterop
source .env
node ./scripts/h5p/package-h5p-libraries.js
```

## Prerequisites

Before running `package-h5p-libraries.ts`, ensure the following requirements are met:

- **Node.js**: The script itself should be run with the latest LTS version (current: version 22) of Node.js.
- **nvm (Node Version Manager)**: Some older H5P libraries require older Node.js versions (e.g., Node 8, 10, 14). The script uses `nvm` to switch Node.js versions as needed for building these libraries.  
  > Install nvm and ensure required Node.js versions are available:  
  > [nvm installation guide](https://github.com/nvm-sh/nvm)
- **TypeScript**: Already included as a dev dependency; use `npx tsc` or npm scripts to compile TypeScript files.
- **Project Dependencies**: Run `npm ci` in the project root to install all required npm packages.
- **H5P CLI**: The script uses `h5p validate`, which requires the H5P CLI to be installed globally. Install it with:`npm install -g h5p`.
- **YAML Files**: Ensure the following configuration files exist and are correctly formatted:
  - `scripts/h5p/config/h5p-library-repo-map.yaml` (library-to-repository map)
  - `config/h5p-libraries.yaml` (list of libraries to package)
- **Permissions**: Make sure you have read/write access to the temporary and output folders specified by the script. The default path is: `/tmp/h5p-libraries`.

## Required Environment Variable

To package H5P libraries using `package-h5p-libraries.js`, you only need the following environment variable:

- `GITHUB_PERSONAL_ACCESS_TOKEN`: Required if you need to access private repositories or increase GitHub API rate limits. Set this variable to a valid GitHub personal access token.

Set this variable in your environment before running the script to avoid authentication or permission errors.

## Special Handling for H5P Library Versions During Packaging

This document lists all H5P library versions that require special handling during the package process in `H5pLibraryPackagerService`.

**It needs to be checked from time to time if these handlings are still required and also are needed to be applied to newer versions!**

### 1. Libraries Requiring NODE_OPTIONS for Build
Some libraries require the `NODE_OPTIONS=--openssl-legacy-provider` prefix for their build script due to compatibility issues with OpenSSL:

- `H5P.Dialogcards`: `1.8.8`, `1.7.10`
- `H5P.DragQuestion`: `1.15.4`
- `H5P.DragText`: `1.10.25`, `1.9.5`, `1.8.20`
- `H5P.InteractiveVideo`: `1.28.3`
- `H5P.MultiMediaChoice`: `0.3.56`, `0.2.1`, `0.1.8`
- `H5P.CoursePresentation`: `1.23.3`

### 2. Libraries Requiring Legacy Peer Dependencies for "npm install"
Some libraries require the `--legacy-peer-deps` flag for `npm ci` due to peer dependency issues:

- `H5P.DragText`: `1.9.5`, `1.8.20`

### 3. Libraries Requiring Older Node.js Versions
Some libraries require older Node.js versions during their build:

- `H5P.CoursePresentation`: `{` `1.22.11`: `14`, `1.21.7`: `14`, `1.20.4`: `10`, `1.19.3`: `10`, `1.18.1`: `8`, `1.17.10`: `8` `}`
- `H5P.Questionnaire`: `{` `1.1.2`: `14`, `1.0.2`: `14` `}`
- `H5P.SimpleMultiChoice`: `{` `1.0.5`: `14` `}`
- `H5PEditor.QuestionSetTextualEditor`: `{` `1.2.4`: `14` `}`

### 4. Libraries Requiring to run "npm install" instead of "npm ci"
Some libraries require to run `npm install` instead of `npm ci` due to a `package-lock.json` missing in this version tag:

 - `H5P.CoursePresentation`: `1.18.1`, `1.17.10`
 - `H5P.Questionnaire`: `1.1.2`, `1.0.2`
 - `H5P.SimpleMultiChoice`: `1.0.5`

### 5.braries Requiring Path Correction in library.json
Some libraries require correction of file paths in their `library.json`:

- `H5P.MemoryGame`: `1.3.36`

### 6. Libraries Excluded from Build Steps
Some libraries are excluded from build steps (e.g., Shepherd):

- `Shepherd` (all versions)

### How Special Handling is Applied
- The build script checks the library name and version against the above lists and applies the necessary build flags or corrections.
- If a library version is not listed above, it is built using the standard proce

## Output
- The script downloads, builds and packages H5P libraries into the specified temporary folder.
- Progress and results are logged to the console.

## Troubleshooting
- Ensure the input and map files exist and are valid YAML.
- Make sure the temporary folder is writable.
- Check for errors in the console output for details.

## Related Files
- `service/h5p-library-packager.service.ts`: Logic for packaging libraries
- `helper/file-system.helper.js`: File reading utilities

---
For further details, see inline comments in the script source code.
