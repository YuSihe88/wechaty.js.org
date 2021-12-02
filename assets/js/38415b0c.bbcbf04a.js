"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4388],{3905:function(e,A,t){t.d(A,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function l(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var A=r.useContext(i),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},c=function(e){var A=p(e.components);return r.createElement(i.Provider,{value:A},e.children)},u={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},s=r.forwardRef((function(e,A){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(m,o(o({ref:A},c),{},{components:t})):r.createElement(m,o({ref:A},c))}));function d(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var i in A)hasOwnProperty.call(A,i)&&(l[i]=A[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},58215:function(e,A,t){var r=t(67294);A.Z=function(e){var A=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},A)}},55064:function(e,A,t){t.d(A,{Z:function(){return p}});var r=t(67294),n=t(79443);var a=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),l="tabItem_vU9c",i="tabItemActive_cw6a";var p=function(e){var A,t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,u=e.groupId,s=e.className,d=r.Children.toArray(e.children),m=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(A=d.find((function(e){return e.props.default})))?void 0:A.props.value,h=a(),g=h.tabGroupChoices,v=h.setTabGroupChoices,y=(0,r.useState)(f),k=y[0],b=y[1],C=[];if(null!=u){var N=g[u];null!=N&&N!==k&&m.some((function(e){return e.value===N}))&&b(N)}var w=function(e){var A=e.currentTarget,t=C.indexOf(A),r=m[t].value;b(r),null!=u&&(v(u,r),setTimeout((function(){var e,t,r,n,a,o,l,p;(e=A.getBoundingClientRect(),t=e.top,r=e.left,n=e.bottom,a=e.right,o=window,l=o.innerHeight,p=o.innerWidth,t>=0&&a<=p&&n<=l&&r>=0)||(A.scrollIntoView({block:"center",behavior:"smooth"}),A.classList.add(i),setTimeout((function(){return A.classList.remove(i)}),2e3))}),150))},E=function(e){var A,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.target)-1;t=C[n]||C[C.length-1]}null==(A=t)||A.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},s)},m.map((function(e){var A=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===A?0:-1,"aria-selected":k===A,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===A}),key:A,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:w,onClick:w},null!=t?t:A)}))),t?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,A){return(0,r.cloneElement)(e,{key:A,hidden:e.props.value!==k})}))))}},79443:function(e,A,t){var r=(0,t(67294).createContext)(void 0);A.Z=r},51759:function(e,A,t){t.r(A),t.d(A,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(87462),n=t(63366),a=(t(67294),t(3905)),o=t(55064),l=t(58215),i=["components"],p={title:"Deploy in Gitter"},c=void 0,u={unversionedId:"howto/deploy-gitter",id:"howto/deploy-gitter",isDocsHomePage:!1,title:"Deploy in Gitter",description:"Gitter is an open-source instant messaging and chat room system for developers and users of GitLab and GitHub repositories. In this how-to guide, you will learn how to deploy the ding-dong  bot in Gitter locally from the Wechaty gitter template.",source:"@site/docs/howto/deploy-gitter.mdx",sourceDirName:"howto",slug:"/howto/deploy-gitter",permalink:"/docs/howto/deploy-gitter",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/deploy-gitter.mdx",tags:[],version:"current",lastUpdatedBy:"vasvi-sood",lastUpdatedAt:1634488107,formattedLastUpdatedAt:"10/17/2021",frontMatter:{title:"Deploy in Gitter"},sidebar:"docs",previous:{title:"Deploy in Lark",permalink:"/docs/howto/deploy-lark"},next:{title:"Deploy in WeChat Official Account",permalink:"/docs/howto/wechat-official"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integration",id:"integration",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]},{value:"References",id:"references",children:[]},{value:"Blogs",id:"blogs",children:[]}],d={toc:s};function m(e){var A=e.components,p=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gitter is an open-source instant messaging and chat room system for developers and users of GitLab and GitHub repositories. In this how-to guide, you will learn how to deploy the ding-dong  bot in Gitter locally from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"Wechaty gitter template"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy in Gitter",src:t(41018).Z})),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your system must have ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,a.kt)("li",{parentName:"ol"},"Your system must have ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40).")),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-gitter"),":"),(0,a.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,a.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,a.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nset WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n")))),(0,a.kt)("h2",{id:"integration"},"Integration"),(0,a.kt)("p",null,"Let's take up an example on how to integrate the ding-dong bot from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"Wechaty gitter template"),". The step is similar for all other bots as well."),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Official Wechaty package: ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,a.kt)("li",{parentName:"ol"},"A TOKEN from gitter so that it can connect to the gitter.im service: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.gitter.im/docs/services"},"developer.gitter.im/docs/services"),".")),(0,a.kt)("p",null,"You can follow up the steps mentioned below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Git clone the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"Wechaty gitter template"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"From the root directory install the necessary dependencies using the following commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty\nnpm install wechaty-puppet-gitter\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"To pass the token, add the snippets below to the head of examples/ding-dong-bot.ts file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n/**\n * Personal Access Token: this token can be used to access the Gitter API.\n *  https://developer.gitter.im/apps\n */\nconst puppet  = new PuppetGitter({ token: 'your_gitter_token' })\nconst wechaty = new Wechaty({ puppet })\n\n wechaty.start()\n\n")),(0,a.kt)("p",null,"All necessary functions like onLogout, onLogin, onError, and onMessage are predefined."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace your_gitter_token with your 40 digits hexadecimal token id.To generate your own token id, navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.gitter.im/docs/services"},"developer.gitter.im/docs/services")," and login/signin your account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now you can run the bot using the following commands:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n")),(0,a.kt)("p",null,"You have successfully deployed the ding-dong with Gitter!"),(0,a.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,a.kt)("li",{parentName:"ul"},"Get the starter template from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),".")),(0,a.kt)("h2",{id:"blogs"},"Blogs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter"},"wechaty-puppet-gitter"))))}m.isMDXComponent=!0},86010:function(e,A,t){function r(e){var A,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(A=0;A<e.length;A++)e[A]&&(t=r(e[A]))&&(n&&(n+=" "),n+=t);else for(A in e)e[A]&&(n&&(n+=" "),n+=A);return n}function n(){for(var e,A,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(A=r(e))&&(n&&(n+=" "),n+=A);return n}t.d(A,{Z:function(){return n}})},41018:function(e,A){A.Z="data:image/webp;base64,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"}}]);