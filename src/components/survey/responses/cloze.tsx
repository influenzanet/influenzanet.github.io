import { SurveyEngine, SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";
import text from "./text";


export const ClozeInput = () => {
  // @code(ClozeInput)
  return SurveyItems.clozeQuestion({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("Cloze question"),
    items:[
        {key: '0', role:'text', content: textMap("We can put a text and ask for an number")},
        {key: '1', role:'numberInput'},
        {key: '2', role:'text', content: textMap("Then we can continue with another text and ask for a date")},
        {key: '3', role:'dateInput'},
        {key: '4', role:'text', content: textMap("or a year-month")},
        {key: '5', role:'dateInput', optionProps: {'dateInputMode':'YM'}},
        {key: '6', role:'text', content: textMap("or a drop down")},
        {key: '7', role:'dropDownGroup', items: [ 
            {'key': '1', content: textMap("Option 1"), role:'option'},
            {'key': '2', content: textMap("Option 1"), role: 'option'},
            
        ]},
        

    ]
  });
  // @end(ClozeInput)
}
 



export default [
    {
    name: 'ClozeInput',
    item: ClozeInput,
  },
 
] as ItemViewerDefinition[];
