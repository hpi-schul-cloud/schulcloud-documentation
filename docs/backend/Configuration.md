# ConfigurationModule Usage Guide

The `ConfigurationModule` provides a flexible and type-safe way to manage application configuration in your NestJS project. It supports environment variables, validation, and custom decorators for easy access to configuration values.

## 1. Creating a Configuration Class

Define a class to represent your configuration. Use the `@ConfigProperty` decorator to mark properties that should be loaded from environment variables or other sources:

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

---

**Summary:**
- Create a config class with properties.
- Use `@Configuration` to mark it as a config class.
- Use `@ConfigProperty` to mark config values.
- Register your config class as a provider.
- Inject and use it in your services.
- Set values via environment variables.
- Optionally, add validation for safety.
