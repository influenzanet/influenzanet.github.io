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

export const YearMonthInput = () => {
  // @code(YearMonthInput)
  return SurveyItems.dateInput({
    itemKey: 'q2',
    parentKey: 'test',
    questionText:textMap("A year month question"),
    dateInputMode: 'YM',
  });
  //@end(YearMonthInput)
}

export const YearInput = () => {
  // @code(YearInput)
  return SurveyItems.dateInput({
    itemKey: 'q2',
    parentKey: 'test',
    questionText:textMap("A year question"),
    dateInputMode: 'Y',
  });
  //@end(YearInput)
}

export default [
  {
    name: 'dateInput',
    item: DateInput
  },
  {
    name: 'YearMonthInput',
    item: YearMonthInput
  },
  {
    name: 'YearInput',
    item: YearInput
  },
  
] as ItemViewerDefinition[];

