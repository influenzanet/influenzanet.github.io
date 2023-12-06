"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[9263],{4409:(e,t,n)=>{n.d(t,{E:()=>Q,P:()=>X});var o=n(2389),a=n(7294),s=n(5409),i=n(4866),r=n(5162),l=n(614),p=n(7546);const c=e=>new Map([["en",e]]),u=e=>({code:"en",parts:[e]}),y=(e,t)=>({versionId:"1",surveyDefinition:{key:"test"+(t??""),items:["function"==typeof e?e():e]}}),m=e=>{const[t,n]=(0,a.useState)(void 0);return a.createElement("div",{className:"survey-viewer-"+e.id},a.createElement(s.oP,{survey:y(e.item,e.id),languageCode:"en",backBtnText:"Back",nextBtnText:"Next",onSubmit:e=>n(e[0]),submitBtnText:"Submit",invalidResponseText:"Please check your response",showKeys:!1,hideBackButton:!0}),t?a.createElement("div",{className:"card bg-default"},a.createElement("div",{className:"card-body p-1"},a.createElement("pre",{className:"p-0 m-0"},JSON.stringify(t,void 0,1)))):"")},d=e=>{const t=(e=>{"function"==typeof e&&e();const t=y(e);return new p.S(t,{},[],!0).getRenderedSurvey().items.at(0)})(e.item),n={...e,item:e.item},o=e.customViewer??a.createElement(m,n),s=e.json??t;return a.createElement(i.Z,null,a.createElement(r.Z,{value:"item",label:"Component"},o),a.createElement(r.Z,{value:"code",label:"Code (case-editor-tools)"},a.createElement(l.Z,{language:"jsx"},e.codeSnippet),a.createElement("span",{style:{fontSize:".8em",fontStyle:"italic"}},"To simplify code, helpers ",a.createElement("code",null,"textMap()")," and ",a.createElement("code",null,"text()")," generate respectively a Map and a Localized Text for the english text provided. See Internationalization for more details of translation.")),s?a.createElement(r.Z,{value:"json",label:"JSON"},a.createElement(l.Z,{language:"json"},JSON.stringify(s,void 0,2))):void 0)},x={"client:or":"SurveyEngine.logic.or(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),\n            SurveyEngine.hasResponse('intake.Q2','rg.scg.1')\n            )\n            ","client:and":"SurveyEngine.logic.and(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),\n            SurveyEngine.hasResponse('intake.Q2','rg.scg.1')\n            )\n            ","client:not":"SurveyEngine.logic.not(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1')\n            )\n            ","client:eq":"SurveyEngine.compare.eq(\n                SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),\n                20\n            )\n            ","client:lt":"SurveyEngine.compare.lt(\n            SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),\n            20\n            )\n            ","client:timestampWithOffset":"SurveyEngine.timestampWithOffset({years: -1})\n            ","client:hasResponse":"// Check if the question intake.Q5 has response int the MultipleChoice (mcg) in the Response Group (rg)\n               return SurveyEngine.hasResponse('intake.Q5', 'rg.mcg')\n            ","client:getAttribute":"// Extract participantFlags from context and 'adult' element from it\n               return SurveyEngine.getters.getAttribute(\n                SurveyEngine.getters.getAttribute(SurveyEngine.getters.getContext(), 'participantFlags'),\n                'adult'\n                )\n            ","client:getAttribute2":"// Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)\n               return SurveyEngine.participantFlags.hasKeyAndValue(\"adult\", \"1\")\n            ","client:checkResponseValueWithRegex":"// Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)\n               return SurveyEngine.checkResponseValueWithRegex('intake.Q6', 'rg.1', '/[0-9]{5}/')\n            ","client:responseHasKeysAll":"// 'intake.Q1' multiplechoice group has, at least option checked with key 'cat' AND 'dog' (regardless other checked response)\n               return SurveyEngine.responseHasKeysAll('intake.Q1','rg.mcg', 'cat', 'dog')\n            ","client:responseHasOnlyKeysOtherThan":"// 'intake.Q1' multiplechoice group has NOT option checked with key 'cat' NOR 'dog' (regardless other checked response)\n              return SurveyEngine.responseHasOnlyKeysOtherThan('intake.Q1','rg.mcg', 'cat', 'dog')\n            ","i18n:dateResponseDiffFromNow":'SurveyEngine.dateResponseDiffFromNow("survey.age","rg.date", "years", true);\n            ',"client:hasParticipantFlag":"SurveyEngine.participantFlags.hasKey('my_flag')\n            ","client:hasParticipantFlagValue":"SurveyEngine.participantFlags.hasKeyAndValue('my_flag', '1')\n            ","study:rules-assign-survey":"study.ifThen(\n                study.checkEventType('SUBMIT'),\n                study.ifThen(\n                    study.checkSurveyResponseKey('profile'),\n                    study.participantActions.assignedSurveys.remove('womenstudy', 'all'),\n                    study.participantActions.assignedSurveys.add('womenstudy', \"prio\"),\n                )\n              );\n            ","study:rules-assign-question":"study.ifThen(\n                study.checkEventType('SUBMIT'),\n                study.ifThen(\n                    study.checkSurveyResponseKey('profile'),\n                    study.if(\n                        study.and(\n                            study.hasResponseKeyWithValue('profile.gender','rg.scg.1', 'woman'),\n                            study.lt(\n                                study.getResponseValueAsNum('profile.age', 'rg.date'),\n                                study.timestampWithOffset({years: -50})\n                            )\n                        ),\n                        study.participantActions.updateFlag('women50', 1),\n                        study.participantActions.updateFlag('women50', 0)\n                    )\n                )\n              );\n            ",singleChoice:"SurveyItems.singleChoice({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: textMap(\"Single Choice Example \"),\n    responseOptions:[\n        {'key': '1', content: textMap(\"My Option\"), role: 'option' },\n    ]\n  });\n  ",DropDownItem:"SurveyItems.dropDown({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: textMap(\"DropDown Example \"),\n    responseOptions:[\n        {'key': '1', content: textMap(\"Option One\"), role: 'option' },\n        {'key': '2', content: textMap(\"Option Two\"), role: 'option' },\n        {'key': '3', content: textMap(\"Option Three\"), role: 'option' },\n    ]\n  });\n  ",MultipleChoice:"SurveyItems.multipleChoice({\n    itemKey:'t2',\n    parentKey:'test',\n    questionText: textMap(\"Multiple Choice Example \"),\n    responseOptions:[\n        {'key': '1', content: textMap(\"Choice 1\"), role: 'option' },\n        {'key': '2', content: textMap(\"Choice 2\"), role: 'option' },\n        {'key': '3', content: textMap(\"Choice 3\"), role: 'option' },\n    ]\n  });\n  ",MultipleChoiceExclusive:"const exclusive1 = SurveyEngine.multipleChoice.any('test.t3', \"1\");\n  const exclusive3 = SurveyEngine.multipleChoice.any('test.t3', \"3\");\n\n  return SurveyItems.multipleChoice({\n    itemKey:'t3',\n    parentKey:'test',\n    questionText: textMap(\"Multiple choice with exclusive option\"),\n    responseOptions:[\n      {'key': '1', content: textMap(\"Choice 1\"), role: 'option', disabled: exclusive3 },\n      {'key': '2', content: textMap(\"Choice 2\"), role: 'option' },\n      {'key': '3', content: textMap(\"Choice 3\"), role: 'option', disabled: exclusive1 },\n    ]\n  });\n  ",MultipleChoiceOpenItem:"SurveyItems.multipleChoice({\n    itemKey:'t2',\n    parentKey:'test',\n    questionText: textMap(\"Multiple Choice Example \"),\n    responseOptions:[\n        {'key': '1', content: textMap(\"Choice 1\"), role: 'option' },\n        {'key': '2', content: textMap(\"Choice 2\"), role: 'option' },\n        {\n          'key': '3', \n          content: textMap(\"Choice 3\"), \n          role: 'input',\n        },\n    ]\n  });\n  ",MultipleChoiceComplexOption:'SurveyItems.multipleChoice({\n    itemKey:\'t2\',\n    parentKey:\'test\',\n    questionText: textMap("Multiple Choice Example "),\n    responseOptions:[\n        {\'key\': \'1\', role: \'option\',\n          items: [\n            {"key": "1", role:"text", content: textMap("Main text of the option")},\n            {"key":"2",  role:"text", content: textMap("Small text"), style: [{key:"className", value:"d-block fs-6"}]}\n          ]\n        },\n        {\'key\': \'2\', content: textMap("Choice 2"), role: \'option\' },\n        {\n          \'key\': \'3\', \n          role: \'option\',\n          items: [\n            {"key":"1", role:"text", content: textMap("text in bold"), style: [{key:"className", value:"fw-bold"}]},\n            {"key":"2", role:"text", content: textMap(" text in red"), style: [{key:"className", value:"text-danger"}]}\n          ]\n        },\n    ]\n  });\n  ',ClozeInput:"SurveyItems.clozeQuestion({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: textMap(\"Cloze question\"),\n    items:[\n        {key: '0', role:'text', content: textMap(\"We can put a text and ask for an number\")},\n        {key: '1', role:'numberInput'},\n        {key: '2', role:'text', content: textMap(\"Then we can continue with another text and ask for a date\")},\n        {key: '3', role:'dateInput'},\n        {key: '4', role:'text', content: textMap(\"or a year-month\")},\n        {key: '5', role:'dateInput', optionProps: {'dateInputMode':'YM'}},\n        {key: '6', role:'text', content: textMap(\"or a drop down\")},\n        {key: '7', role:'dropDownGroup', items: [ \n            {'key': '1', content: textMap(\"Option 1\"), role:'option'},\n            {'key': '2', content: textMap(\"Option 1\"), role: 'option'},\n            \n        ]},\n        \n\n    ]\n  });\n  ",dateInput:"SurveyItems.dateInput({\n    itemKey: 'q1',\n    parentKey: 'test',\n    questionText:textMap(\"A date question\"),\n    dateInputMode: 'YMD',\n  });\n  ",YearMonthInput:"SurveyItems.dateInput({\n    itemKey: 'q2',\n    parentKey: 'test',\n    questionText:textMap(\"A year month question\"),\n    dateInputMode: 'YM',\n  });\n  ",YearInput:"SurveyItems.dateInput({\n    itemKey: 'q2',\n    parentKey: 'test',\n    questionText:textMap(\"A year question\"),\n    dateInputMode: 'Y',\n  });\n  ",MatrixDropDownItem:"SurveyItems.responsiveMatrix({\n    itemKey:'t2',\n    parentKey:'test',\n    questionText: textMap(\"Matrix with drop down\"),\n    breakpoint: 'xl',\n    responseType: \"dropdown\",\n    rows:   [  \n        {'key': 'r1', label: textMap(\"Row 1\"), role: 'row' },\n        {'key': 'r2', label: textMap(\"Row 2\"), role: 'row' },\n        {'key': 'r3', label: textMap(\"Row 3\"), role: 'row' },\n    ],\n    columns: [\n        {'key': 'c1', label: textMap(\"Col 1\")},\n        {'key': 'c2', label: textMap(\"Col 2\")},   \n    ],\n    dropdownConfig: {\n        unselectedLabeL: textMap(\"Choose\"),\n        options: [\n            {'key': '1', label: textMap(\"Choice 1\")},\n            {'key': '2', label: textMap(\"Choice 2\")},  \n        ]\n    }\n  });\n  ",MatrixDropDownCategoryItem:"SurveyItems.responsiveMatrix({\n      itemKey:'t2',\n      parentKey:'test',\n      questionText: textMap(\"Matrix with drop down\"),\n      responseType: \"dropdown\",\n      breakpoint: 'xl',\n      rows:   [  \n          {'key': 'rc3', label: textMap(\"A category\"), role: 'category' },\n          {'key': 'r1', label: textMap(\"Row 1\"), role: 'row' },\n          {'key': 'r2', label: textMap(\"Row 2\"), role: 'row' },\n          {'key': 'rc2', label: textMap(\"A second category\"), role: 'category' },\n          {'key': 'r3', label: textMap(\"Row 3\"), role: 'row' },\n          {'key': 'r4', label: textMap(\"Row 4\"), role: 'row' },\n      ],\n      columns: [\n          {'key': 'c1', label: textMap(\"Col 1\")},\n          {'key': 'c2', label: textMap(\"Col 2\")},   \n      ],\n      dropdownConfig: {\n          unselectedLabeL: textMap(\"Choose\"),\n          options: [\n              {'key': '1', label: textMap(\"Choice 1\")},\n              {'key': '2', label: textMap(\"Choice 2\")},  \n          ]\n      }\n    });\n    ",MatrixInputItem:"SurveyItems.responsiveMatrix({\n      itemKey:'t2',\n      parentKey:'test',\n      questionText: textMap(\"Matrix with drop down\"),\n      breakpoint: 'xl',\n      responseType: \"numberInput\",\n      rows:   [  \n          {'key': 'r1', label: textMap(\"Row 1\"), role: 'row' },\n          {'key': 'r2', label: textMap(\"Row 2\"), role: 'row' },\n          {'key': 'r3', label: textMap(\"Row 3\"), role: 'row' },\n      ],\n      columns: [\n          {'key': 'c1', label: textMap(\"Col 1\")},\n          {'key': 'c2', label: textMap(\"Col 2\")},   \n      ]\n    });\n    ",textComponent:"/**\n   * The display helper creates a SurveyItem with a list of textual components\n   * \n   * Each component here has the 'text' role and can show a list of text.\n   * `style` option can be used to customize visual style of the text\n   */\n\n  return SurveyItems.display({\n    itemKey:'t1',\n    parentKey:'test',\n\n    content: [ // List of texts to show\n        \n        {\n            'role': 'text',\n            content: [  // Content is a list of LocalizedObject, each can contain a text (or a expression, resolved during item rendering using response or context)\n                text(\"A stylized text using 'h2' style variant\")\n            ],\n            style: [ // Styles can be used to customize th rendering of the text\n                {key: 'variant', value:'h2'}\n            ]\n        },\n        {\n            role: 'text',\n            content:[ \n                text(\"A very intersting text\") \n            ]\n        }\n   ]\n  });\n  ",basicText:"/**\n                 * The display helper creates a SurveyItem with a list of textual components\n                 * \n                 * Each component here has the 'text' role and can show a list of text.\n                 * `style` option can be used to customize visual style of the text\n                 */\n\n                return SurveyItems.display({\n                    itemKey:'t1',\n                    parentKey:'test',\n\n                    content: [ // List of texts to show\n                        {\n                            role: 'text',\n                            content:[ \n                                text(\"A very intersting text\") \n                            ]\n                        }                       \n                    ]\n                });\n            ",TextInput:"SurveyItems.textInput({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: textMap(\"Simple text input\"),\n    placeholderText: textMap(\"Placeholder text\")\n  });\n  ",NumberInput:"SurveyItems.numericInput({\n    itemKey:'t2',\n    parentKey:'test',\n    inputLabel: textMap(\"Input label\"),\n    questionText: textMap(\"Number input question \"),\n    componentProperties: {\n      min: 0,\n      max: 120\n    }\n  });\n  ",MultilineTextInput:"SurveyItems.multilineTextInput({\n    itemKey:'t2',\n    parentKey:'test',\n    inputLabelText: textMap(\"My Input label \"),\n    questionText: textMap(\"Question with Multiline Text Input\"),\n  });\n  ",snippetName:"*   ... you code snippet\n* "};class h{constructor(){this.viewers=new Map,this.count=0}registerViewer(e){const t=(n=e.name,x[n]??void 0??'Code snippet not found for "'+e.name+'"');var n;++this.count,this.viewers.set(e.name,{...e,codeSnippet:t,id:this.count})}add(e){Array.isArray(e)?e.forEach((e=>{this.registerViewer(e)})):this.registerViewer(e)}get(e){return this.viewers.get(e)}}var g=n(4453);const k=[{name:"singleChoice",item:()=>g.Cy.singleChoice({itemKey:"t1",parentKey:"test",questionText:c("Single Choice Example "),responseOptions:[{key:"1",content:c("My Option"),role:"option"}]}),prefill:{key:"rg",items:[{key:"scg",items:[{key:"t1"}]}]}},{name:"MultipleChoice",item:()=>g.Cy.multipleChoice({itemKey:"t2",parentKey:"test",questionText:c("Multiple Choice Example "),responseOptions:[{key:"1",content:c("Choice 1"),role:"option"},{key:"2",content:c("Choice 2"),role:"option"},{key:"3",content:c("Choice 3"),role:"option"}]})},{name:"MultipleChoiceExclusive",item:()=>{const e=g.Xq.multipleChoice.any("test.t3","1"),t=g.Xq.multipleChoice.any("test.t3","3");return g.Cy.multipleChoice({itemKey:"t3",parentKey:"test",questionText:c("Multiple choice with exclusive option"),responseOptions:[{key:"1",content:c("Choice 1"),role:"option",disabled:t},{key:"2",content:c("Choice 2"),role:"option"},{key:"3",content:c("Choice 3"),role:"option",disabled:e}]})}},{name:"MultipleChoiceOpenItem",item:()=>g.Cy.multipleChoice({itemKey:"t2",parentKey:"test",questionText:c("Multiple Choice Example "),responseOptions:[{key:"1",content:c("Choice 1"),role:"option"},{key:"2",content:c("Choice 2"),role:"option"},{key:"3",content:c("Choice 3"),role:"input"}]})},{name:"MultipleChoiceComplexOption",item:()=>g.Cy.multipleChoice({itemKey:"t2",parentKey:"test",questionText:c("Multiple Choice Example "),responseOptions:[{key:"1",role:"option",items:[{key:"1",role:"text",content:c("Main text of the option")},{key:"2",role:"text",content:c("Small text"),style:[{key:"className",value:"d-block fs-6"}]}]},{key:"2",content:c("Choice 2"),role:"option"},{key:"3",role:"option",items:[{key:"1",role:"text",content:c("text in bold"),style:[{key:"className",value:"fw-bold"}]},{key:"2",role:"text",content:c(" text in red"),style:[{key:"className",value:"text-danger"}]}]}]})},{name:"DropDownItem",item:()=>g.Cy.dropDown({itemKey:"t1",parentKey:"test",questionText:c("DropDown Example "),responseOptions:[{key:"1",content:c("Option One"),role:"option"},{key:"2",content:c("Option Two"),role:"option"},{key:"3",content:c("Option Three"),role:"option"}]})}],v=[{name:"dateInput",item:()=>g.Cy.dateInput({itemKey:"q1",parentKey:"test",questionText:c("A date question"),dateInputMode:"YMD"})},{name:"YearMonthInput",item:()=>g.Cy.dateInput({itemKey:"q2",parentKey:"test",questionText:c("A year month question"),dateInputMode:"YM"})},{name:"YearInput",item:()=>g.Cy.dateInput({itemKey:"q2",parentKey:"test",questionText:c("A year question"),dateInputMode:"Y"})}],w=[{name:"basicText",item:()=>g.Cy.display({itemKey:"t1",parentKey:"test",content:[{role:"text",content:[u("A very intersting text")]}]})},{name:"textComponent",item:()=>g.Cy.display({itemKey:"t1",parentKey:"test",content:[{role:"text",content:[u("A stylized text using 'h2' style variant")],style:[{key:"variant",value:"h2"}]},{role:"text",content:[u("A very intersting text")]}]})}],M=[{name:"TextInput",item:()=>g.Cy.textInput({itemKey:"t1",parentKey:"test",questionText:c("Simple text input"),placeholderText:c("Placeholder text")})},{name:"NumberInput",item:()=>g.Cy.numericInput({itemKey:"t2",parentKey:"test",inputLabel:c("Input label"),questionText:c("Number input question "),componentProperties:{min:0,max:120}})},{name:"MultilineTextInput",item:()=>g.Cy.multilineTextInput({itemKey:"t2",parentKey:"test",inputLabelText:c("My Input label "),questionText:c("Question with Multiline Text Input")})}],b=[{name:"MatrixDropDownItem",item:()=>g.Cy.responsiveMatrix({itemKey:"t2",parentKey:"test",questionText:c("Matrix with drop down"),breakpoint:"xl",responseType:"dropdown",rows:[{key:"r1",label:c("Row 1"),role:"row"},{key:"r2",label:c("Row 2"),role:"row"},{key:"r3",label:c("Row 3"),role:"row"}],columns:[{key:"c1",label:c("Col 1")},{key:"c2",label:c("Col 2")}],dropdownConfig:{unselectedLabeL:c("Choose"),options:[{key:"1",label:c("Choice 1")},{key:"2",label:c("Choice 2")}]}})},{name:"MatrixDropDownCategoryItem",item:()=>g.Cy.responsiveMatrix({itemKey:"t2",parentKey:"test",questionText:c("Matrix with drop down"),responseType:"dropdown",breakpoint:"xl",rows:[{key:"rc3",label:c("A category"),role:"category"},{key:"r1",label:c("Row 1"),role:"row"},{key:"r2",label:c("Row 2"),role:"row"},{key:"rc2",label:c("A second category"),role:"category"},{key:"r3",label:c("Row 3"),role:"row"},{key:"r4",label:c("Row 4"),role:"row"}],columns:[{key:"c1",label:c("Col 1")},{key:"c2",label:c("Col 2")}],dropdownConfig:{unselectedLabeL:c("Choose"),options:[{key:"1",label:c("Choice 1")},{key:"2",label:c("Choice 2")}]}})},{name:"MatrixInputItem",item:()=>g.Cy.responsiveMatrix({itemKey:"t2",parentKey:"test",questionText:c("Matrix with drop down"),breakpoint:"xl",responseType:"numberInput",rows:[{key:"r1",label:c("Row 1"),role:"row"},{key:"r2",label:c("Row 2"),role:"row"},{key:"r3",label:c("Row 3"),role:"row"}],columns:[{key:"c1",label:c("Col 1")},{key:"c2",label:c("Col 2")}]})}],C=[{name:"ClozeInput",item:()=>g.Cy.clozeQuestion({itemKey:"t1",parentKey:"test",questionText:c("Cloze question"),items:[{key:"0",role:"text",content:c("We can put a text and ask for an number")},{key:"1",role:"numberInput"},{key:"2",role:"text",content:c("Then we can continue with another text and ask for a date")},{key:"3",role:"dateInput"},{key:"4",role:"text",content:c("or a year-month")},{key:"5",role:"dateInput",optionProps:{dateInputMode:"YM"}},{key:"6",role:"text",content:c("or a drop down")},{key:"7",role:"dropDownGroup",items:[{key:"1",content:c("Option 1"),role:"option"},{key:"2",content:c("Option 1"),role:"option"}]}]})}],f=new h;f.add(k),f.add(v),f.add(w),f.add(M),f.add(b),f.add(C);var T=n(6010),E=n(6928),K=n(1388);class I{constructor(e){this.arg=e}getType(){return this.arg.dtype??"str"}isNumeric(){return"num"===this.getType()}isExpression(){return"exp"===this.getType()}isString(){return"str"===this.getType()}num(){return this.arg.num}}function S(e){if("timestampWithOffset"===e.name&&e.data){const n=new I(e.data[0]);if(n.isNumeric()){const e=n.num();if(void 0!==e){const n=(0,E.Z)({start:0,end:1e3*e});return t=(0,K.Z)(n),a.createElement("span",{className:"survey-exp-helper"},t)}}}var t;return a.createElement("span",null)}const q=e=>e.exp?a.createElement("div",{className:"survey-expression"},a.createElement("span",{className:"survey-exp-name"},e.exp.name),a.createElement("span",null,"(",(e=>{if(!e)return a.createElement("span",null);const t=e.length,n=e.some((e=>void 0!==e.exp));return a.createElement("ul",{className:(0,T.Z)("survey-exp-arglist",{"survey-exp-expanded":n})},e.map(((e,n)=>a.createElement("li",{className:(0,T.Z)("survey-exp-arg",{last:n===t-1}),key:n},a.createElement(R,{exp:e})))))})(e.exp.data),")"),S(e.exp)):a.createElement("span",null),R=e=>{switch(e.exp.dtype??"str"){case"exp":return e.exp.exp?a.createElement(q,{exp:e.exp.exp}):a.createElement("span",null);case"str":return a.createElement("span",{className:"survey-exparg-str"},e.exp.str);case"num":return a.createElement("span",{className:"survey-exparg-num"},e.exp.num)}},O=e=>{const t="function"==typeof e.expr?e.expr():e.expr,n=JSON.stringify(t,null,1);return a.createElement(i.Z,null,a.createElement(r.Z,{value:"code",label:"Code (case-editor-tools)"},a.createElement(l.Z,{language:"ts"}," ",e.codeSnippet," ")),a.createElement(r.Z,{value:"expr",label:"JSON"},a.createElement(l.Z,{language:"json"},n)),a.createElement(r.Z,{value:"preview",label:"Preview"},a.createElement("div",{style:{display:"block",border:"1px solid #E6E6E6",padding:".3em"}},a.createElement(q,{exp:t})),a.createElement("small",null,"Preview shows expression using a function call-like syntax, more readable than raw json.")))},A=[{name:"client:or",expr:()=>g.Xq.logic.or(g.Xq.hasResponse("intake.Q1","rg.scg.1"),g.Xq.hasResponse("intake.Q2","rg.scg.1"))},{name:"client:and",expr:()=>g.Xq.logic.and(g.Xq.hasResponse("intake.Q1","rg.scg.1"),g.Xq.hasResponse("intake.Q2","rg.scg.1"))},{name:"client:not",expr:()=>g.Xq.logic.not(g.Xq.hasResponse("intake.Q1","rg.scg.1"))},{name:"client:eq",expr:()=>g.Xq.compare.eq(g.Xq.getResponseValueAsNum("survey.age","rg.age"),20)},{name:"client:lt",expr:()=>g.Xq.compare.lt(g.Xq.getResponseValueAsNum("survey.age","rg.age"),20)},{name:"client:timestampWithOffset",expr:()=>g.Xq.timestampWithOffset({years:-1})},{name:"client:hasResponse",expr:()=>g.Xq.hasResponse("intake.Q5","rg.mcg")},{name:"client:getAttribute",expr:()=>g.Xq.getters.getAttribute(g.Xq.getters.getAttribute(g.Xq.getters.getContext(),"participantFlags"),"adult")},{name:"client:getAttribute2",expr:()=>g.Xq.participantFlags.hasKeyAndValue("adult","1")},{name:"client:checkResponseValueWithRegex",expr:()=>g.Xq.checkResponseValueWithRegex("intake.Q6","rg.1","/[0-9]{5}/")},{name:"client:responseHasKeysAll",expr:()=>g.Xq.responseHasKeysAll("intake.Q1","rg.mcg","cat","dog")},{name:"client:responseHasOnlyKeysOtherThan",expr:()=>g.Xq.responseHasOnlyKeysOtherThan("intake.Q1","rg.mcg","cat","dog")},{name:"i18n:dateResponseDiffFromNow",expr:()=>g.Xq.dateResponseDiffFromNow("survey.age","rg.date","years",!0)},{name:"client:hasParticipantFlag",expr:()=>g.Xq.participantFlags.hasKey("my_flag")},{name:"client:hasParticipantFlagValue",expr:()=>g.Xq.participantFlags.hasKeyAndValue("my_flag","1")}];var N=n(5211);const D=[{name:"study:rules-assign-survey",expr:()=>N.B$.ifThen(N.B$.checkEventType("SUBMIT"),N.B$.ifThen(N.B$.checkSurveyResponseKey("profile"),N.B$.participantActions.assignedSurveys.remove("womenstudy","all"),N.B$.participantActions.assignedSurveys.add("womenstudy","prio")))},{name:"study:rules-assign-question",expr:()=>N.B$.ifThen(N.B$.checkEventType("SUBMIT"),N.B$.ifThen(N.B$.checkSurveyResponseKey("profile"),N.B$.if(N.B$.and(N.B$.hasResponseKeyWithValue("profile.gender","rg.scg.1","woman"),N.B$.lt(N.B$.getResponseValueAsNum("profile.age","rg.date"),N.B$.timestampWithOffset({years:-50}))),N.B$.participantActions.updateFlag("women50",1),N.B$.participantActions.updateFlag("women50",0))))}],B=new h;B.add(A),B.add(D);const X=e=>(0,o.Z)()?(n(5577),(e=>{const t=f.get(e);return t?a.createElement(d,t):a.createElement("span",null,"Unknown component ",e)})(e.name)):"Only online",Q=e=>(0,o.Z)()?(n(5577),(e=>{const t=B.get(e);return t?a.createElement(O,t):a.createElement("span",null,"Unknown component ",e)})(e.name)):"Only online"},1529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),s=n(4409);const i={sidebar_label:"Display Components"},r="Display Survey Components",l={unversionedId:"survey-handbook/survey-engine/components/display",id:"survey-handbook/survey-engine/components/display",title:"Display Survey Components",description:"TextComponent",source:"@site/docs/survey-handbook/survey-engine/components/02-display.md",sourceDirName:"survey-handbook/survey-engine/components",slug:"/survey-handbook/survey-engine/components/display",permalink:"/docs/survey-handbook/survey-engine/components/display",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-handbook/survey-engine/components/02-display.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Display Components"},sidebar:"surveySidebar",previous:{title:"Components Overview",permalink:"/docs/survey-handbook/survey-engine/components/overview"},next:{title:"Response Components",permalink:"/docs/category/response-components"}},p={},c=[{value:"TextComponent",id:"textcomponent",level:2},{value:"A very basic text item",id:"a-very-basic-text-item",level:3},{value:"More complex component",id:"more-complex-component",level:3}],u={toc:c},y="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-survey-components"},"Display Survey Components"),(0,a.kt)("h2",{id:"textcomponent"},"TextComponent"),(0,a.kt)("p",null,"Text components can be used to show item with only visual content (like text, image). It can be useful to present section title or note about a survey section\nto the user."),(0,a.kt)("h3",{id:"a-very-basic-text-item"},"A very basic text item"),(0,a.kt)(s.P,{name:"basicText",mdxType:"SurveyComponent"}),(0,a.kt)("h3",{id:"more-complex-component"},"More complex component"),(0,a.kt)(s.P,{name:"textComponent",mdxType:"SurveyComponent"}))}m.isMDXComponent=!0}}]);