"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=i,h=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Introduction",sidebar_class_name:"green"},a="Survey Engine Overview",s={unversionedId:"survey-engine/intro",id:"survey-engine/intro",title:"Survey Engine Overview",description:'The survey engine runs a Survey on the client. By "running" a survey we mean to display the survey elements (texts, images and the widgets used to collect the data) and apply the logic rules allowing the survey to react to the user inputs (like showing a question on some condition).',source:"@site/docs/survey-engine/00-intro.md",sourceDirName:"survey-engine",slug:"/survey-engine/intro",permalink:"/survey-handbook/docs/survey-engine/intro",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-engine/00-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Introduction",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Expressions",permalink:"/survey-handbook/docs/general/expressions"},next:{title:"Survey Structure",permalink:"/survey-handbook/docs/survey-engine/structure"}},l={},u=[{value:"Survey Definition",id:"survey-definition",level:2},{value:"Survey UI",id:"survey-ui",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"survey-engine-overview"},"Survey Engine Overview"),(0,i.kt)("p",null,'The survey engine runs a Survey on the client. By "running" a survey we mean to display the survey elements (texts, images and the widgets used to collect the data) and apply the logic rules allowing the survey to react to the user inputs (like showing a question on some condition).'),(0,i.kt)("p",null,"The survey engine, doesn't contain the survey itself, but it expects a ",(0,i.kt)("a",{parentName:"p",href:"/survey-handbook/docs/general/concepts#survey-definition"},"Survey Definition")," document to describe the specifications of the survey using a declarative language currently represented in ",(0,i.kt)("a",{parentName:"p",href:"https://www.json.org/"},"JSON"),"."),(0,i.kt)("p",null,'Note: The usual "question" is not a concept directly used in this engine, it provides a more general element called "Item" which can be used as a pure display element (section title, note) or as a collection of display elements (title/text) and data collection fields (what we usually call a "question").'),(0,i.kt)("p",null,"Several pages are available to describe how a Survey Definition is organized."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./structure"},"Survey structure"),": How Items are organized, grouped and defined"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./item"},"Survey Item"),' : How an Item and its content is described (to be a "Question" or not), '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./components/overview"},"Surveys Components")," : used to build an Item contents (texts, data collection fields) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./expressions"},"Survey Expressions")," : describing rules to control survey logic and reactive behaviors"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./i18n"},"Internationalization")," : How to define survey in different languages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./context"},"Runtime Context")," : The runtime context (external information about the participant, the previous responses)")),(0,i.kt)("h1",{id:"about-the-survey-engine"},"About the Survey Engine"),(0,i.kt)("p",null,'What we call a "survey" can be ambiguous it can refer to several things : the intended data collection (what we want to collect), and the survey implementation, the instrument (what we actually collect).  '),(0,i.kt)("p",null,"The Survey Engine is composed of two separated (and partly independent)"),(0,i.kt)("h2",{id:"survey-definition"},"Survey Definition"),(0,i.kt)("p",null,"it's an abstract data structure, describing each survey elements organization and properties used to render the survey using a rendering engine.\nThe ",(0,i.kt)("em",{parentName:"p"},"survey definition")," doesn't collect anything by itself. It describes what we want to have and collect but do not define how it will be rendered."),(0,i.kt)("p",null,"For example (simplified), the survey definition will describe a component with a role 'singleChoiceGroup', with a list of sub components with the role of 'option'.\nFrom these elements, the rendering engine will display it as a list of radio button. Using the role 'multipleChoiceGroup' will render them as checkboxes."),(0,i.kt)("p",null,"This suppose a mapping between the components ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," and the UI components, and also enable its extensibility (the survey definition doesnt restrict the usable roles, you can define yours and map them to your own UI components)."),(0,i.kt)("h2",{id:"survey-ui"},"Survey UI"),(0,i.kt)("p",null,"The survey engine is a program, that will interpret the survey definition, to render each element into a visual component."),(0,i.kt)("p",null,"Current implementation in Typescript is composed of 2 main librairies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/influenzanet/survey-engine.ts"},"Survey Engine"),". It runs the survey logic (but do not render the UI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/coneno/case-web-ui"},"Case Web UI"),". it provides the UI component to render the survey elements, using ",(0,i.kt)("a",{parentName:"li",href:"https://react.dev/"},"React"))),(0,i.kt)("p",null,"It's also possible to use extra UI components, to handle Survey Components that are not provided in the core UI library by ",(0,i.kt)("a",{parentName:"p",href:"./extending"},"Extending the Survey Engine")))}d.isMDXComponent=!0}}]);