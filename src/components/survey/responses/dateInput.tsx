import React from "react";
//import { en } from 'date-fns/locale';
import { SurveyItems } from "case-editor-tools/surveys";
import { ViewerDefinition, textMap } from "./utils";

export const DateInput = () => {
  // --code--
  return SurveyItems.dateInput({
    itemKey: 'q1',
    parentKey: 'test',
    questionText:textMap("A date question"),
    dateInputMode: 'YMD',
  });
  //--end--
}

export default {
  name: 'dateInput',
  item: DateInput
} as ViewerDefinition;

