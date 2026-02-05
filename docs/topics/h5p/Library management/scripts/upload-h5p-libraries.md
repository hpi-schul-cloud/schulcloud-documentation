# upload-h5p-libraries.ts

## Overview

`upload-h5p-libraries.ts` is a Node.js script designed to upload H5P libraries from a specified temporary folder to their target destination (such as a server or cloud storage). It uses the `H5pLibraryUploaderService` to handle the upload process for all libraries found in the folder.

## How It Works
1. **Argument Parsing:**
   - Uses the `arg` package to parse command-line arguments for the temporary folder location.
2. **Upload Process:**
   - Instantiates `H5pLibraryUploaderService` with the provided temporary folder path.
   - Calls `uploadLibraries()` to upload all H5P libraries found in the folder.

## Usage via npm

To run the `upload-h5p-libraries.ts` script using default options, you'll just have to call:

```bash
npm run h5p:upload-h5p-libraries
```

This will compile the script from TypeScript to JavaScript and then execute the compiled JavaScript file.

## Usage from Command Line

To use the `upload-h5p-libraries.ts` script directly from the command line, follow these steps:

### 1. Compile the Script from TypeScript to JavaScript

First, compile the TypeScript script to JavaScript using the TypeScript compiler:

```bash
npx tsc scripts/h5p/upload-h5p-libraries.ts --esModuleInterop
```

This will generate a JavaScript file at `scripts/h5p/upload-h5p-libraries.js`.

### 2. Run the Compiled JavaScript Script

Next, run the compiled JavaScript file with Node.js:

```bash
node ./scripts/h5p/upload-h5p-libraries.js [options]
```

#### Command-Line Options
- `--help` or `-h`: Show usage information.
- `--tmp` or `-t`: Path to the temporary folder containing built H5P libraries. Default: `/tmp/h5p-libraries`

If no options are provided, defaults are used for input and map files.

### Usage Example

```bash
npx tsc scripts/h5p/upload-h5p-libraries.ts --esModuleInterop
source .env
node ./scripts/h5p/package-h5p-libraries.js
```

## Prerequisites
- Node.js installed
- Required dependencies installed (run `npm ci` in the project root)
- Temporary folder containing built H5P libraries

## Required Environment Variables

For uploading H5P libraries, only the following environment variables for the S3 Client Helper are required:

- `H5P_EDITOR__S3_ENDPOINT`: The S3 endpoint URL (required)
- `H5P_EDITOR__S3_REGION`: The S3 region (required)
- `H5P_EDITOR__LIBRARIES_S3_ACCESS_KEY_ID`: The S3 access key ID (required)
- `H5P_EDITOR__LIBRARIES_S3_SECRET_ACCESS_KEY`: The S3 secret access key (required)
- `H5P_EDITOR__S3_BUCKET_LIBRARIES`: The S3 bucket name for libraries (required)

No other environment variables are necessary for the standard upload.

Make sure these variables are set in your environment before running the script. If they are missing, the upload will fail with an authentication or permission error.

## Output
- The script uploads all H5P libraries found in the specified temporary folder.
- Progress and results are logged to the console.

## Troubleshooting
- Ensure the temporary folder exists and contains valid H5P libraries.
- Check for errors in the console output for details.

## Related Files
- `service/h5p-library-uploader.service.js`: Logic for uploading libraries

---
For further details, see inline comments in the script source code.
