"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[1553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_label:"Study Service",sidebar_class_name:"green"},i=void 0,o={unversionedId:"survey-handbook/study-service/index",id:"survey-handbook/study-service/index",title:"index",description:"The Study Service is the backend part of the Survey system, it manages data of a study like survey definitions and participants' responses :",source:"@site/docs/survey-handbook/study-service/index.md",sourceDirName:"survey-handbook/study-service",slug:"/survey-handbook/study-service/",permalink:"/docs/survey-handbook/study-service/",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-handbook/study-service/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Study Service",sidebar_class_name:"green"},sidebar:"surveySidebar",previous:{title:"Extending",permalink:"/docs/survey-handbook/survey-engine/extending"},next:{title:"Study",permalink:"/docs/survey-handbook/study-service/study"}},u={},l=[{value:"Study Service Database",id:"database",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Study Service")," is the backend part of the Survey system, it manages data of a study like survey definitions and participants' responses :"),(0,a.kt)("p",null,"More specifically it manages several kind of data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./participants"},"Participants")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./study"},"Study")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./responses"},"Survey Responses"))),(0,a.kt)("h2",{id:"database"},"Study Service Database"),(0,a.kt)("p",null,"The study Database contains several collections about the studies of an ",(0,a.kt)("a",{parentName:"p",href:"/docs/system/architecture#instances"},"Instance")),(0,a.kt)("p",null,"General collection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"study-infos : Studies available for this instance. Each document describe ",(0,a.kt)("a",{parentName:"li",href:"./study"},"study properties"))),(0,a.kt)("p",null,"Others collections will be prefixed by the name of the study (field ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," of each ",(0,a.kt)("inlineCode",{parentName:"p"},"study-infos")," document)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[study]","_participants : ","[Participants]"),(0,a.kt)("li",{parentName:"ul"},"[study]","_surveys: Available survey of the study"),(0,a.kt)("li",{parentName:"ul"},"[study]","_surveyResponses: the ",(0,a.kt)("a",{parentName:"li",href:"./responses"},"responses data submitted"))),(0,a.kt)("p",null,"For example, for a 'grippenet' study name, collection names will be grippenet_participants, grippenet_surveys, ..."))}d.isMDXComponent=!0}}]);