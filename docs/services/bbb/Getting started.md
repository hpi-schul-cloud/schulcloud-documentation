# Getting started with BigBlueButton (BBB)

## Features

- guestPolicy functionality
- muteOnStart functionality
- allowModsToUnmuteUsers functionality
- welcome functionality

External Expert can join a meeting and will be marked as guest now.
Moderator can mute all participants on start of video conference.
Moderator can allow moderators to unmute users, if they want to.
Moderator can write a welcome message for the Waiting room.

## Local Setup for using the features above in BBB

Add the BBB credentials **HOST** and **SALT** to your env. file, you can find them in 1Password.

Add `FEATURE_VIDEOCONFERENCE_ENABLED=true` in **client** and **server** and
`FEATURE_VIDEOCONFERENCE_WAITING_ROOM_ENABLED=true` to your env. file in the client.

Add the right permission to the role. Permissions they need are `START_MEETING, JOIN_MEETING`.

Add "videoconference" to School features (table school) in MongoDB.

Make sure that the fields below exists in the videoconference ltitool object (MongoDB).

> **💡 Tip**
> 
> ```
> "isHidden":false,
> "name":"Video-Konferenz mit BigBlueButton",
> "url":"BBB_URL",
> "isLocal":true,
> "logo_url":"/images/tools/bbb/available.png",
> ```

Make sure you started nuxt client.

> FEATURE_VIDEOCONFERENCE_ENABLED=true
> VIDEOCONFERENCE_HOST=https://bbb.staging.messenger.schule/bigbluebutton
> VIDEOCONFERENCE_SALT

## External Experts Waiting room

### Introduction

External experts are currently forbidden from entering BBB conferences due to data protection reasons. However if there is a waiting room and explicit permissions from a moderator (usually a teacher) then they are allowed into such rooms to participate in a video conference.

### Research Results

BBB has built in features to allow for such constellations. It has a waiting room for guests that can be activated and only allows participants to join after a moderator approves it.

These features are currently deactivated in dBildungscloud, but can be activated. In a POC we could confirm that it works as imagined, it just needs to be properly implemented now.

So for future developments we needs the following changes:

**Client:**
- Add an option on room creation, that allows external experts, but puts them in a waiting room

**Server:**
- Add the correct parameters on room creation to allow guests only after moderator permission
- Add a check for external experts to give then the BBB-role "Guest"

Those changes will be most likely done in the legacy code due to delivery timeline reasons.</p>