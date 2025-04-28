# Deprecation Workflow

## When to use 2 step migration

When we are replacing code which is used in other modules we should use a 2 step migration.
This is meant to prevent merge conflicts and to make it easier to review the changes.
Also it makes it easier to find the code which needs to be changed in the other modules.
Please note that this is not always possible, but should be used when possible.

Step 1: Add new alternative code  
Step 2: Mark the old code with "@deprecated" add a hint in the comments to use the new code.  
Step 3: Inform team  
Step 4: Remove deprecated code (when is hard to say, once all dependencies are removed)
