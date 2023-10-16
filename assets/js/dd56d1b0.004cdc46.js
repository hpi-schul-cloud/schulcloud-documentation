"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,y=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},o="Accessibility (A11y)",s={unversionedId:"nuxt-client/Accessibility",id:"nuxt-client/Accessibility",title:"Accessibility (A11y)",description:"We want to make sure that our product can be used by anyone.",source:"@site/docs/nuxt-client/6_Accessibility.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/Accessibility",permalink:"/docs/nuxt-client/Accessibility",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/6_Accessibility.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Writing Tests",permalink:"/docs/nuxt-client/WritingTests"},next:{title:"Colors",permalink:"/docs/nuxt-client/Colors"}},c={},l=[{value:"W3C Web Accessibility Initiative (WAI)",id:"w3c-web-accessibility-initiative-wai",level:2},{value:"Vuetify and Vue",id:"vuetify-and-vue",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accessibility-a11y"},"Accessibility (A11y)"),(0,r.kt)("p",null,"We want to make sure that our product can be used by anyone.\nThis includes people with disabilities as well as people that have a slow connection, outdated or broken hardware or people that just have an unfavorable environment."),(0,r.kt)("h2",{id:"w3c-web-accessibility-initiative-wai"},"W3C Web Accessibility Initiative (WAI)"),(0,r.kt)("p",null,"The WAI develops strategies, standards, resources to make the web accessibile."),(0,r.kt)("p",null,"An introduction to Accessibility can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/fundamentals/accessibility-intro/"},"Introduction to Web Accessibilty")),(0,r.kt)("p",null,"The WAI ARIA is the Acessible Rich Internet Applications suite of web standards. It makes Web content and Web applications more accessible with adding attributes to identify features for user interaction and enable e.g. keyboard users to move among regions."),(0,r.kt)("p",null,"A recommended approach using WAI-ARIA roles, states and properties can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/"},"ARIA Authoring Practices Guide (APG)")),(0,r.kt)("h2",{id:"vuetify-and-vue"},"Vuetify and Vue"),(0,r.kt)("p",null,"We want to use Vuetfiy Components in our project. They provide key interaction for all mouse-based-actions and utilize HTML5 semantic elements where applicable."),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://vuetifyjs.com/en/features/accessibility/"},"Vuetify A11y")),(0,r.kt)("p",null,"There is also a Accessibility Chapter in the Best Practices of the Vue Docs: ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/best-practices/accessibility.html"},"Vue A11y")),(0,r.kt)("p",null,"// TODO: link to good tutorial on how to test a11n\n// REMINDER: If we establish special a11n-components and/or tools - they should be described here"))}d.isMDXComponent=!0}}]);