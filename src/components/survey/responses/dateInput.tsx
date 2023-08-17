import React from "react";
//import { en } from 'date-fns/locale';
import { SurveyItems } from "case-editor-tools/surveys";
import { ItemViewerDefinition, textMap } from "@site/src/viewer/response";

export const DateInput = () => {
  // @code(dateInput)
  return SurveyItems.dateInput({
    itemKey: 'q1',
    parentKey: 'test',
    questionText:textMap("A date question"),
    dateInputMode: 'YMD',
  });
  //@end(dateInput)
}

export default {
  name: 'dateInput',
  item: DateInput
} as ItemViewerDefinition;

