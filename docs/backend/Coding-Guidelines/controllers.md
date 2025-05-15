# Controller

A modules api layer is defined within of [controllers](https://docs.nestjs.com/controllers).

The main responsibilities of a controller is to define the REST API interface as openAPI specification and map DTO's to match the logic layers interfaces.

```TypeScript
@ApiTags('News')
@JwtAuthentication()
@Controller('news')
export class NewsController {
	constructor(private readonly newsUc: NewsUc) {}
    
    @ApiOperation({ summary: 'some descriptive information that will show up in the API documentation' })
    @ApiResponse({ status: 200, type: BoardResponse })
    @ApiResponse({ status: 400, type: ApiValidationError })
    @ApiResponse({ status: 403, type: ForbiddenException })
    @ApiResponse({ status: 404, type: NotFoundException })
    @Post()
    async create(@CurrentUser() currentUser: ICurrentUser, @Body() params: CreateNewsParams): Promise<NewsResponse> {
        const news = await this.newsUc.create(
            currentUser.userId,
            currentUser.schoolId,
            NewsMapper.mapCreateNewsToDomain(params)
        );
        const dto = NewsMapper.mapToResponse(news);

        return dto;
    }
}
```

## JWT-Authentication

For **authentication**, use [guards](https://docs.nestjs.com/guards) like JwtAuthGuard. It can be applied to a whole controller or a single controller method only. Then, the authenticated user can be injected using the `@CurrentUser()` decorator.

## Validation

Global settings of the core-module ensure **request/response validation** against the api definition. Simple input types might additionally use a custom [pipe](https://docs.nestjs.com/pipes) while for complex types injected as query/body are validated by default when parsed as DTO class.

## DTOs

All data that leaves or enters the system has to be defined and typed using DTOs.

```typescript
export class CreateNewsParams {
    @IsString()
    @SanitizeHtml()
    @ApiProperty({
        description: 'Title of the News entity',
    })
    title!: string;

    // ...
}
```

### DTO File naming

Complex input DTOs are defined like [create-news].params.ts (class-name: CreateNewsParams).

When DTO's are shared between multiple modules, locate them in the layer-related shared folder.

> **Security:** When exporting data, internal entities must be mapped to a response DTO class named like [news].response.dto. The mapping ensures which data of internal entities are exported.

### openAPI specification

Defining the request/response DTOs in a controller will define the openAPI specification automatically. Additional [validation rules](https://docs.nestjs.com/techniques/validation) and [openAPI definitions](https://docs.nestjs.com/openapi/decorators) can be added using decorators. For simplification, openAPI decorators should define a type and if a property is required, while additional decorators can be used from class-validator to validate content.

### Mapping

You should define a mapper to easily create dtos from the uc responses, and the datatypes expected by ucs from params.
