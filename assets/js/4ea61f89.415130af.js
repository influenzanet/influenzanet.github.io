"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[4133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Survey Single Item",l={unversionedId:"survey-handbook/survey-engine/item",id:"survey-handbook/survey-engine/item",title:"Survey Single Item",description:'A Survey Item is the most common unit of a survey. It describes the content of a survey block, composed with visual components to define what is usually called as a "question" (a textual block and data collection fields) or purely visual components using only texts, or media.',source:"@site/docs/survey-handbook/survey-engine/02-item.md",sourceDirName:"survey-handbook/survey-engine",slug:"/survey-handbook/survey-engine/item",permalink:"/docs/survey-handbook/survey-engine/item",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-handbook/survey-engine/02-item.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"surveySidebar",previous:{title:"Survey Structure",permalink:"/docs/survey-handbook/survey-engine/structure"},next:{title:"Survey Components",permalink:"/docs/category/survey-components"}},s={},u=[{value:"Survey Item Components",id:"survey-item-components",level:2},{value:"Page break",id:"page-break",level:2},{value:"Survey Ending",id:"survey-ending",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"survey-single-item"},"Survey Single Item"),(0,a.kt)("p",null,'A Survey Item is the most common unit of a survey. It describes the content of a survey block, composed with visual components to define what is usually called as a "question" (a textual block and data collection fields) or purely visual components using only texts, or media.'),(0,a.kt)("p",null,"It holds several properties :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validations")," : a list of ",(0,a.kt)("a",{parentName:"li",href:"#validation-rules"},"validation rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"components")," : a group component holding the ",(0,a.kt)("a",{parentName:"li",href:"#survey-item-components"},"components tree")," of the ",(0,a.kt)("em",{parentName:"li"},"Survey Item"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," : an optional type name, used to define some ",(0,a.kt)("a",{parentName:"li",href:"#special-survey-item"},"special kind of survey item"))),(0,a.kt)("h2",{id:"survey-item-components"},"Survey Item Components"),(0,a.kt)("p",null,"Components define the content of an SingleItem. They can be composed and organized to create simple survey block (textual note, a simple question) or complex question (several text blocks, several interactive data collection fields, ...).\nAs the Survey Items, they can also react to logic rules to make them interactive. For example each component visibility can be controlled by an expression rule, making it visible only if a condition (based for example on the responses) is fulfilled."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"./components/overview"},"components")),(0,a.kt)("h1",{id:"validation-rules"},"Validation Rules"),(0,a.kt)("p",null,"Validation rules is a set of rules applied when the survey is about to be submitted."),(0,a.kt)("p",null,"Each validation rule is defined by several fields :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," : 'hard' or 'soft',  'hard' will block the survey submission, soft wont block and can be used to show warning message for example."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," : identifier of the validation rule, this is required to be able to test the value of this validation rule "),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("inlineCode",{parentName:"li"},"rule")," : an ",(0,a.kt)("a",{parentName:"li",href:"./expressions"},"expression")," to be evaluated to true/false ")),(0,a.kt)("h1",{id:"special-survey-item"},"Special Survey Item"),(0,a.kt)("p",null,"Special survey Item are defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property of a SurveyItem."),(0,a.kt)("h2",{id:"page-break"},"Page break"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: 'pageBreak'\n")),(0,a.kt)("p",null,"A Survey Item with this type value, will trigger the display of subsequent items in another page and activate the page progress toolbar in the survey view component."),(0,a.kt)("h2",{id:"survey-ending"},"Survey Ending"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: 'surveyEnd'\n")),(0,a.kt)("p",null,"A Survey Item with this type value, will be used as a final block in the survey. Holding the validation button."))}m.isMDXComponent=!0}}]);