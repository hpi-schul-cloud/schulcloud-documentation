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

The Parent is resolved through the `BoardContextResolverService`, which provides
a `PreparedBoardContext` containing the boardRoles of the users, as well as the configuration of a board.

## Authorisation

Central to the authorisation in the board is the `BoardNodeAuthorizable`, which can be built through the `boardNodeAuthorizableService`.
It is constructed with a specific user in mind, and contains all information required for the authorization including the users permissions on that specific board, and the settings of the board.

The `BoardNodeRule` can operate in two different ways. First, it implements our [rules interface](../authorization/), which allows any external services to determine basic read and write permissions for any boardNodes. This is for example used by the [fileStorage](../files-storage/) and other microservices to authorize access to external ressources that belong to the board or one of its nodes.

Secondly, we use an extended interface within the boardModule that allows checking permissions for specific operations on nodes.

``` typeScript
const boardNodeAuthorizable = await this.boardNodeAuthorizableService.getBoardAuthorizable(board);

throwForbiddenIfFalse(this.boardNodeRule.can('findBoard', user, boardNodeAuthorizable));
```

The rule then contains the logic to authorize each operation against the boardNodeAuthorizable, and specifically what permissions are required for which operation.

## Websockets

The Websocket interface is implemented with using [NestJS Gateways](https://docs.nestjs.com/websockets/gateways), with [Socket.IO](https://socket.io/) underneath.

``` typescript
@SubscribeMessage('update-board-title-request')
@EnsureRequestContext()
public async updateBoardTitle(socket: Socket, data: UpdateBoardTitleMessageParams): Promise<void> {
    const emitter = this.buildBoardSocketEmitter({ socket, action: 'update-board-title' });
    const { userId } = this.getCurrentUser(socket);
    try {
        const board = await this.boardUc.updateBoardTitle(userId, data.boardId, data.newTitle);
        emitter.emitToClientAndRoom(data, board);
    } catch {
        emitter.emitFailure(data);
    }
}
```

Each operation on the board can be triggered with a message of the form `${action}-request`, like in the example `update-board-title-request`.

The response is given with `${action}-success` or `${action}-failure`.

Success Messages are send to all clients that are connected to the same board. To ensure this even when the clients are connected to different server instances, we use a MongoDB IO Adapter to synchronize messages.

## Persistance Layer

All BoardNodes, no matter their type, are stored in a single collection through a single entity.

Each `BoardNodeEntity` represents a single node of the tree, and stores the entire path of its ancestors as a string, as well as its own level within in tree and its position among its siblings. This structure allows for efficient retrival both of the chain of ancestors for a specific node, as well as all descendents of a node (by searching for an id within the paths.)

The `BoardNodeEntity` is also able to store any data that any type of BoardNode might need. Only when the node is loaded and the DO is constructed by the repo is the data also validated to ensure it matches its corresponding type.

## Loading

Since Boards can contain a large amount of Content, it is designed to be loaded in multiple stages.

At first, a `BoardSkeleton` is loaded, which contains only the structural nodes, ie. columns and cards. Each card stores its approximate height, allowing the frontend to render a loading stage where each card can be represented, without any content jumping around too much as the loading progresses.

The frontend can then load the content of cards in batches, prioritizing the cards that are visible on the screen.

Some Content Elements, like images, require data from a different source to be rendered, which is loaded seperately.

This spreading of data allows the board to render quickly, without having to wait for all downloads to complete. This is especially relevant for users in locations with slow connections and low bandwith, as is the case in some schools.

Utilizing a Peer to Peer approach to relieve bandwith is intended, but not yet implemented.
