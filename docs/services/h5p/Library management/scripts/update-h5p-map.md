# update-h5p-map.js

## Overview

`update-h5p-map.js` is a Node.js script that generates a mapping of H5P library machine names to their corresponding GitHub repositories for a given organization. The output is saved to a specified file, typically in YAML format. This mapping is useful for automating H5P library management and integration in schulcloud-server.

## How It Works
1. **Argument Parsing:**
   - Uses the `arg` package to parse command-line arguments for organization name and output file path.
2. **GitHub Interaction:**
   - Instantiates `H5PGitHubClient` to interact with the GitHub API.
   - Fetches all repositories for the specified organization.
   - Builds a map of H5P library machine names to their repository paths by reading `library.json` from each repo.
3. **Output:**
   - Writes the resulting map to the target file using `fileSystemHelper.writeLibraryRepoMap`.

## Usage

### Command-Line Options
- `--help` or `-h`: Show usage information.
- `--organization` or `-o`: GitHub organization name (e.g., `h5p`).
- `--target` or `-t`: Path to the output file (e.g., `config/h5p-library-repo-map.yaml`).

### Example
```bash
node scripts/h5p/update-h5p-map.js --organization h5p --target config/h5p-library-repo-map.yaml
```

If no options are provided, defaults are:
- Organization: `h5p`
- Target file: `config/h5p-library-repo-map.yaml`

### Help
```bash
node scripts/h5p/update-h5p-map.js --help
```

## Prerequisites
- Node.js installed
- Environment variable `GITHUB_PERSONAL_ACCESS_TOKEN` set with a valid GitHub token
- Required dependencies installed (run `npm install` in the project root)

## Required Environment Variable

To build H5P libraries using `build-h5p-libraries.js`, you only need the following environment variable:

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
