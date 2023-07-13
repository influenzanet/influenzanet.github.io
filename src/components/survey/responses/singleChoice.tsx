import { SurveyItems } from "case-editor-tools/surveys";
import { _T, DefaultItemViewer } from "./utils";
import React from "react";

export const SingleChoiceItem = () => {
  // --snippet--
  return SurveyItems.singleChoice({
    itemKey:'t1',
    parentKey:'test',
    questionText: _T("Single Choice Example "),
    responseOptions:[
        {'key': '1', content: _T("My Option"), role: 'option' },
    ]
  });
  // --end--
}

export const SingleChoiceViewer = {
    item: SingleChoiceItem,
    prefills:{
            key: 'rg',
            items: [
              { key: 'scg', items: [{ key: 't1' }] }
            ]
          }
}
 
