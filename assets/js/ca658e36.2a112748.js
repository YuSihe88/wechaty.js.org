"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1983,6590,8594],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63873:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(67294),a=r(86010),i="tableOfContentsInline_0DDH";function o(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return n.createElement("div",{className:(0,a.Z)(i)},n.createElement(o,{toc:t}))}},10750:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},Toc:function(){return d},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(63873),c=["components"],s={slug:"/api/",title:"Wechaty API",sidebar_label:"API: Overview"},l=void 0,p={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Wechaty API",description:"Wechaty API",source:"@site/docs/api/overview.mdx",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/api/overview.mdx",tags:[],version:"current",lastUpdatedBy:"\u5f20\u5c0f\u5929",lastUpdatedAt:1638205026,formattedLastUpdatedAt:"11/29/2021",frontMatter:{slug:"/api/",title:"Wechaty API",sidebar_label:"API: Overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/references/"},next:{title:"Wechaty",permalink:"/docs/api/wechaty"}},u=[{value:"Wechaty API",id:"wechaty-api",children:[]},{value:"Importing the Wechaty API",id:"importing-the-wechaty-api",children:[]},{value:"ES6/TypeScript",id:"es6typescript",children:[]}],d=function(){return(0,i.kt)(o.Z,{toc:u,mdxType:"TOCInline"})},f={toc:u,Toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wechaty-api"},"Wechaty API"),(0,i.kt)("p",null,"API- Application programming interface is a software interface that offers services to other software services. Wechaty API is a very tiny and easy to import API that allows users to use all the functionalities of Wechaty to its best. The API offers a variety of user classes, typedefs, functions, methods, and many more features. This section is an overview of the Wechaty API."),(0,i.kt)("h2",{id:"importing-the-wechaty-api"},"Importing the Wechaty API"),(0,i.kt)("p",null,"You can import the Wechaty API as shown below:"),(0,i.kt)("h2",{id:"es6typescript"},"ES6/TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { WechatyBuilder } from 'wechaty'\n")))}m.isMDXComponent=!0},26956:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(10750),r(50230),["components"]),c={slug:"/references/",title:"Wechaty References Overview",sidebar_label:"Overview"},s=void 0,l={unversionedId:"references/overview",id:"references/overview",isDocsHomePage:!1,title:"Wechaty References Overview",description:"The reference guide contains the technical description of the machinery. They are code determined and information oriented. The references guides contain clear descriptions of Classes, API, Functions, Methods, Attributes, and many more technical aspects of the software. The Wechaty references aim to guide the end-users completely about Wechaty.",source:"@site/docs/references/overview.mdx",sourceDirName:"references",slug:"/references/",permalink:"/docs/references/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/references/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1632471865,formattedLastUpdatedAt:"9/24/2021",frontMatter:{slug:"/references/",title:"Wechaty References Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Deploy with Docker",permalink:"/docs/howto/docker"},next:{title:"API: Overview",permalink:"/docs/api/"}},p=[{value:"References Index",id:"references-index",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The reference guide contains the technical description of the machinery. They are code determined and information oriented. The references guides contain clear descriptions of Classes, API, Functions, Methods, Attributes, and many more technical aspects of the software. The Wechaty references aim to guide the end-users completely about Wechaty."),(0,i.kt)("h2",{id:"references-index"},"References Index"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/"},"API References")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyglot/"},"Polyglot")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/"},"Puppet Providers")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/overview"},"Puppet Services")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/"},"Specifications"))))}d.isMDXComponent=!0},50230:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},Toc:function(){return d},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(63873),c=["components"],s={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},l=void 0,p={unversionedId:"specs/overview",id:"specs/overview",isDocsHomePage:!1,title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/specs/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616596436,formattedLastUpdatedAt:"3/24/2021",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Services: FAQ",permalink:"/docs/puppet-services/"},next:{title:"Wechaty",permalink:"/docs/specs/wechaty"}},u=[{value:"Table of Content",id:"table-of-content",children:[]}],d=function(){return(0,i.kt)(o.Z,{toc:u,mdxType:"TOCInline"})},f={toc:u,Toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),(0,i.kt)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/wechaty"},"Polygram Wechaty"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Polygram Wechaty"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/service"},"Wechaty Puppet Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wechaty Puppet Service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/token"},"Wechaty Puppet Service Token"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}m.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);