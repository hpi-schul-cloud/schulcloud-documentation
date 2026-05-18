---
sidebar_position: 5
---

# How To

Collection of instructions on how to do certain things:

## Feature Flags

If new functionality should only be available on certain systems, introduce a new
feature flag in the SchulCloud-Backend and in the dof-repository, which contains the
configuration for all instances.

The Vue-Frontend requests all feature flags and provides global access to them
(example):

```typescript
import { useEnvConfig } from "@data-env";
if (useEnvConfig().value.FEATURE_COPY_SERVICE_ENABLED) {
  // ...
}
```

## Using generated API and its types

A generator script is used to create classes to access the Schulcloud-Backend-API V3
(Legacy-Backend endpoints aka V1 are not covered). These generated classes and methods
internally use axios to request data, as well as generated types for both input and
return values.

### Regenerating the clients

Regenerate the clients only if one of the backend APIs has changed. The available
npm-scripts follow this pattern:

```shell
npm run generate-client:<api-key>
```

> **Hint**
>
> Regenerating the clients requires an up-to-date running backend-server in your environment.

### Using the generated API

The generated APIs are accessible via tsconfig path aliases:

| Alias | API |
|---|---|
| `@api-server` | Schulcloud-Backend V3 |
| `@api-file-storage` | File Storage Backend |
| `@api-fwu` | FWU |
| `@api-h5p` | H5P Editor |
| `@api-common-cartridge` | Common Cartridge |

Import directly from the alias and instantiate the factory with `$axios`:

```typescript
import { RoomApiFactory } from "@api-server";
import { $axios } from "@/utils/api";

const useRooms = () => {
  const { t } = useI18nGlobal();
  const roomApi = RoomApiFactory(undefined, "/v3", $axios);
  const { execute } = useSafeAxiosTask();

  const fetchRooms = async () => {
    const { result } = await execute(
            () => roomApi.roomControllerGetRooms(),
            t("common.notifications.errors.notLoaded", { type: t("common.labels.room") })
    );
    return result;
  };

  return { fetchRooms };
};
```

## User-Permissions on Pages

Page access is controlled by the `createPermissionGuard` middleware, which is applied
via `beforeEnter` in `src/router/routes.ts`. It receives two parameters:

- an array of required `Permission` values — the user must have all of them to access the page
- an optional fallback route — if omitted, the user is redirected to a `401` error page

```typescript
// routes.ts

export const routes: Readonly<RouteRecordRaw>[] = [
    // with a fallback route
    {
        path: "/your/route",
        component: () => import("@/pages/your.page.vue"),
        name: "your-route-name",
        beforeEnter: createPermissionGuard([Permission.ADMIN_VIEW], "/your-fallback-route"),
    },
    // without a fallback — shows a 401 page if the user lacks permissions
    {
        path: "/your/other-route",
        component: () => import("@/pages/your-other.page.vue"),
        name: "your-other-route-name",
        beforeEnter: createPermissionGuard([Permission.ADMIN_VIEW, Permission.SCHOOL_EDIT]),
    },
];
```

## Exception Handling

Errors should be communicated to the user via `notifyError`, using a translation key:

```typescript
notifyError("your.error.translation.key");
```

If it is necessary to redirect the user away from the current page to an error page, raise an application error instead:

```typescript
useAppStore().handleApplicationError(HttpStatusCode.Unauthorized, "components.board.error.401");
```
