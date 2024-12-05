"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[2024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,h=p["".concat(a,".").concat(d)]||p[d]||y[d]||c;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={},i="Architecture",s={unversionedId:"syncronizations/TSP/Architecture",id:"syncronizations/TSP/Architecture",title:"Architecture",description:"TspSyncStrategy",source:"@site/docs/syncronizations/TSP/Architecture.md",sourceDirName:"syncronizations/TSP",slug:"/syncronizations/TSP/Architecture",permalink:"/docs/syncronizations/TSP/Architecture",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/syncronizations/TSP/Architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical details",permalink:"/docs/services/tldraw/Technical details"},next:{title:"How it works",permalink:"/docs/syncronizations/TSP/How it works"}},a={},l=[{value:"TspSyncStrategy",id:"tspsyncstrategy",level:2}],u={toc:l},p="wrapper";function y(e){let{components:t,...c}=e;return(0,o.kt)(p,(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("h2",{id:"tspsyncstrategy"},"TspSyncStrategy"),(0,o.kt)("p",null,'This strategy handles the sync of schools, students, teachers and classes from TSP and replaces both the legacy TspBaseSyncer and TspSchoolSyncer. It responds to the target "tsp".'),(0,o.kt)("p",null,"The flow looks like this (some of the logic for syncing is done in the provisioning strategy which is shared with the login):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow of the TSP sync strategy",src:r(9631).Z,width:"629",height:"1063"})))}y.isMDXComponent=!0},9631:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tsp_sync_strategy-8b6e7d1d1d0d9bdcb0ad45012f279b99.png"}}]);