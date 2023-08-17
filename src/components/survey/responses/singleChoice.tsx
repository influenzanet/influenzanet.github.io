import { SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";

export const SingleChoiceItem = () => {
  // @code(singleChoice)
  return SurveyItems.singleChoice({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("Single Choice Example "),
    responseOptions:[
        {'key': '1', content: textMap("My Option"), role: 'option' },
    ]
  });
  // @end(singleChoice)
}

export const SingleChoiceViewer = {
    
}
 
const def : ItemViewerDefinition = {
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