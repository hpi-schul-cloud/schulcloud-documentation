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

Add the BBB credentials **HOST** and **SALT** to your env. file, you can find them in the password vault.

Add `FEATURE_VIDEOCONFERENCE_ENABLED=true` in **client** and **server** and
`FEATURE_VIDEOCONFERENCE_WAITING_ROOM_ENABLED=true` to your env. file in the client.

Add the right permissions to the role. Permissions needed are `START_MEETING, JOIN_MEETING`.

Add "videoconference" to School property 'features' array (table 'schools') in MongoDB.

Make sure you started the server with the following env values:

> ```
> FEATURE_VIDEOCONFERENCE_ENABLED=true
> VIDEOCONFERENCE_HOST=https://bbb.staging.messenger.schule/bigbluebutton
> VIDEOCONFERENCE_SALT (from password vault)
> FEATURE_COLUMN_BOARD_VIDEOCONFERENCE_ENABLED=true (to make the option BBB visible within Boards)
> ```

When a videoconference is created (e.g. when a teacher activates the feature for a course) within the database (table 'videoconferences')
an object is created with the following structure:

> **💡 Tip**
> 
> ```
> {
>     "_id" : ObjectId("ID"),
>     "createdAt" : ISODate("2026-02-02T10:01:25.075+0000"),
>     "updatedAt" : ISODate("2026-02-02T10:02:00.127+0000"),
>     "target" : "COURSE_ID",
>     "targetModel" : "courses",
>     "options" : {
>         "everyAttendeJoinsMuted" : true,
>         "everybodyJoinsAsModerator" : false,
>         "moderatorMustApproveJoinRequests" : false
>     },
>     "salt" : "SALT_VALUE"
> }
> ```

A similar structure would be present in case the videoconference is added as a board element but of course 'target' would refer to a different object (board) and for 'targetModel' we would have the value "video-conference-elements".

## External Experts Waiting room

### Introduction

External experts are currently forbidden from entering BBB conferences due to data protection reasons. However if there is a waiting room and explicit permissions from a moderator (usually a teacher) then they are allowed into such rooms to participate in a video conference.

### Research Results

BBB has built in features to allow for such constellations. It has a waiting room for guests that can be activated and only allows participants to join after a moderator approves it.

These features are currently deactivated in dBildungscloud, but can be activated. In a POC we could confirm that it works as imagined, it just needs to be properly implemented now.

The following changes are necessary:

**Client:**
- Add an option on room creation, that allows external experts, but puts them in a waiting room

**Server:**
- Add the correct parameters on room creation to allow guests only after moderator permission
- Add a check for external experts to give them the BBB role "Guest"

Those changes will most likely be done in the legacy code due to delivery timeline reasons.