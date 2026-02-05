# ConfigurationModule Usage Guide

The `ConfigurationModule` provides a flexible and type-safe way to manage application configuration. It supports environment variables, validation, and custom decorators for easy access to configuration values.

The ConfigurationModule offers several key advantages over traditional configuration approaches:

- **Module Encapsulation Principle**: Environment variables should be defined in the modules they belong to (e.g., board features in `board.config.ts`, team features in `team.config.ts`). This ensures better encapsulation, clearer ownership, and easier maintenance. Only add general server-wide configuration here that doesn't belong to any specific module.
- **Type Safety**: Configuration values are strongly typed with TypeScript, preventing runtime errors caused by type mismatches.
- **Validation**: Uses class-validator decorators (`@IsBoolean`, `@IsString`, `@IsUrl`, etc.) to ensure configuration values meet expected formats at runtime.
- **Transformation**: Automatically converts environment variables (e.g., string "true"/"false" to boolean) using transformers like `@StringToBoolean()`.
- **Default Values**: Properties can have sensible defaults, reducing the number of required environment variables.
- **Discoverability**: All configuration options are clearly visible in one place with their types, making it easy for developers to understand what can be configured.
- **Maintainability**: Changes to configuration structure are easier to track and refactor across the codebase.

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

The project uses multiple environment variable files to manage different deployment scenarios. Set environment variables in your `.env` file or process environment:

```
MY_FEATURE_ENABLED=true
MY_FEATURE_TIMEOUT=5000
```

### 4.1. Environment File Types

The ConfigurationModule supports multiple environment files for different purposes:

#### `.env.default`
- **Purpose**: Contains default values for all configuration properties
- **When to use**: Provides a template for developers and baseline configuration
- **Content**: Safe default values that work for local development
- **Committed**: Yes, this file is committed to version control

```bash
# Example from .env.default
SESSION_VALKEY__MODE=in-memory
SC_DOMAIN=localhost
ALERT_STATUS_URL=https://status.dbildungscloud.dev/
```

#### `.env.test`
- **Purpose**: Configuration specifically for test environments
- **When to use**: Automatically loaded during test execution
- **Content**: Test-specific values (test databases, mock endpoints, simplified settings)
- **Committed**: Yes, safe for version control as it contains only test configuration

```bash
# Example from .env.test
AES_KEY=test-key-with-32-characters-long
ADMIN_API__ALLOWED_API_KEYS=onlyusedintests:thisistheadminapitokeninthetestconfig
```

#### `.env` (local)
- **Purpose**: Your personal development environment overrides
- **When to use**: Override defaults with your local development settings
- **Content**: Personal API keys, local service URLs, custom feature flags
- **Committed**: This file is in `.gitignore` and not committed  

```bash
# Example .env (create this file locally)
MY_FEATURE_ENABLED=true
DATABASE_URL=postgresql://localhost:5432/mylocal_db
API_KEY=your-personal-development-key
```

### 4.2. Environment File Priority

The configuration system loads environment files in the following priority order (higher priority overrides lower):

1. **Process environment variables** (highest priority)
2. **`.env`** (local development overrides)
3. **`.env.test`** (only during test execution)
4. **`.env.default`** (baseline defaults, lowest priority)

### 4.3. Best Practices

1. **Never commit sensitive data**: Use `.env` for personal credentials and secrets
2. **Use descriptive defaults**: `.env.default` should have safe, working default values  
3. **Test isolation**: `.env.test` should ensure tests don't affect other environments
4. **Document required variables**: Add comments in `.env.default` explaining required configurations

## 5. Validation / Transformation

The ConfigurationModule supports comprehensive validation and transformation using class-validator decorators and custom transformers. This ensures that configuration values are correctly typed, validated, and transformed from environment variable strings.

### 5.1. Basic Type Validation

Use these decorators for basic type validation:

```typescript
import { IsBoolean, IsNumber, IsString, IsInt } from 'class-validator';
import { StringToBoolean, StringToNumber } from '@shared/controller/transformer';

@Configuration()
export class MyConfig {
  @IsBoolean()
  @StringToBoolean()
  @ConfigProperty('FEATURE_ENABLED')
  public featureEnabled = false;

  @IsNumber()
  @StringToNumber()
  @ConfigProperty('TIMEOUT_MS')
  public timeoutMs = 5000;

  @IsString()
  @ConfigProperty('API_KEY')
  public apiKey!: string;

  @IsInt()
  @StringToNumber()
  @ConfigProperty('MAX_CONNECTIONS')
  public maxConnections = 100;
}
```

### 5.2. URL Validation

For URL properties, use `@IsUrl()` with appropriate options:

```typescript
import { IsUrl } from 'class-validator';

@Configuration()
export class ServiceConfig {
  @IsUrl({ require_tld: false }) // Allow localhost URLs
  @ConfigProperty('SERVICE_URL')
  public serviceUrl = 'http://localhost:3000';

  @IsUrl() // Require valid TLD for production URLs
  @ConfigProperty('EXTERNAL_API_URL')
  public externalApiUrl!: string;
}
```

### 5.3. Optional Properties

Mark properties as optional when they may not be provided:

```typescript
import { IsOptional, IsString } from 'class-validator';

@Configuration()
export class OptionalConfig {
  @IsOptional()
  @IsString()
  @ConfigProperty('OPTIONAL_SETTING')
  public optionalSetting?: string;
}
```

### 5.4. Conditional Validation

Use `@ValidateIf()` to validate properties only when certain conditions are met:

```typescript
import { ValidateIf, IsString, IsBoolean } from 'class-validator';
import { StringToBoolean } from '@shared/controller/transformer';

@Configuration()
export class ConditionalConfig {
  @IsBoolean()
  @StringToBoolean()
  @ConfigProperty('FEATURE_ENABLED')
  public featureEnabled = false;

  @ValidateIf((config: ConditionalConfig) => config.featureEnabled)
  @IsString()
  @ConfigProperty('FEATURE_API_KEY')
  public featureApiKey?: string;

  @ValidateIf((config: ConditionalConfig) => config.featureEnabled)
  @IsUrl({ require_tld: false })
  @ConfigProperty('FEATURE_SERVICE_URL')
  public featureServiceUrl?: string;
}
```

### 5.5. Enum Validation

Validate against specific enum values:

```typescript
import { IsEnum } from 'class-validator';

enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

@Configuration()
export class LoggingConfig {
  @IsEnum(LogLevel)
  @ConfigProperty('LOG_LEVEL')
  public logLevel = LogLevel.INFO;
}
```

### 5.6. Array Validation

For array properties:

```typescript
import { IsArray, IsString } from 'class-validator';

@Configuration()
export class ArrayConfig {
  @IsArray()
  @IsString({ each: true })
  @ConfigProperty('ALLOWED_ORIGINS')
  public allowedOrigins: string[] = ['http://localhost:3000'];
}
```

## 6. PublicApiConfig Pattern

The `PublicApiConfig` pattern allows modules to expose their configuration values to the public API endpoint `/config/public`. This is useful for client applications that need to know about certain feature flags or configuration values.

### 6.1. Passing Configuration to Vue Client

The PublicApiConfig pattern serves a specific purpose: exposing environment values to the Vue client through a public API endpoint. This is the only existing and recommended way to pass environment configurations to the new Vue client.

**⚠️ Security Warning**: Be extremely careful about what you expose! Secrets should never be exposed through this endpoint as they are readable in the browser and in request/response data.

#### Available Endpoints

The configuration is exposed through these public endpoints:

- **Main config endpoint**: `http://{{HOST}}:{{PORT}}/api/v3/config/public`
- **Files config endpoint**: `http://{{HOST}}:{{PORT}}/api/v3/files/config/public`

#### Implementation

The endpoints are implemented in the [ServerConfigController](https://github.com/hpi-schul-cloud/schulcloud-server/blob/main/apps/server/src/modules/server/api/server-config.controller.ts), which aggregates all registered PublicApiConfig classes and exposes them through the `/config/public` endpoint.

#### Usage in Vue Client

The Vue client fetches configuration from these endpoints during application startup to determine:
- Feature flags and enabled functionality
- API endpoints and service URLs (non-sensitive)
- UI configuration and display options
- Locale and internationalization settings

This approach ensures that the Vue client can adapt its behavior based on the server's configuration without requiring environment-specific builds.

### 6.2. Creating a PublicApiConfig Interface

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

### 6.3. Export from Module Index

Export your PublicApiConfig from your module's index file:

```typescript
// modules/my-feature/index.ts
export { MY_FEATURE_PUBLIC_API_CONFIG_TOKEN, MyFeaturePublicApiConfig } from './my-feature.config';
export { MyFeatureModule } from './my-feature.module';
```

### 6.4. Register in Server Module

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

### 6.5. Adding to ConfigResponse

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

### 6.6. Best Practices for PublicApiConfig

1. **Only expose necessary values**: Don't include sensitive information like API keys or secrets
2. **Use descriptive names**: Follow the pattern `FEATURE_[MODULE]_[FEATURE]_ENABLED`
3. **Consistent typing**: Use boolean for feature flags, strings for URLs, etc.
4. **Documentation**: Add `@ApiProperty()` decorators with descriptions for Swagger documentation
5. **Default values**: Provide sensible defaults for all configuration properties

## 7. Best Practices

### 7.1 Module-Level Configuration
Each configuration class should be placed at the top level of its respective module whenever possible. This makes it easy to locate and manage module-specific settings.

```
src/modules/my-feature/
├── my-feature.config.ts     // ← Configuration at module root
├── my-feature.module.ts
├── index.ts
└── services/
    └── my-feature.service.ts
```

### 7.2 Infrastructure Module Pattern
Modules located in `apps/server/src/infra` should always receive their configuration from the outside as arguments to their `register()` function. This promotes reusability and decoupling.

```typescript
// Example from apps/server/src/infra/calendar/calendar.module.ts
@Module({})
export class CalendarModule {
  public static register(injectionToken: string, Constructor: new () => CalendarConfig): DynamicModule {
    return {
      module: CalendarModule,
      imports: [HttpModule, CqrsModule, LoggerModule, ConfigurationModule.register(injectionToken, Constructor)],
      providers: [CalendarMapper, CalendarService],
      exports: [CalendarService],
    };
  }
}
```

This pattern allows the consuming module to provide the appropriate configuration:

```typescript
// Usage in a business module
@Module({
  imports: [
    CalendarModule.register(MY_CALENDAR_CONFIG_TOKEN, MyCalendarConfig),
  ],
})
export class MyBusinessModule {}
```

### 7.3 Module Options Pattern

When an infrastructure module requires more than one injection token and constructor (i.e., multiple configuration dependencies), introduce a module options interface to keep the API clean and organized.

```typescript
// Example: apps/server/src/infra/tsp-client/types/module-options.ts
export interface TspClientModuleOptions {
  encryptionConfig: { configInjectionToken: string; configConstructor: new () => EncryptionConfig };
  tspClientConfig: { configInjectionToken: string; configConstructor: new () => TspClientConfig };
}
```

Use this options interface in your infrastructure module's register method:

```typescript
// Example: apps/server/src/infra/tsp-client/tsp-client.module.ts
@Module({})
export class TspClientModule {
  public static register(options: TspClientModuleOptions): DynamicModule {
    const { encryptionConfig, tspClientConfig } = options;
    return {
      module: TspClientModule,
      imports: [
        LoggerModule,
        OauthAdapterModule,
        EncryptionModule.register(encryptionConfig.configConstructor, encryptionConfig.configInjectionToken),
        ConfigurationModule.register(tspClientConfig.configInjectionToken, tspClientConfig.configConstructor),
      ],
      providers: [TspClientFactory],
      exports: [TspClientFactory],
    };
  }
}
```

This pattern provides several benefits:
- **Clean API**: Single parameter instead of multiple individual parameters
- **Type Safety**: All required configurations are defined in the interface
- **Maintainability**: Easy to add new configuration dependencies
- **Self-Documentation**: The interface clearly shows all required dependencies

## 8. Summary
- Create a config class with properties.
- Use `@Configuration` to mark it as a config class.
- Use `@ConfigProperty` to mark config values.
- Register your config class as a provider.
- Inject and use it in your services.
- Set values via environment variables.
- Optionally, add validation for safety.
- **For public API exposure**: Create a separate `PublicApiConfig` class and integrate it into the `ConfigResponse` system.