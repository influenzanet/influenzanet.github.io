import React from "react";
//import { en } from 'date-fns/locale';
import { SurveyItems } from "case-editor-tools/surveys";
import { _T } from "./utils";

export const DateInput = () => {
  // --snippet--
  return SurveyItems.dateInput({
    itemKey: 'q1',
    parentKey: 'test',
    questionText:_T("A date question"),
    dateInputMode: 'YMD',
  });
  //--end--
}

export const DateInputViewer = {
  item: DateInput,
}


