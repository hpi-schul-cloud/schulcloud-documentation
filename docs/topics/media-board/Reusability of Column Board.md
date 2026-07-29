# Reusability of the Column Board

### Backend

Media-Shelf is a type of board which is attached to a user.

We have can take 3 types of boardnodes:
* media-board
* media-line
* media-external-tool-element


Media-board is the root node of the board. It contains context type user where contextId represents the id of the user.
```
type: "media-board"
contextType: "user"
contextId: "USER-ID"
```

The *media-line* is the descendant of the *media-board*. It is the equivalent of the column in the Column-Board, a way to group elements per row.
Unline the Column-Board, there is no cards. Instead, the elements are directly attached to the media-line. 
The media-line can contain multiple elements, which are of type media-external-tool-element.

The *media-external-tool-element* is the leaf node of the board. 
It represents an external tool element, which can be a link to an external tool or a media item. 
It contains `contextExternalTool` which represents an id from content-external-tools collection.
