"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[6012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},s="Getting Started",o={unversionedId:"e2e-system-tests/GettingStarted",id:"e2e-system-tests/GettingStarted",title:"Getting Started",description:"This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process.",source:"@site/docs/e2e-system-tests/0_GettingStarted.md",sourceDirName:"e2e-system-tests",slug:"/e2e-system-tests/GettingStarted",permalink:"/docs/e2e-system-tests/GettingStarted",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/e2e-system-tests/0_GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"e2e-system-tests",permalink:"/docs/category/e2e-system-tests"},next:{title:"Project Structure",permalink:"/docs/e2e-system-tests/ProjectStructure"}},l={},p=[{value:"1. Pre-requisites",id:"1-pre-requisites",level:2},{value:"2. Cloning the Repository",id:"2-cloning-the-repository",level:2},{value:"3. Setting Up Environment Configuration",id:"3-setting-up-environment-configuration",level:2},{value:"4. Installing Dependencies",id:"4-installing-dependencies",level:2},{value:"5. Running Cypress Tests",id:"5-running-cypress-tests",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-pre-requisites"},"1. Pre-requisites"),(0,i.kt)("p",null,"Before getting started, ensure the following tools are installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js: Download Node v18"),(0,i.kt)("li",{parentName:"ul"},"Git: Download Git"),(0,i.kt)("li",{parentName:"ul"},"Browser: (Recommended: Microsoft Edge) Download Edge Browser"),(0,i.kt)("li",{parentName:"ul"},"IDE: Choose any IDE (Recommended: VS Code)"),(0,i.kt)("li",{parentName:"ul"},"Optional Tools: GitHub Desktop App"),(0,i.kt)("li",{parentName:"ul"},"Recommended VS Code Extensions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cucumber (Gherkin) Full Support"),(0,i.kt)("li",{parentName:"ul"},"EditorConfig"),(0,i.kt)("li",{parentName:"ul"},"Prettier")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-cloning-the-repository"},"2. Cloning the Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To get the project files locally, follow these steps:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <repository-url>\ncd <repository-folder>\n")))),(0,i.kt)("p",null,"Make sure you have access to the repository using your organization's credentials."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-setting-up-environment-configuration"},"3. Setting Up Environment Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Duplicate the ",(0,i.kt)("inlineCode",{parentName:"p"},"template.env.json")," file located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"env_variables")," directory:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rename the duplicated file to ",(0,i.kt)("inlineCode",{parentName:"li"},"local.env.json"),"."),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"local.env.json")," with your credentials and environment-specific variables from 1Password.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure that the credentials match the correct namespace vault (staging, dev, etc.) in 1Password."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This configuration is required for accessing APIs, authentication, and other environment-specific services."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"4-installing-dependencies"},"4. Installing Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the following command to install all necessary project dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"5-running-cypress-tests"},"5. Running Cypress Tests"),(0,i.kt)("p",null,"Once the setup is complete, you can run the tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To run all tests in headless mode:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cy:headless:stable:local\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To run tests interactively in the Cypress UI:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cy:gui:stable:regression:staging:local\n")))),(0,i.kt)("p",null,"For more details on additional configurations and test options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/docs/running_tests_guide.md"},(0,i.kt)("inlineCode",{parentName:"a"},"Running Tests Guide"))," section in README."))}d.isMDXComponent=!0}}]);