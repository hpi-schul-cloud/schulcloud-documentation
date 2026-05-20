# Overview

## Introduction

The "Board" (dubbed "Bereiche" in German) is a module for collaboratively editing structured content, intended to be used for preparing, teaching, and following up on lessons in a school context.

It provides a flexible data structure which can be reused for different usecases. At the time of writing it is used by the ColumnBoard and the MediaBoard.

The Board supports a variety of content elements, including rich text, files, links, and interactive elements, as well as structural elements like columns and cards, that can be freely rearranged via drag&drop.

It is fully collaborative with live editing via websockets and adapts to different authorization contexts.

## Status in Q1/2026

The board in its original intention is incomplete. Note that this section is subject to change and may be out of date.

- Most notably missing is a "tasks" element, that would enable each viewer of the board to independently submit a solution to a challenge, to implement both homeworks and tasks during lessons
- We had planned refactorings towards a "trait" based system based on composable features, that would further separate the generic "board" implementation from the specific Nodetypes and Elements and their particular features.
- We had then planned a refactoring that would enable us to make (new) Element implementations external to the Board Module, providing full extendability without having to make changes to the core Boards implementation
- We had planned a number of technical features to further improve stability and conflict resolution when used by many people at once, most notably fractional indexing
- We had planned a number of performance optimizations, in particular in regards to authorisation and operations that only require small subsets of the board.
- We had planned a feature that would allow efficient retrieval and rendering of specific content from across multiple boards. Most notably, this would drive the "Task Overview", by showing a user all of his open tasks across all of his boards.
- We had planned a feature to configure access to parts of a board, like columns or cards, for example making them invisible to viewers, or enabling single users to edit them.
