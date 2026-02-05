# ConfigurationModule Usage Guide

The `ConfigurationModule` provides a flexible and type-safe way to manage application configuration in your NestJS project. It supports environment variables, validation, and custom decorators for easy access to configuration values.

## 1. Creating a Configuration Class

Define a class to represent your configuration in your module with `@Configuration()`. Use the `@ConfigProperty` decorator to mark properties that should be loaded from environment variables or other sources:

```typescript
import { ConfigProperty, Configuration } from '@infra/configuration';

export const MY_FEATURE_CONFIG = 'MY_FEATURE_CONFIG';

@Configuration()
export class MyFeatureConfig {
  @IsBoolean()
  @StringToBoolean()
  @ConfigProperty('MY_FEATURE_ENABLED')
  public readonly enabled!: boolean;

  @IsNumber()
  @StringToNumber()
  @ConfigProperty('MY_FEATURE_TIMEOUT')
  public readonly timeout = 3000;
}
```

## 2. Registering the ConfigurationModule

Import and add the `ConfigurationModule` to your feature or root module:

```typescript
import { ConfigurationModule } from '@infra/configuration';
import { MyFeatureConfig, MY_FEATURE_CONFIG } from './my-feature.config';

@Module({
  imports: [ConfigurationModule.register(MY_FEATURE_CONFIG, MyFeatureConfig)],
})
export class AppModule {}
```

## 3. Injecting and Using the Configuration

Inject your configuration class into services or controllers as needed:

```typescript
import { Injectable } from '@nestjs/common';
import { MyFeatureConfig, MY_FEATURE_CONFIG } from './my-feature.config';

@Injectable()
export class MyFeatureService {
  constructor(@Inject(MY_FEATURE_CONFIG) private readonly config: MyFeatureConfig) {}

  doSomething() {
    if (this.config.enabled) {
      // ...
    }
  }
}
```

## 4. Environment Variables

Set environment variables in your `.env` file or process environment:

```
MY_FEATURE_ENABLED=true
MY_FEATURE_TIMEOUT=5000
```

## 5. Validation / Transformation

You can use class-validator decorators (like `@IsBoolean`, `@IsNumber`) and transformation decorators (like `@StringToBoolean`, `@StringToNumber`) to ensure that configuration values are correctly typed and validated.

## 6. PublicApiConfig Pattern

The `PublicApiConfig` pattern allows modules to expose their configuration values to the public API endpoint `/config/public`. This is useful for client applications that need to know about certain feature flags or configuration values.

### 6.1. Creating a PublicApiConfig Interface

Create a separate configuration class that contains only the properties you want to expose publicly:

```typescript
// my-feature.config.ts
import { ConfigProperty, Configuration } from '@infra/configuration';
import { StringToBoolean } from '@shared/controller/transformer';
import { IsBoolean } from 'class-validator';

export const MY_FEATURE_PUBLIC_API_CONFIG_TOKEN = 'MY_FEATURE_PUBLIC_API_CONFIG_TOKEN';

@Configuration()
export class MyFeaturePublicApiConfig {
  @ConfigProperty('FEATURE_MY_FEATURE_ENABLED')
  @IsBoolean()
  @StringToBoolean()
  public featureMyFeatureEnabled = false;
}

// Optional: Extend for full configuration with private settings
export const MY_FEATURE_CONFIG_TOKEN = 'MY_FEATURE_CONFIG_TOKEN';

@Configuration()
export class MyFeatureConfig extends MyFeaturePublicApiConfig {
  @ConfigProperty('MY_FEATURE_PRIVATE_KEY')
  @IsString()
  public privateKey!: string; // This won't be exposed publicly
}
```

### 6.2. Export from Module Index

Export your PublicApiConfig from your module's index file:

```typescript
// modules/my-feature/index.ts
export { MY_FEATURE_PUBLIC_API_CONFIG_TOKEN, MyFeaturePublicApiConfig } from './my-feature.config';
export { MyFeatureModule } from './my-feature.module';
```

### 6.3. Register in API Module

Register the PublicApiConfig in your module's API module (if you have one):

```typescript
// my-feature-api.module.ts
import { ConfigurationModule } from '@infra/configuration';
import { MY_FEATURE_PUBLIC_API_CONFIG_TOKEN, MyFeaturePublicApiConfig } from './my-feature.config';

@Module({
  imports: [
    ConfigurationModule.register(MY_FEATURE_PUBLIC_API_CONFIG_TOKEN, MyFeaturePublicApiConfig),
  ],
})
export class MyFeatureApiModule {}
```

### 6.4. Adding to ConfigResponse

To make your module's configuration available through the public config API, you need to modify several files:

#### Step 1: Add Import to config.response.ts

Add the import for your PublicApiConfig to `apps/server/src/modules/server/api/dto/config.response.ts`:

```typescript
import { MyFeaturePublicApiConfig } from '@modules/my-feature';
```

#### Step 2: Add Properties to ConfigResponse Class

Add the properties you want to expose to the `ConfigResponse` class:

```typescript
export class ConfigResponse {
  // ... existing properties ...

  @ApiProperty()
  FEATURE_MY_FEATURE_ENABLED: boolean;

  // ... rest of properties ...
}
```

#### Step 3: Add to Constructor Type and Assignment

Update the constructor parameter type and assignment:

```typescript
export class ConfigResponse {
  constructor(
    config: ServerConfig &
      VideoConferencePublicApiConfig &
      // ... other existing PublicApiConfigs &
      MyFeaturePublicApiConfig // Add your config here
  ) {
    // ... existing assignments ...
    this.FEATURE_MY_FEATURE_ENABLED = config.featureMyFeatureEnabled;
    // ... rest of assignments ...
  }
}
```

#### Step 4: Update ServerUc

Add your config to the `ServerUc` constructor and getConfig method:

```typescript
@Injectable()
export class ServerUc {
  constructor(
    // ... existing configs ...
    @Inject(MY_FEATURE_PUBLIC_API_CONFIG_TOKEN) 
    private readonly myFeatureConfig: MyFeaturePublicApiConfig
  ) {}

  public getConfig(): ConfigResponse {
    const configDto = ConfigResponseMapper.mapToResponse(
      this.config,
      // ... existing configs ...
      this.myFeatureConfig
    );

    return configDto;
  }
}
```

#### Step 5: Update ConfigResponseMapper

Update the `ConfigResponseMapper`:

```typescript
export class ConfigResponseMapper {
  public static mapToResponse(
    serverConfig: ServerConfig,
    // ... existing configs ...
    myFeatureConfig: MyFeaturePublicApiConfig
  ): ConfigResponse {
    const configResponse = new ConfigResponse({
      ...serverConfig,
      // ... existing configs ...
      ...myFeatureConfig,
    });

    return configResponse;
  }
}
```

### 6.5. Best Practices for PublicApiConfig

1. **Only expose necessary values**: Don't include sensitive information like API keys or secrets
2. **Use descriptive names**: Follow the pattern `FEATURE_[MODULE]_[FEATURE]_ENABLED`
3. **Consistent typing**: Use boolean for feature flags, strings for URLs, etc.
4. **Documentation**: Add `@ApiProperty()` decorators with descriptions for Swagger documentation
5. **Default values**: Provide sensible defaults for all configuration properties

---

**Summary:**
- Create a config class with properties.
- Use `@Configuration` to mark it as a config class.
- Use `@ConfigProperty` to mark config values.
- Register your config class as a provider.
- Inject and use it in your services.
- Set values via environment variables.
- Optionally, add validation for safety.
- **For public API exposure**: Create a separate `PublicApiConfig` class and integrate it into the `ConfigResponse` system.