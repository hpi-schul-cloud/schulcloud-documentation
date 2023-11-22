"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[7022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="How To",s={unversionedId:"nuxt-client/HowTo",id:"nuxt-client/HowTo",title:"How To",description:"Collection of instructions on how to do certain things:",source:"@site/docs/nuxt-client/4_HowTo.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/HowTo",permalink:"/docs/nuxt-client/HowTo",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/4_HowTo.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Git Conventions",permalink:"/docs/nuxt-client/GitConventions"},next:{title:"Writing Tests",permalink:"/docs/nuxt-client/WritingTests"}},l={},p=[{value:"Feature Flags <a name='FeatureFlags'></a>",id:"feature-flags-",level:2},{value:"Using generated API and it&#39;s types <a name='UsinggeneratedAPIanditstypes'></a>",id:"using-generated-api-and-its-types-",level:2},{value:"Regenerating the clients",id:"regenerating-the-clients",level:3},{value:"Using the generated api",id:"using-the-generated-api",level:3},{value:"User-Permissions on Pages <a name='User-PermissionsonPages'></a>",id:"user-permissions-on-pages-",level:2},{value:"Exception handling <a name='Exceptionhandling'></a>",id:"exception-handling-",level:2},{value:"inject - fallback throwing an error <a name='inject-fallbackthrowinganerror'></a>",id:"inject---fallback-throwing-an-error-",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to"},"How To"),(0,a.kt)("p",null,"Collection of instructions on how to do certain things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#FeatureFlags"},"Feature Flags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#UsinggeneratedAPIanditstypes"},"Using generated API and it's types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#User-PermissionsonPages"},"User-Permissions on Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Exceptionhandling"},"Exception handling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inject-fallbackthrowinganerror"},"inject - fallback throwing an error"))),(0,a.kt)("h2",{id:"feature-flags-"},"Feature Flags ",(0,a.kt)("a",{name:"FeatureFlags"})),(0,a.kt)("p",null,"If there is a new functionality that should only be available on certain systems, we introduce new FEATURE-Flags into the SchulCloud-Backend and into the dof-repository, that contains the configuration for all our instances."),(0,a.kt)("p",null,"Our Vue-Frontend requests all FEATURE-flags and provides global access to them by using this code (example):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},'import { envConfigModule } from "@/store";\nif (envConfigModule.getEnv.FEATURE_COPY_SERVICE_ENABLED) {\n    ...\n}\n')),(0,a.kt)("h2",{id:"using-generated-api-and-its-types-"},"Using generated API and it's types ",(0,a.kt)("a",{name:"UsinggeneratedAPIanditstypes"})),(0,a.kt)("p",null,"We are using a generator script to create classes to access the Schulcloud-Backend-API - V3 (so Legacy-Backend endpoints (aka V1) are not covered).\nThese generated classes and methods internally use axios to request data and use generated types - both for the input to the methods and for the returned types."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"HINT")),(0,a.kt)("p",{parentName:"blockquote"},"Please use the generated types in your stores and do not redefine the same types. This way consistency between Server and Api-Access stays stable.")),(0,a.kt)("h3",{id:"regenerating-the-clients"},"Regenerating the clients"),(0,a.kt)("p",null,"Only if the server-api or the filestore-api has changed, you need to regenerate them using the following npm-scripts:"),(0,a.kt)("p",null,"For generating the files to access the ",(0,a.kt)("strong",{parentName:"p"},"server-api")," please use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run generate-client:server\n")),(0,a.kt)("p",null,"The same is implemented for generating the backend-api to our filestore-backend."),(0,a.kt)("p",null,"For generating the files to access the ",(0,a.kt)("strong",{parentName:"p"},"filestore-api")," please use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run generate-client:filestorage\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hint")),(0,a.kt)("p",{parentName:"blockquote"},"For regenerating the clients you need an up-to-date running backend-server running in your environment.")),(0,a.kt)("h3",{id:"using-the-generated-api"},"Using the generated api"),(0,a.kt)("p",null,"The generated APIs can easily be used. Examples can be seen in any current store-implementation - like here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},'src/store/share-course.ts:\n\nimport {\n ShareTokenApiFactory,\n ShareTokenApiInterface,\n ShareTokenBodyParams,\n ShareTokenBodyParamsParentTypeEnum,\n ShareTokenResponse,\n} from "../serverApi/v3/api";\n\n...\n\nexport default class ShareCourseModule extends VuexModule {\n ...\n private get shareApi(): ShareTokenApiInterface {\n  return ShareTokenApiFactory(undefined, "v3", $axios);\n }\n\n @Action\n async createShareUrl(\n  payload: SharePayload\n ): Promise<ShareTokenResponse | undefined> {\n  const shareTokenPayload: ShareTokenBodyParams = {\n   parentType: ShareTokenBodyParamsParentTypeEnum.Courses,\n   parentId: this.courseId,\n   expiresInDays: payload.hasExpiryDate ? 21 : null,\n   schoolExclusive: payload.isSchoolInternal,\n  };\n  ...\n  const shareTokenResult =\n   await this.shareApi.shareTokenControllerCreateShareToken(\n    shareTokenPayload\n   );\n  ...\n }\n    ...\n}\n\n')),(0,a.kt)("h2",{id:"user-permissions-on-pages-"},"User-Permissions on Pages ",(0,a.kt)("a",{name:"User-PermissionsonPages"})),(0,a.kt)("p",null,"The permissions are controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"createPermissionGuard")," middleware method that receives two parameters. The first parameter should contain an array of the ",(0,a.kt)("inlineCode",{parentName:"p"},"userPermission")," that is required to reach the page. The second parameter is an optional fallback route. If the second parameter isn't provided and the user has no permission to reach the page, an error page ",(0,a.kt)("inlineCode",{parentName:"p"},"(401)")," is shown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Typescript"},'// src/router/routes.ts\n\n// with a fallback route\n{\n path: "/your/route",\n component: () => import("../pages/your.page.vue"),\n name: "yourRouteName",\n beforeEnter: createPermissionGuard(["ADMIN_VIEW"], "/yourFallBackRoute"),\n},\n\n// without a fallback,\n// it shows a \'401\' file if the user doesn\'t have permissions\n{\n path: "/your/route",\n component: () => import("../pages/your.page.vue"),\n name: "yourRouteName",\n beforeEnter: createPermissionGuard(["ADMIN_VIEW", "SCHOOL_EDIT"]),\n},\n')),(0,a.kt)("h2",{id:"exception-handling-"},"Exception handling ",(0,a.kt)("a",{name:"Exceptionhandling"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useApplicationError")," is a composable providing a typed factory function for creating application errors.\nA global error handler for putting application errors takes those and puts them into a store and a global error page will display them."),(0,a.kt)("p",null,"Exceptions should be thrown using them - like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},'// src/pages/user-migration/UserMigration.page.vue\nimport { useApplicationError } from "@/composables/application-error.composable";\n\nconst { createApplicationError } = useApplicationError();\nthrow createApplicationError(HttpStatusCode.BadRequest);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},'// src/router/guards/permission.guard.ts\nimport { useApplicationError } from "@/composables/application-error.composable";\nimport { applicationErrorModule } from "@/store";\n\nconst { createApplicationError } = useApplicationError();\napplicationErrorModule.setError(createApplicationError(401));\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Also look here: ",(0,a.kt)("a",{parentName:"em",href:"https://docs.dbildungscloud.de/x/joL4DQ"},"Meeting Notes 2022-11-25"))),(0,a.kt)("h2",{id:"inject---fallback-throwing-an-error-"},"inject - fallback throwing an error ",(0,a.kt)("a",{name:"inject-fallbackthrowinganerror"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We want to provide a simple factory function that produces a unique, identifiable error, if an inject fails and we want to avoid adding code to your TypeScript-components only to prevent linter errors.\nThe topic will be implemented with this ticket: ",(0,a.kt)("a",{parentName:"p",href:"https://ticketsystem.dbildungscloud.de/browse/BC-2813"},"Jira - BC-2813"),". It contains a lot of details on that issue."),(0,a.kt)("p",{parentName:"blockquote"},"... Details should be added here. soon...")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Also look here: Frontend Arc Group: Meeting Notes 2022-12-02")))}d.isMDXComponent=!0}}]);