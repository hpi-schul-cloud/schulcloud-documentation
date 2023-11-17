# Controller

A modules api layer is defined within of [controllers](https://docs.nestjs.com/controllers).

The main responsibilities of a controller is to define the REST API interface as openAPI specification and map DTO's to match the logic layers interfaces.

```TypeScript
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
```

## JWT-Authentication

For **authentication**, use [guards](https://docs.nestjs.com/guards) like JwtAuthGuard. It can be applied to a whole controller or a single controller method only. Then, [ICurrentUser](/apps/server/src/modules/authentication/interface/jwt-payload.ts) can be injected using the `@CurrentUser()` decorator.

## Validation

Global settings of the core-module ensure **request/response validation** against the api definition. Simple input types might additionally use a custom [pipe](https://docs.nestjs.com/pipes) while for complex types injected as query/body are validated by default when parsed as DTO class.

## DTO File naming

Complex input DTOs are defined like [create-news].params.ts (class-name: CreateNewsParams).

When DTO's are shared between multiple modules, locate them in the layer-related shared folder.

> **Security:** When exporting data, internal entities must be mapped to a response DTO class named like [news].response.dto. The mapping ensures which data of internal entities are exported.

## openAPI specification

Defining the request/response DTOs in a controller will define the openAPI specification automatically. Additional [validation rules](https://docs.nestjs.com/techniques/validation) and [openAPI definitions](https://docs.nestjs.com/openapi/decorators) can be added using decorators. For simplification, openAPI decorators should define a type and if a property is required, while additional decorators can be used from class-validator to validate content.

## Mapping

It is forbidden, to directly pass a DTO to a use-case or return an Entity (or other use-case result) via REST. In-between a mapper must transform the given data, to protect the logic layer from outside implications.

The use of a mapper gives us the guarantee, that

- no additional data beside the known properties is published.
  - A plain object might contain more properties than defined in TS-interfaces.
    Sample: All school properties are published while only name & id are intended to be published.
- the API definition is complete
