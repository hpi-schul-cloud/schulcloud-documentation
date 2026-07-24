### Introduction
A media-shelf (referred in code as media-board) serves SVS-users as a digital library.

Media-shelf offers the following:

* Users have individual access to media-shelf.
* Content that is made available within media-shelf (media), can originate from different external sources (media sources).
* External tools can be made available on media-shelf
* SVS dynamically determines which content and tools must be made available to users by applying pre-defined rules
* Media and tools within media-shelf are displayed as media-elements
* Users can arrange media-elements within media-shelf via drag and drop according to their own preferences
* This arrangement is automatically saved for each user and restored after opening media-shelf page.

### What is displayed within media-shelf?
Technically, media-shelf shows external tools that are available to current user.
Usually external tools launch an external application.
External tools can be configured in such a way that they allow users to access specific, external content (e.g. a digital book) which originate from external media sources.

External tools whose underlying CTL configuration has a parameter **mediumId** and usually also a parameter **mediaSourceId** are referred to as media for short.
The mediumId uniquely identifies a specific content within the associated media source.


### What is media activation?
External tools that have a mediumId must be activated to be accessible to users from SVS.
A medium is activated for an SVS-user, when this user owns appropriate **media activation data** *(media-activation for short)*.

If a user wants to access a medium that requires media-activation, then SVS checks if this user owns the required data.
If the appropriate data is missing, SVS rejects the access to related media.

SVS automatically updates media-activations for users.
Currently only media-activation managed by moin.schule has been integrated in SVS.
Media-activation data is managed during the ad-hoc-provisioning procedure during login to SVS from moin.schule.
In future, another media-activation sources are planned to be integrated in SVS.


### Media activations managed by moin.schule
moin.schule allows to define and configure **media**. This is possible within moin.schule web application.

Media is configured and managed as moin.schule-services. moin.schule-services contain the following attributes to identify media:

* "Medien-ID"
* "Medienkatalog-ID"
This parameter specifies a media-source. If this parameter is missing, then the moin.schule is the media source.
In SVS this parameter is called mediaSourceId.

moin.schule allows to enable services for:
* whole schools
* user-groups
* single users.

The transfer of *media-activations* from moin.schule to SVS is integrated within SVS's **ad-hoc provisioning**.
After the user logs in to SVS via moin.schule, media-activations are obtained from moin.schule via a separate endpoint called: **policies-info** offered by **SchulConneX** interface.

Currently the media source "Bildungslogin" is managed by moin.schule.


### How does SVS determine which tools are available in media-shelf?
* External tools are available within media-shelf when they meet the following requirements:

* External tool is enabled in user's school
School admins must enable external tools for use in theirs schools.

* External tool is not excluded from use within media shelf
Superhero can exclude media from the use within specific context, e.g. the media-shelf.

* External tool does not have any mandatory parameters in scope: 'school-context'.
Currently SVS does not support the configuration of parameters with scope 'school-context' in media-shelf.

* If the external tool is a medium, then this medium must be activated for current user
Only activated media is offered for use within media-shelf.


### Automatic activation of media in schools
Since there could potentially be a lot of media that should be made available in schools, SVS allows school administrators to activate an automatic enabling of media within their schools.

**Automatic media enabling**

School admin can enable automatic tool activation within SVS client on the following page:
**SVS Client > Administration > Manage school > Data synchronization options**

Please note:
The option described above is visible only, when the feature flag 'FEATURE_SCHULCONNEX_MEDIA_LICENSE_ENABLED' is enabled.



### What does the media shelf offer?
Media shelf offering: Media shelf provides a user with tools and content from external sources.

Media is represented as media elements.
Media shelf consists of a fixed line that provides all currently available-media.

Users can access media directly from the available-media line.
Furthermore, a user can create additional lines according to their preferences and move selected media to these lines.

This allows a user to arrange the media shelf individually. The media shelf stores this individual arrangement and recreates it for the next session.

Each media element displays the following information:
* Image - Depending on tool configuration this can be a detailed thumbnail, an specific icon or a standard icon.
* Title - Medium's title
* Description - A multiline text, that describe the medium.

