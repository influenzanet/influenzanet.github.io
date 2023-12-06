"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[9198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,c=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(c,a(a({ref:t},m),{},{components:n})):r.createElement(c,a({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Survey Structure",sidebar_class_name:"green"},a="Survey Definition Structure",l={unversionedId:"survey-handbook/survey-engine/structure",id:"survey-handbook/survey-engine/structure",title:"Survey Definition Structure",description:"Overview",source:"@site/docs/survey-handbook/survey-engine/01-structure.md",sourceDirName:"survey-handbook/survey-engine",slug:"/survey-handbook/survey-engine/structure",permalink:"/docs/survey-handbook/survey-engine/structure",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-handbook/survey-engine/01-structure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Survey Structure",sidebar_class_name:"green"},sidebar:"surveySidebar",previous:{title:"Introduction",permalink:"/docs/survey-handbook/survey-engine/"},next:{title:"Survey Single Item",permalink:"/docs/survey-handbook/survey-engine/item"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Survey Item",id:"survey-item",level:2},{value:"Path into the survey tree and key rules for Item",id:"path-into-the-survey-tree-and-key-rules-for-item",level:3},{value:"General Properties of Items",id:"general-properties-of-items",level:2},{value:"GroupItem",id:"groupitem",level:2},{value:"SingleItem",id:"singleitem",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"survey-definition-structure"},"Survey Definition Structure"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this engine, a survey is described as hierarchical structure (a tree) of elements called ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," (these elements can be a single element, a leaf of the tree, or a group of elements, a node of the survey tree). The leaf are the questions, and each question is composed of a set of components, describing the question content (for display like question label, text or input to collect the data)."),(0,o.kt)("p",null,"The Survey Definition is composed of two kinds of elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Item"),', can be a single item (a "question"), named ',(0,o.kt)("inlineCode",{parentName:"li"},"SingleItem")," or a group of items, named ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupItem")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ItemComponent")," hold by a ",(0,o.kt)("inlineCode",{parentName:"li"},"SingleItem"),", describing the question content. It can also be organized as a tree of component by using ",(0,o.kt)("inlineCode",{parentName:"li"},"ItemGroupComponent")," (see Components)")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Note : in the code the name of the class corresponding for these elements are prefixed by "Survey", giving SurveyItem, SurveyGroupItem...SurveyItemGroupComponent. The prefix is not used here to make the names more readable.')),(0,o.kt)("mermaid",{value:'flowchart TB\n    Item1-.contains.->RootComp\n    subgraph "Survey Structure (Items)"\n      Root--\x3eItem1\n      Root--\x3eGroupItem1\n      GroupItem1--\x3eItem3\n      GroupItem1--\x3eItem4\n    end\n    subgraph "Components of Item1"\n    RootComp--\x3eComp1\n    RootComp--\x3eGroupComp1\n    GroupComp1--\x3eComp2\n    GroupComp1--\x3eComp3\n    end\n'}),(0,o.kt)("h2",{id:"survey-item"},"Survey Item"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"SingleItem"),', is the logical unit of the survey (usually known as "question"). It can show text, and/or data collection components with more or less complex layouts.'),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupItem")," represents a group of Item(s). ")),(0,o.kt)("p",null,"Some remarks about these elements:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GroupItem")," allows to defined a set of items, and for example to make a rule targeting the group (instead of targeting each question in the group individually).\nIt's a pure structural component, helping to make the survey logic more simple or efficient, it does not affect the way Items are displayed."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"SingleItem"),' is a more abstract structure than a "question", concept usually used in other survey engines, it can be purely visual (only to show a text or a title without any field or widget to collect data) or containing several input components (like a sub-form). '),(0,o.kt)("p",null,"Each kind of Item can react to rules of the survey (see ",(0,o.kt)("a",{parentName:"p",href:"#survey-logic"},"Survey Engine Logic"),"), so you can have a rule to show a single question (targeting a ",(0,o.kt)("inlineCode",{parentName:"p"},"SingleItem"),") or a group of questions (",(0,o.kt)("inlineCode",{parentName:"p"},"GroupItem"),")"),(0,o.kt)("p",null,"An example of survey Structure will be (the ",(0,o.kt)("strong",{parentName:"p"},"key")," of item in parenthesis), levels represent the items of a group component"),(0,o.kt)("mermaid",{value:'flowchart TB\n  Root("GroupItem(intake)")--\x3eI1("SingleItem(intake.Q1)")\n  Root--\x3eI2("SingleItem(intake.Q2)")\n  Root--\x3eG1("GroupItem(intake.HS)")\n  G1--\x3eI3("SingleItem(intake.HS.Q3)")\n  G1--\x3eI4("SingleItem(intake.HS.Q4)") '}),(0,o.kt)("h3",{id:"path-into-the-survey-tree-and-key-rules-for-item"},"Path into the survey tree and key rules for Item"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Survey Engine Rule ")),(0,o.kt)("p",null,"These rules are mandatory to allow the survey engine to work correctly."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," has a key, uniquely identify the item inside the survey.\nThey keys of Item elements (",(0,o.kt)("inlineCode",{parentName:"p"},"SingleItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupItem"),") must follow these rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The key is composed by a set of segments separated by a dot (.), root element has only one segment"),(0,o.kt)("li",{parentName:"ul"},"The key segments are set of characters WITHOUT dot "),(0,o.kt)("li",{parentName:"ul"},"The key of one Item must be prefixed by the key of it parents."),(0,o.kt)("li",{parentName:"ul"},"All keys must uniquely identify one item ")),(0,o.kt)("p",null,"The key with several segments separated by dots represent the path to this item from the root item. In other words, the key of each item must be the path (dot separated) to this item from the root item. Each dot represent the walk through the lower level. "),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A survey named weekly, with an item Q1:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The root item is is keyed 'weekly', "),(0,o.kt)("li",{parentName:"ul"},"the item is keyed 'weekly.Q1'"))),(0,o.kt)("li",{parentName:"ul"},"A survey named weekly with a group of question 'G1', this group containing two questions (SingleItem) Q1 and Q2:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the root item's key is 'weekly'"),(0,o.kt)("li",{parentName:"ul"},"the group's key is 'weekly.G1'"),(0,o.kt)("li",{parentName:"ul"},"the item inside the groups have keys respectively 'weekly.G1.Q1', 'weekly.G1.Q2'")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," General best practices ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key segments should be alphanumerical words, including underscores"),(0,o.kt)("li",{parentName:"ul"},"As meaningful as possible"),(0,o.kt)("li",{parentName:"ul"},"If a word separator is chosen (dash or underscore) it should be the same everywhere")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Best practices for InfluenzaNet ")),(0,o.kt)("p",null,"Besides the previous naming rules, there are some naming convention, inherited from past platform of Influenzanet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[should]"," Items are named with a 'Q' followed by a question identifier (in use Q","[nn]"," and Qcov","[nn]",")"),(0,o.kt)("li",{parentName:"ul"},"[must]"," Last segment of each key must be unique for all the survey. e.g. 'weekly.Q1' must be unique but also 'Q1' in the survey. You must not have another item with a key finishing by 'Q1', even if in another group. This rule because the last segment is used a the key for data export. "),(0,o.kt)("li",{parentName:"ul"},"[must]"," Question keys are arbitrary but the common questions must have the assigned key in the survey standard definition "),(0,o.kt)("li",{parentName:"ul"},"[should]"," Non common question, should have a prefix to clearly identify them as non standard question (like a namespace), for example ")),(0,o.kt)("h2",{id:"general-properties-of-items"},"General Properties of Items"),(0,o.kt)("p",null,"GroupItem and SingleItem share some properties controlling some behaviors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," : uniquely identifying the item inside the survey, and in the response data (used to make a reference to this element anywhere in the system)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"condition")," : the condition field is an It's an ",(0,o.kt)("a",{parentName:"li",href:"./expressions"},"Expression"),", if defined, the item (single or group) is shown if the expression is evaluated to ",(0,o.kt)("strong",{parentName:"li"},"true")," value "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"follows")," : TBD"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"priority"),": Number used to defines priority of the question (TDB)")),(0,o.kt)("h2",{id:"groupitem"},"GroupItem"),(0,o.kt)("p",null,"GroupItem has a special field ",(0,o.kt)("inlineCode",{parentName:"p"},"selectionMethod"),", it allows to defined how order the display order of question is determined inside the group."),(0,o.kt)("p",null,"To use a sequential order (follow the order of the question as defined in the definition), uses the ",(0,o.kt)("a",{parentName:"p",href:"./expressions"},"Expression")," named 'sequential'.\nIf the field is not defined, then the question are ordered randomly (using a uniform random distribution)."),(0,o.kt)("h2",{id:"singleitem"},"SingleItem"),(0,o.kt)("p",null,"The survey SingleItem is the leaf of our survey tree. It describes a element of the survey, it's composed by a collection of components. Each component can be a text, a data collection widget or other kind of components.\nThey are described in the ",(0,o.kt)("a",{parentName:"p",href:"./item"},"Survey Item")))}d.isMDXComponent=!0}}]);