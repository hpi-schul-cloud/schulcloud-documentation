# The Column Board

The column board is the primary use case for the board, and the central way to create content in the SVS.

## Structure

The `ColumnBoard` is structured in three layers. It contains a number of `Columns`, each containing a number of `Cards`. Each of the cards can contain various `Elements`, which are the different forms of content, like `RichTextElement`, `LinkElement`, `FileElement` and so forth.

The `ColumnBoard` can be either rendered as such with the columns next to each other, or as a `ListBoard` with the Columns acting as sections rendered below each other.

## Elements

The `ColumnBoard` supports a wide and expanding list of element types, including:

- `RichTextElement` for both plain and rich text, based on the CKEditor 5.
- `LinkElement` for links to any website, with a cached preview image for privacy reasons.
- `FileElement` for storing files using our [FileStorage](../files-storage/How%20it%20works.md).
- `FileFolderElement` for storing a large number of files at once.
- `VideoConferenceElement` for starting video conferences using Big Blue Button
- `DrawingElement` for collaborative Whiteboards using tldraw
- `CollaborativeTextEditorElement` for using Etherpad
- `ExternalToolElement` for including LTI Tools
- `H5pElement` for including h5p content
