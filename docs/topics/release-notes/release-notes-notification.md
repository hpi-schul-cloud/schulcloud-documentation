# Release Notes Notification

## Overview

Release notes inform users about relevant changes after a software update. Users are notified with a dialog on the dashboard when they log in after a release update.

Unlike typical changelogs, release notes do **not** list all technical changes. They only include information that is relevant to users:

- UI changes that affect how the application is operated
- Changes to existing tools or features
- Changes that affect school or lesson planning
- Changes that require user action to avoid problems or data loss
- Bug fixes that affect important functionality

## Where Users See Release Notes

- **Dashboard:** A notification dialog is shown after login following a release
- **Help section:** Available in the application's help area
- **GitHub:** [hpi-schul-cloud/RELEASE-NOTES/releases](https://github.com/hpi-schul-cloud/RELEASE-NOTES/releases)

---

## Process

### 1. Coordination

Coordinate the release notes scope and timing with the release management responsible for the current release cycle.

### 2. Write Release Notes on GitHub

Release notes are created in the GitHub repository:
→ [hpi-schul-cloud/RELEASE-NOTES/releases](https://github.com/hpi-schul-cloud/RELEASE-NOTES/releases)

**Steps:**

1. Click **"Draft a new release"**
2. Fill in the required fields:
   - **Choose a tag:** The current release number (e.g. `28.7.0` — see the organization page for the correct number)
   - **Release title:** A user-facing title describing the release
   - **Description:** Write the release notes content in Markdown (see the template in the repository)
3. **Save regularly** with "Save draft"
4. Once reviewed and approved → **Publish release**

### 3. Transfer Release Notes into the Application

For release notes to appear to users in the application, they must be **fetched per instance** via the SuperHero Dashboard (SHD).

This step should be coordinated with release management beforehand.

**Steps:**

1. Log in to the SHD of the target instance
2. Fetch the release notes -> Go to "Allg. Verwaltung" → Click "Releases fetchen"

### 4. Instance-Specific Adjustments

In the following cases, release notes must be individually adjusted and fetched **per instance**:

- Links to the help section are included (URLs differ per instance)
- Instance-specific features are described
- An instance requires separate communication or additional information for its users

#### How to Handle Instance-Specific Changes

1. **Adapt content for the specific instance in GitHub**
   - Adjust help links to match the instance URL pattern:
     ```
     https://[cloud-url]/help/confluence/[page-id]
     ```
     Example for Brandenburg:
     ```
     https://brandenburg.cloud/help/confluence/12345678
     ```
   - The number at the end is the Confluence Page-ID

2. **Save and publish** the adapted release on GitHub

3. **Fetch into the instance** via the SHD (log in → fetch release)

4. **Repeat** steps 1–3 for each instance that needs adjustments

:::warning Sensitive Information
Release notes on GitHub are **publicly accessible**. If instance-specific notes contain sensitive information, remove that content from GitHub after fetching into the application. Save changes with "Update Release".
:::
