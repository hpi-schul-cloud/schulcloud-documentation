# Technical Details

## Data Structure

Each board is made of a tree of "BoardNodes", with a single Root.
Each Node is of a particular Type, which defines its structural and functional features. Most notably, each Nodetype defines what other Nodes can be its children, creating a fixed but easily changeable structure.

``` typescript
export class Column extends BoardNode<ColumnProps> {

    [...]

    canHaveChild(childNode: AnyBoardNode): boolean {
        return childNode instanceof Card;
    }
}
```

We seperate between structural Nodes (eg. `Columnboard`, `Column`, `Card`) and the actual content that can be put on a card, colloquially called *elements* (eg. `RichTextElement`, `FileElement`, `LinkElement`, `H5pElement`), which are leaves of the tree.

Currently, the only implemented Root is the *CollumnBoard*. However it is intended to support other types of boards, in particular the *MediaBoard*, and the List of Boards in a Room (*MetaBoard*) where originally intended to be implemented as boards (both as of now are independent implementations, but should be refactored.)

## Parents

Each Root Node has a single parent, which is the context the Board belongs into. The Parent provides part of the Configuration of the board (enabling and disabling features), and provides the Users Roles for Authorisation.

The most important Parenttype is the [Room](../rooms/overview.md), but other potential parents include Courses, and single Users for personal Boards.

The exact nature of the parent is abstracted for the board, and replaced with a common interface.

The Parent is resolved through the `BoardContextService`, which provides functions to get the boardRole of a user, and the external configuration of a board.

## Authorisation

## Websockets

## Persistance Layer

## Loading

Since Boards can contain a large amount of Content, it is designed to be loaded in multiple stages.

At first, a `BoardSkeleton` is loaded, which contains only the structural nodes, ie. columns and cards. Each card stores its approximate height, allowing the frontend to render a loading stage where each card can be represented, without any content jumping around too much as the loading progresses.

The frontend can then load the content of cards in batches, prioritizing the cards that are visible on the screen.

Some Content Elements, like images, require data from a different source to be rendered, which is loaded seperately.

This spreading of data allows the board to render quickly, without having to wait for all downloads to complete. This is especially relevent for users in locations with slow connections and low bandwith, as is the case in some schools.

Utilizing a Peer to Peer approach to relieve bandwith is intended, but not yet implemented.