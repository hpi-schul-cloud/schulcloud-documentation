# VIDIS Integration

### Introduction
This page describes the integration of Vidis ("Single Sign-On für Bildungsinstitutionen") within SVS.

### Requirements
* VIDIS provides a specific URL for each VIDIS medium to be integrated within SVS
A medium within VIDIS is identified by a unique URL.
* VIDIS provides an offerId for each medium to be integrated within SVS
Attribute offerId is set as mediumId within SVS. This id is used within SVS to recognize, if user has access to the referred VIDIS-medium.
* VIDIS is able to communicate with moin.schule by using moin.schule-SSO
VIDIS uses moin.schule-SSO-session established by SVS_Client to communicate with moin.schule.
* VIDIS is able to determine user's context by using moin.schule-SSO to be able to grant access to its content
VIDIS calls a moin.schule-endpoint to determine user's context.


### Technical Specifications
The following general pre-conditions must be met:

* A basic CTL-tool (→ Vidis-Tool) that refers to a VIDIS-content (medium) must be defined within a SVS-instance.

* For non-public media available via VIDIS
  * Vidis-Tool must contain the following parameters so that SVS can determine whether an user is allowed to access the medium:
    * Medium-Id
    This attribute represents a medium with a specific id (offerId) within VIDIS and identifies uniquely a content.
    * Medienkatalog-Id
    This attribute refers to a media source. In this case to VIDIS.

* For public media available via VIDIS
If a VIDIS medium is publicly available then Medium-Id and Medienkatalog-Id are not required for access.


___
#### Media without media-id

If the configuration of an external tool does not include a Medium-Id, then SVS does not verify if user is authorized to access the related medium.

---
#### moin.schule configuration
In moin.schule the schools must be assigned an moin-schule-application that enables SSO communication between moin.schule and VIDIS and allows the delivery of  "personenkontext" from moin.schule to VIDIS.

---

### Media authorization data
VIDIS provides a REST interface with the help of which media-authorization-data can be obtained, among other things.

SVS calls up this interface at regular intervals in background.

The response from VIDIS is an array with all activated media within the specified region.

Furthermore each medium contains an array with schools (schoolActivations) for which the medium was activated.

SVS assigns VIDIS media the following mediaSourceId: "vidis.fwu.de".

Each medium is identified by its unique offerId (stored as medium-Id in SVS).

SVS stores/updates media-authorization-data for each school.

Media-authorization-data that exists but has not been delivered by VIDIS will be removed during the update.

The school authorization data is saved in MongoDB as a "school-license" document that looks like this:

```json
{
    "_id" : ObjectId("_id"),
    "type" : "media-license",
    "school" : ObjectId("_id"),
    "mediumId" : "1422092",
    "mediaSource" : ObjectId("_id"),
    "createdAt" :  ISODate(),
    "updatedAt" :  ISODate()
}
```
#### Job configuration
The automatic update job responsible for calling the Vidis API is implemented as a Kubernetes CronJob in the schulcloud-server repository, under an Ansible role named media-licences.

#### Enabling/Disabling the CronJob
The execution of this CronJob can be selectively enabled or disabled for different environments or instances. This is managed by configuring the role in the corresponding role group, host, and instance configurations within the dof_app.

#### Job Scheduling
Currently, the CronJob is triggered automatically once a day, during the early morning hours. Its execution time and frequency can be adjusted by modifying the environment variable:

SERVER_VIDIS_SYNC_CRONJOB_SCHEDULE
This variable needs to be updated in both the server repository and the dof_app.

#### Job Responsibilities
The Kubernetes CronJob is responsible for triggering a server-side console job that handles the actual task of fetching and updating media authorizations from the Vidis API.

The server sync job is implemented in the @infra module of the server repository. It can also be manually triggered using the following command:

`npm run nest:start:console -- sync run vidis`

#### Vidis Connector Client
The Vidis connector client, which communicates with the Vidis API, is automatically generated from the provided OpenAPI definition. The client is configured using environment variables that specify the Vidis base URL and the resource region.

#### Feature Flag for Media authorizations
A feature flag has been implemented to control user access to media authorizations for schools. This flag allows administrators to enable or disable access as needed.

#### Prerequisite: Media-Source
A prerequisite for the job is a defined Vidis media-source object stored manually in the database. Currently, there is no API available to create the media-source programmatically.

### Media metadata
SVS provides a metadata-update-batch that refreshes metadata for all VIDIS media.

For this purpose, an interface provided by VIDIS is called.

The updated metadata is stored in MongDB-collection "external-tools" and applies to the following attributes:

* name
* description
* logo*
* logoUrl*

*) Both attributes stores the source and the belonging data of a logo-image within MongoDB. 

#### Job configuration
The automatic update job responsible for calling the Vidis API is implemented as a Kubernetes CronJob in the schulcloud-server repository, under an Ansible role named vidis-media-metadata-sync.

#### Enabling/Disabling the CronJob
The execution of this CronJob can be selectively enabled or disabled for different environments or instances. This is managed by configuring the role in the corresponding role group, host, and instance configurations within the dof_app.

#### Job Scheduling
Currently, the CronJob is triggered automatically once a day, during the early morning hours. Its execution time and frequency can be adjusted by modifying the environment variable:

SERVER_VIDIS_MEDIA_METADATA_SYNC_CRONJOB_SCHEDULE and WITH_VIDIS_MEDIA_METADATA_SYNC

This variable needs to be updated in both the server repository and the dof_app.

#### Job Responsibilities
The Kubernetes CronJob is responsible for triggering a server-side console job that handles the actual task of fetching and updating media authorizations from the Vidis API.

The server sync job is implemented in the @infra module of the server repository. It can also be manually triggered using the following command:

`npm run nest:start:console -- sync run vidis`

#### Vidis Connector Client
The Vidis connector client, which communicates with the Vidis API, is automatically generated from the provided OpenAPI definition. The client source configuration for the API credentials is stored in the media-source object that specifies the Vidis base URL, the resource region, and creds..

#### Feature Flag for Metadata
A feature flag  FEATURE_VIDIS_MEDIA_ACTIVATIONS_ENABLED has been implemented to control user access to media authorizations for schools. This flag allows administrators to enable or disable access as needed.

#### Prerequisite: Media-Source
A prerequisite for the job is a defined Vidis media-source object stored manually in the database. Currently, there is no API available to create the media-source programmatically.

### VIDIS interface
This interface is available here: https://fwu-de.github.io/bmi-docs/api/vidis/

Access to this interface is possible via basic authentication.

SVS calls up this interface at regular intervals in background by using the endpoint getActivatedOffersByRegion.
This endpoint requires an input parameter regionName which is e.g. "Niedersachsen".

The response from VIDIS contains an array with schools (schoolActivations) for each activated medium.

The schools are specified by a school-number-prefix followed by their official-school-number.

The school-number-prefix has the following syntax: DE-XX-
where XX is an abbreviation for federal states (in germany, e.g. NI for Niedersachsen).

Note: In Vidis' test-environment the school-number-prefix seems to be arbitrary.

#### Connection configuration
All connection data required for VIDIS interface is saved within MongoDB-collection "media-sources" as embedded object: "vidisConfig".

The following attributes are specific for VIDIS media-source:
```
username	String	Encrypted name of the user who calls the VIDIS interface
password	String	Encrypted password for the user who calls the VIDIS interface
baseUrl	String	Url of VIDIS interface
region	String	Name of the region from which data will be delivered. Usually it is the "federal state" abbreviation.
schoolNumberPrefix	String	Prefix that precedes a school number in VIDIS
```

The media-source object looks like this:
```json
{
    "_id" : ObjectId("677325f00000000000000000"),
    "format" : "VIDIS",
    "name" : "vidis",
    "sourceId" : "vidis.fwu.de",
    "createdAt" : ISODate("2024-12-30T23:00:00+0000"),
    "updatedAt" : ISODate("2024-12-30T23:00:00+0000"),
    "vidisConfig" : {
        "username" : "U2FsdGVkX191Q1d...",
        "password" : "U2FsdGVkX19Ks29...",
        "baseUrl" : "https://service-stage.vidis.schule/o/vidis-rest",
        "region" : "test-region",
        "schoolNumberPrefix": "NI_"
    }
}
```
where username and password are stored in encrypted form. The authorization data will then be matched to the respective school by its officialSchoolNumber.


### Implemented use-cases
Adding a Vidis content to SVS
The following *pre-conditions* must be met:

The following must be known:

* URL to a VIDIS content
    Origin: VIDIS
    This URL refers to a content offered by VIDIS.
    The following query parameter informs VIDIS which IdP must be used for SSO: vidis_idp_hint
    For production environment this parameter has the value: moin-schule-o
    For test environment this parameter has the value: idp-nd-sanis-o-t
    
    This parameter must passed within the URL to Vidis content.
    e.g. https://www.phase-6.de/partner/login/?partner=vidis-niedersachsen&vidis_idp_hint=moin-schule-o

* Medium-Id
    Origin: Vidis (original name is offerId)
    The internal id of the related content in Vidis. 

    This is required for

* Medienkatalog-Id
Origin: SVS

    Id of Vidis as media source.

The following workflow was implemented:

* Superhero configures an external Tools (Vidis-Tool) and sets appropriate URL in SHD

* Superhero configures Medium-Id and Medienkatalog-Id
If the content is not publicly available.

* School admins add Vidis-Tool to their schools
This step is not necessary, if school allows automatic tool assignment during ad-hoc-provisioning.

* Teachers add Vidis-Tool to context (e.g. boards)

* SVS offers Vidis-Tool within media-shelf

### Opening a VIDIS medium from SVS
The following *pre-conditions* must be met:
* There is a CTL-tool linked to a specific VIDIS-Medium and is available for the user (e.g. within media-shelf) → Vidis-Tool

The following flow was implemented:
* An SVS user clicks on Vidis-Tool to open specific content

* If Vidis-Tool configuration contain a Medium-Id then SVS checks, if current user is authorized to access the linked medium

  For non public content user must own authorization-data for this specific VIDIS-content.
  For VIDIS there is background process that collects media-authorization-data from VIDIS.
  VIDIS authorization-data makes content available per school.
  SVS determines user's school and checks if required media-authorization-data is available.

* If user is authorized to access a medium SVS launches Vidis-Tool that is configured to open it
Alternatively SVS rejects the access to medium and informs user.

* VIDIS recognizes on the query parameter vidis_idp_hint that moin.schule must be used as SSO-IdP and asks moin.schule for information regarding SVS user to be able to determine their access rights.

* VIDIS displays the referred content to the SVS user
Alternatively Vidis rejects the access to medium and informs user.

#### Updating media-authorization-data for all schools automatically
SVS supports an automatic update for VIDIS-media-autorization-data.

This is realized as a background job that calls up VIDIS-interface at regular intervals.

#### Updating media authorization data for a specific school manually
School administrators can trigger the update of media-authorization-data from VIDIS for their school manually.
The update is executed immediately.

---
#### Manual update start
The following page offers a button to start an update of media-authorization-data for current school.
Administration > Manage school > External Tools
---

### Risks and Assumptions
Assumptions underlying the were concept
* VIDIS can communication with moin.schule via SSO
* VIDIS can determine SVS-users context via SSO with moin.schule to be able to grant access to media
* VIDIS interface returns offerId for activated media
* VIDIS interface returns a list of official-school-numbers for activated media
* VIDIS is able to return all activated media for a region.

### Conclusion
Summary of key points
* VIDIS media are accessed from SVS by CTL tools configured with basic configuration
  * The following Vidis data are required:
    * url in Vidis to open a specific medium
    * offerId from Vidis to handle authorization within SVS
* VIDIS provides a REST interface which returns media-authorization-data and metadata for media
* A background process was implemented  to load media-authorization-data from VIDIS
* SVS logic uses media-authorization-data obtained from VIDIS to manage access to Vidis content
* Manually trigger for update VIDIS-media-authorization-data by school administrators was implemented
* A background process was implemented to load media-metadata from VIDIS


### Appendices
* Vidis REST interface
  * https://fwu-de.github.io/bmi-docs/api/vidis/
* Vidis test environment
  * https://service-stage.vidis.schule/
* Help for Vidis
  * https://github.com/FWU-DE/application-provider-example
  * https://fwu-de.github.io/application-provider-example
* Abbreviations for federal states
  * https://www.destatis.de/DE/Methoden/abkuerzung-bundeslaender-DE-EN.html