"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[9539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},l="Colors",i={unversionedId:"nuxt-client/Colors",id:"nuxt-client/Colors",title:"Colors",description:"In the Material Design system (the foundation of our component library), colors and color schemes are used to create a visual hierarchy, direct focus, and enhance the user experience.",source:"@site/docs/nuxt-client/7_Colors.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/Colors",permalink:"/docs/nuxt-client/Colors",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/7_Colors.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Accessibility (A11y)",permalink:"/docs/nuxt-client/Accessibility"},next:{title:"Identifying and Resolving Circular Dependencies",permalink:"/docs/nuxt-client/IdentifyingAndResolvingCircularDependencies"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Color Classes",id:"color-classes",level:3},{value:"Examples",id:"examples",level:4},{value:"Use Colors in (S)CSS",id:"use-colors-in-scss",level:3},{value:"Examples",id:"examples-1",level:4},{value:"&quot;On-Surface&quot; and &quot;On-Background&quot; Colors",id:"on-surface-and-on-background-colors",level:3},{value:"Definition Of Custom Colors",id:"definition-of-custom-colors",level:2},{value:"Rules",id:"rules",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"colors"},"Colors"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://m2.material.io/design/color/the-color-system.html"},"Material Design system")," (the foundation of our component library), colors and color schemes are used to create a visual hierarchy, direct focus, and enhance the user experience."),(0,o.kt)("p",null,"You can find our custom defined theme colors under ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/themes/base-vuetify.options.ts")," and their overwrites per theme in ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/themes/<theme_name>/vuetify.options.ts"),"."),(0,o.kt)("p",null,"You can find the colors provided by Vuetify ",(0,o.kt)("a",{parentName:"p",href:"https://vuetifyjs.com/en/styles/colors/#colors"},"here"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"color-classes"},"Color Classes"),(0,o.kt)("p",null,"All colors defined by Vuetify or in our Vuetify options generate CSS classes you can use. To apply a color variant like ",(0,o.kt)("inlineCode",{parentName:"p"},"lighten-1"),", add it to the color like ",(0,o.kt)("inlineCode",{parentName:"p"},"grey-lighten-1"),".\nBackgrounds have the ",(0,o.kt)("inlineCode",{parentName:"p"},"bg-"),"prefix and texts the ",(0,o.kt)("inlineCode",{parentName:"p"},"text-"),"prefix."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Using a color from Vuetify's color palette:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="bg-blue">\n  Blue background\n</div>\n')),(0,o.kt)("p",null,"Using a color defined in our vuetify options as text color:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p class="text-red">\n  Text has a red color\n</p>\n')),(0,o.kt)("p",null,"To use a variant of a color, you have to add the name of the variant seperated by hyphens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p class="text-red-darken-1">\n   Text has a darken variant of the red color\n</p>\n')),(0,o.kt)("h3",{id:"use-colors-in-scss"},"Use Colors in (S)CSS"),(0,o.kt)("p",null,"For colors defined in our Vuetify options, Vuetify generates CSS variables.\nNow, custom properties are an rgb list, so we need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"rgba()")," to access them."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".alert {\n  background-color: rgba(var(--v-theme-primary-lighten-1));\n  color: rgba(var(--v-theme-primary));\n}\n")),(0,o.kt)("p",null,"In Vuetify 2, we could only use hex values without the alpha property.\nWith Vuetify 3, it's now possible:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".example{\n  background-color: rgba(var(--v-theme-primary), 0.12);\n}\n")),(0,o.kt)("p",null,"Colors from Vuetify's colors palette (as of now) do not get generated as CSS variables. You will need to access them with ",(0,o.kt)("inlineCode",{parentName:"p"},"map-get"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".alert {\n  background-color: map-get($grey, base);\n  color: map-get($blue, lighten-3);\n}\n")),(0,o.kt)("h3",{id:"on-surface-and-on-background-colors"},'"On-Surface" and "On-Background" Colors'),(0,o.kt)("p",null,'"On" colors are important for making text, icons, and other elements recognizable and readable on various backgrounds.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"on-surface"),": Used for text, icons, and other elements that appear on top of a surface. Surfaces can include components like cards, dialogs, and menus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"on-background"),": Used for text, icons, and other elements that appear on the primary background of an application or a component"))),(0,o.kt)("p",null,"We override the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"on-surface")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"on-background")," vuetify colors in our vuetify options and define them for each theme."),(0,o.kt)("h2",{id:"definition-of-custom-colors"},"Definition Of Custom Colors"),(0,o.kt)("p",null,"You can define more custom colors in our vuetify options like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'...\ncolors: {\n  info: "#0a7ac9",\n  "icon-btn": colors.grey.darken3,\n  "on-surface": "#0f3551",\n}\n...\n')),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Talk to UX before introducing a new color"),(0,o.kt)("li",{parentName:"ul"},"Do not overwrite vuetify colors"),(0,o.kt)("li",{parentName:"ul"},"Use a semantic name to represent the use case"),(0,o.kt)("li",{parentName:"ul"},"Prefer usage via ",(0,o.kt)("inlineCode",{parentName:"li"},"map-get")," over new color definition, unless you introduce a new color"),(0,o.kt)("li",{parentName:"ul"},"Either define style in template or in SCSS")))}d.isMDXComponent=!0}}]);