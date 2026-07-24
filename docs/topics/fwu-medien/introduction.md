# Introduction

FWU Medien are learning materials provided by FWU (Institut für Film und Bild in Wissenschaft und Unterricht). They are available to schools in Germany via the Bildungslogin platform.
The data is static, and hosted on an S3 bucket.

### Backend
In Schulcloud, the backend module `fwu-learning-contents` exposes the FWU media API and serves the files directly.

#### Endpoints

- `GET /fwu` — returns the list of available FWU content items.
- `GET /fwu/*path/:fwuLearningContent` — streams a single content file.

#### Good to know

- The feature is guarded by the backend configuration flag `FEATURE_FWU_CONTENT_ENABLED`.
- The endpoints require JWT authentication.
- Responses in this module are cached 
  - in practice, mainly the FWU list and repeated content requests for the same URL
  - Cache lifetime is about 30 days.
  - Caching is done at the module level using NestJS `CacheModule`.
- File downloads are streamed instead of loaded fully into memory.
- The response uses an inline disposition so clients can handle the file name directly.
- The content list is built from the static data in `fwu.filesIndex.ts`, which contains hard-coded FWU content IDs, which represents the available media files from the S3 bucket organized in folders for each FWU content item.


### Integration into media-shelf
A simple CTL restricted to media-board and linking to the front-end route `media-shelf/fwu-media`
This makes it to show up in the available items in the media-shelf.

### Frontend 
A vue page shows the list of the available FWU content items and allows users to open them.
The opened item is served directly from the backend module.
The page is accessible via the route `media-shelf/fwu-media`.