# API design

## nest.js

In nest.js all apis are defined in controllers.
Usually the api follows the following syntax:

```typescript
/api/v3/<resource>
```

- Each controller is responsible for a specific resource. 
- The controller is responsible for the routing and the validation of the request.
- The controller calls a service to handle the request. 
- The service is responsible for the business logic. 
- The service calls a repository to access the database. 
- The repository is responsible for the database access.


## Responses

When returning a response like this:

```typescript
    @ApiOperation({ summary: 'Create a new element on a card.' })
	@ApiExtraModels(
		ExternalToolElementResponse,
		FileElementResponse,
		LinkElementResponse,
		RichTextElementResponse,
		SubmissionContainerElementResponse
	)
	@ApiResponse({
		status: 201,
		schema: {
			oneOf: [
				{ $ref: getSchemaPath(ExternalToolElementResponse) },
				{ $ref: getSchemaPath(FileElementResponse) },
				{ $ref: getSchemaPath(LinkElementResponse) },
				{ $ref: getSchemaPath(RichTextElementResponse) },
				{ $ref: getSchemaPath(SubmissionContainerElementResponse) },
			],
		},
	})
	@ApiResponse({ status: 400, type: ApiValidationError })
	@ApiResponse({ status: 403, type: ForbiddenException })
	@ApiResponse({ status: 404, type: NotFoundException })
	@Post(':cardId/elements')
	async createElement(
		@Param() urlParams: CardUrlParams,
		@Body() bodyParams: CreateContentElementBodyParams,
		@CurrentUser() currentUser: ICurrentUser
	): Promise<AnyContentElementResponse> {
		const { type, toPosition } = bodyParams;
		const element = await this.cardUc.createElement(currentUser.userId, urlParams.cardId, type, toPosition);
		const response = ContentElementResponseFactory.mapToResponse(element);

		return response;
	}
```

We want to use decorators to explain the intent of the response.  
The `@ApiOperation` decorator is used to define the summary.  
The `@ApiResponse` decorator is used to define the response.  
The `@ApiExtraModels` decorator is used to define the response models.  

The final response should either be an javascript Object or an array.
We do not return primitives like `string` or `boolean`.

Swagger will automatically generate the response schema from the response object.