# Access legacy Code

## Access Feathers Service from NestJS

The `FeathersModule` provides functionality to access legacy code. In order to introduce strong typing, it is necessary to write an adapter service for the feathers service you want to access. Place this adapter within your module, and use the `FeathersServiceProvider` to access the service you need

```TypeScript
// inside your module, import the FeathersModule
@Module({
    imports: [FeathersModule],
    providers: [MyFeathersServiceAdapter],
})
export class MyModule {}

// inside of your service, inject the FeathersServiceProvider
@Injectable()
export class MyFeathersServiceAdapter
{
    constructor(private feathersServiceProvider: FeathersServiceProvider) {}

    async get(): Promise<string[]>
    {
        const service = this.feathersServiceProvider.getService(`path`);
        const result = await service.get( /* ... */)

        return result;
    }
}
```

## Access NestJS injectable from Feathers

To access a NestJS service from a legacy Feathers service you need to make the NestJS service known to the Feathers service-collection in `main.ts`.

This possibility should not be used for new features in Feathers, but it can help if you want to refactor a Feathers service to NestJs although other Feathers services depend on it.

```TypeScript
    // main.ts
    async function bootstrap() {
        // (...)
        feathersExpress.services['nest-rocket-chat'] = nestApp.get(RocketChatService);
        // (...)
    }
```

Afterwards you can access it the same way as you access other Feathers services with
`app.service('/nest-rocket-chat');`
