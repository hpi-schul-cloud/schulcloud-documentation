# Overview

## Outline

- [x] Data Structure
- [ ] the Columnboard
- [ ] Parents
- [ ] Authorization
- [ ] API / loading
- [ ] Websockets
- [ ] Persistance
- [ ] How to add a new Element

## Introduction

The "Board" (dubbed "Bereiche" in German) is a module for collaboratively editing structured content, intended to be used for preparing, teaching, and following up on lessons in a school context.

It provides a flexible Datastructure which currently only implements the "Columnboard", but can be extended to further uses.

The Board supports a variety of content elements, including rich text, files, links, and interactive elements, as well as structural elements like columns and cards, that can be freely be rearranged via drag&drop.

It is fully collaborative with live editing via websockets, and adapts to different authorization contexts.

## Status in Q1/2026

The board in its original intention is incomplete. Note that this section is subject to change and may be out of date.

- Most notably missing is a "tasks" element, that would enable each viewer of the board to independently submit a solution to a challenge
- We had planned refactorings towards a "trait" based system based on composable features, that would further seperate the generic "board" implementation from the specific Nodetypes and Elements and their particular feature.
- We had then planned a refactoring that would enable us to make (new) Element implementations external to the Board Module, providing full extendability without having to make changes to the core Boards implementation
- We had planned a number of technical features to further improve stability and conflict resolution when used by many people at once, most notably fractional indexing
- There are other features in the SVS that were intended to be (re)implemented using the board, including the Mediaboard, and the list of boards in a room ("MetaBoard").
- We had planned a number of performance optimizations, in particular in regards to authorisation and operations that only require small subsets of the board.
- We had planned a feature that would allow efficient retrieval and rendering of specific content from across multiple boards. Most notable, this would drive the "Task Overview", by showing a user all of his open tasks across all of his boards.


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

The most important Parent is the [Room](../rooms/overview.md), but other potential parents include Courses, and single Users for personal Boards.