"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[7975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||c;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,a=new Array(c);a[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<c;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const c={sidebar_position:9},a="Identifying and Resolving Circular Dependencies",o={unversionedId:"nuxt-client/IdentifyingAndResolvingCircularDependencies",id:"nuxt-client/IdentifyingAndResolvingCircularDependencies",title:"Identifying and Resolving Circular Dependencies",description:"What is a circular dependency?",source:"@site/docs/nuxt-client/8_IdentifyingAndResolvingCircularDependencies.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/IdentifyingAndResolvingCircularDependencies",permalink:"/docs/nuxt-client/IdentifyingAndResolvingCircularDependencies",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/8_IdentifyingAndResolvingCircularDependencies.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Colors",permalink:"/docs/nuxt-client/Colors"},next:{title:"Hints for Working",permalink:"/docs/nuxt-client/HintsForWorking"}},l={},d=[{value:"What is a circular dependency?",id:"what-is-a-circular-dependency",level:2},{value:"Resolving Circular Dependencies",id:"resolving-circular-dependencies",level:2},{value:"How to identify Circular Dependencies in Vue",id:"how-to-identify-circular-dependencies-in-vue",level:2}],s={toc:d},p="wrapper";function u(e){let{components:n,...c}=e;return(0,i.kt)(p,(0,r.Z)({},s,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"identifying-and-resolving-circular-dependencies"},"Identifying and Resolving Circular Dependencies"),(0,i.kt)("h2",{id:"what-is-a-circular-dependency"},"What is a circular dependency?"),(0,i.kt)("p",null,"Circular depencies are a common issue when working with barrel-files (index.ts)."),(0,i.kt)("p",null,"Let's look at a common dependency pattern:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Circular Import",src:t(8570).Z,width:"1250",height:"824"})),(0,i.kt)("p",null,"In this example there are two ",(0,i.kt)("strong",{parentName:"p"},"Building-Blocks")," (e.g. folders that have a barrel file) which depend on each other. Using the SharedComponent in both Building-Blocks will result in a circular dependency."),(0,i.kt)("p",null,"That basically means that the compiler can not resolve the order to load the Building-Blocks which causes an error."),(0,i.kt)("h2",{id:"resolving-circular-dependencies"},"Resolving Circular Dependencies"),(0,i.kt)("p",null,"The basic gist is: ",(0,i.kt)("strong",{parentName:"p"},"break the circle")," and separate the shared dependency in a separate module."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fixed Circular Import",src:t(501).Z,width:"904",height:"855"})),(0,i.kt)("p",null,"In this configuration the compiler can find an order to resolve the building-blocks correctly."),(0,i.kt)("h2",{id:"how-to-identify-circular-dependencies-in-vue"},"How to identify Circular Dependencies in Vue"),(0,i.kt)("p",null,"I recreated the first example error in Vue. When Vue tries to render ComponentA I see the following Error in the console:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error Message",src:t(6144).Z,width:"1149",height:"241"})),(0,i.kt)("p",null,"This can be quite hard to decipher on a first glance but it contains all the info we need to identify the root cause of the circular dependency."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error Message Explained",src:t(1160).Z,width:"1673",height:"482"})),(0,i.kt)("p",null,'Based on the info from the message we can learn that ComponentB "closed the circle" by importing SharedComponent. From there we can trace back to see where SharedComponent is exposed and why it depends on ComponentB. In this case it is because they are both imported in ComponentA.'),(0,i.kt)("p",null,"Keep in mind that the circular dependency can involve multiple building-blocks."))}u.isMDXComponent=!0},8570:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/circular_dependency_1-10d4169794cebf296865820873f735e8.png"},501:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/circular_dependency_2-5fd37037d2bcc5fc18a3905e517a9f6f.png"},6144:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/circular_dependency_3-dadf247ac040d82aeeaf6f27d77272e7.png"},1160:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/circular_dependency_4-5d7f63b9ffad7b598cd6dcd8716d5675.png"}}]);