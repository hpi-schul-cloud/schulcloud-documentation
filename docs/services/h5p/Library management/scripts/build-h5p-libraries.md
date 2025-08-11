# build-h5p-libraries.js

## Overview

`build-h5p-libraries.js` is a Node.js script used to automate the process of building H5P libraries from their respective GitHub repositories. It reads a list of desired libraries and a mapping of library names to repositories, then downloads and builds each library into a specified temporary folder.

## How It Works
1. **Argument Parsing:**
   - Uses the `arg` package to parse command-line arguments for input files and temporary folder.
2. **Configuration Files:**
   - Reads a YAML file containing the list of libraries to install (`--input`).
   - Reads a YAML file mapping library names to GitHub repositories (`--map`).
3. **Building Libraries:**
   - Instantiates `H5pLibraryBuilderService` with the repo map and temp folder.
   - Downloads and builds each library listed in the wish list from its GitHub repository.

## Command-Line Options
- `--help` or `-h`: Show usage information.
- `--input` or `-i`: Path to the YAML file listing libraries to install (default: `config/h5p-libraries.yaml`).
- `--map` or `-m`: Path to the YAML file mapping libraries to repositories (default: `config/h5p-library-repo-map.yaml`).
- `--tmp` or `-t`: Path to the temporary folder for building libraries.

## Usage Example
```bash
node scripts/h5p/build-h5p-libraries.js --input config/h5p-libraries.yaml --map config/h5p-library-repo-map.yaml --tmp /tmp/h5p-libraries
```

If no options are provided, defaults are used for input and map files.

## Prerequisites
- Node.js installed
- Required dependencies installed (run `npm install` in the project root)
- Valid YAML files for library wish list and repo map

## Required Environment Variable

To build H5P libraries using `build-h5p-libraries.js`, you only need the following environment variable:

- `GITHUB_PERSONAL_ACCESS_TOKEN`: Required if you need to access private repositories or increase GitHub API rate limits. Set this variable to a valid GitHub personal access token.

Set this variable in your environment before running the script to avoid authentication or permission errors.

## Special Handling for H5P Library Versions During Build

This document lists all H5P library versions that require special handling during the build process in `H5pLibraryBuilderService`.

**It needs to be checked from time to time if these handlings are still required and also are needed to be applied to newer versions!**

### 1. Libraries Requiring NODE_OPTIONS for Build
Some libraries require the `NODE_OPTIONS=--openssl-legacy-provider` prefix for their build script due to compatibility issues with OpenSSL:

- `H5P.Dialogcards`: `1.8.8`, `1.7.10`
- `H5P.DragQuestion`: `1.15.4`
- `H5P.DragText`: `1.10.25`, `1.9.5`, `1.8.20`
- `H5P.MultiMediaChoice`: `0.3.56`
- `H5P.InteractiveVideo`: `1.28.3`

### 2. Libraries Requiring Legacy Peer Dependencies for npm install
Some libraries require the `--legacy-peer-deps` flag for `npm ci` due to peer dependency issues:

- `H5P.DragText`: `1.9.5`, `1.8.20`

### 3. Libraries Requiring Path Correction in library.json
Some libraries require correction of file paths in their `library.json`:

- `H5P.MemoryGame`: `1.3.36`

### 4. Libraries Excluded from Build Steps
Some libraries are excluded from build steps (e.g., Shepherd):

- `Shepherd` (all versions)

### How Special Handling is Applied
- The build script checks the library name and version against the above lists and applies the necessary build flags or corrections.
- If a library version is not listed above, it is built using the standard proce

## Output
- The script downloads and builds H5P libraries into the specified temporary folder.
- Progress and results are logged to the console.

## Troubleshooting
- Ensure the input and map files exist and are valid YAML.
- Make sure the temporary folder is writable.
- Check for errors in the console output for details.

## Related Files
- `service/h5p-library-builder.service.js`: Logic for building libraries
- `helper/file-system.helper.js`: File reading utilities

---
For further details, see inline comments in the script source code.
