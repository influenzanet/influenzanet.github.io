import { SurveyItems } from "case-editor-tools/surveys";
import { textMap, DefaultItemViewer, ViewerDefinition } from "./utils";
import React from "react";

export const SingleChoiceItem = () => {
  // --code--
  return SurveyItems.singleChoice({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("Single Choice Example "),
    responseOptions:[
        {'key': '1', content: textMap("My Option"), role: 'option' },
    ]
  });
  // --end--
}

export const SingleChoiceViewer = {
    
}
 
const def : ViewerDefinition = {
  name: 'singleChoice',
  item: SingleChoiceItem,
  prefill:{
            key: 'rg',
            items: [
              { key: 'scg', items: [{ key: 't1' }] }
            ]
  }
}

export default def;