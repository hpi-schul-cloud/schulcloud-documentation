# Git Conventions

Every change, no matter how small, must be tracked in a ticket.

We use a [Feature Branch model](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Start a branch from main and make a PR to main.

**Branch naming:**

`<TICKET_NUMBER>-word1-word2-word3`

e.g. `BC-1234-course-copy`

- the ticket number must be uppercase (e.g. `BC-1234`)
- the description must be lowercase kebab-case
- the full branch name must not exceed 64 characters

## Pull Requests

Pull Requests must contain a relevant description (template provides useful information, when creating the PR).

In case of UI changes also put a screenshot and request approval from UX.
All Pull Requests criteria (as defined in deployment pipeline) must be green before merge,
e.g. 1 approving review, unit tests or QA checkbox in PR template.

### Merge Strategy

Merge using the squash strategy. The squashed commit message must follow this pattern:

`<TICKET_NUMBER> - <description> (#<PR_NUMBER>)`

e.g. `BC-1993 - lesson lernstore and geogebra copy (#3532)`

- use imperative mood for the description (e.g. "Add", "Fix", "Update" — not "Added" or "Fixes")

The commit body should explain **what** was changed and **why**:

- add a short descriptive text explaining the motivation behind the change
- list relevant changes as bullet points

```text
BC-1993 - lesson lernstore and geogebra copy (#3532)

In order to make sure developers in the future can find out why changes have been made,
add some descriptive text here that explains what was done and why.

- change some important things
- change some other things
- refactor some existing things

# Do not mention tests, changes that didn't make it to main, linter, or other fixups
# Only list changes that are relevant compared to main
# Comments like this will not show up in the git history
```

**Note for working with Windows:** We strongly recommend to let git translate line endings. Please set `git config --global --add core.autocrlf` input when working with windows.
