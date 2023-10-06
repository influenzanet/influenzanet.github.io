import { SurveyEngine, SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";
import text from "./text";

export const TextInput = () => {
  // @code(TextInput)
  return SurveyItems.textInput({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("Simple text input"),
    placeholderText: textMap("Placeholder text")
  });
  // @end(TextInput)
}
 
export const NumberInput = () => {
  // @code(NumberInput)
  return SurveyItems.numericInput({
    itemKey:'t2',
    parentKey:'test',
    inputLabel: textMap("Input label"),
    questionText: textMap("Number input question "),
    componentProperties: {
      min: 0,
      max: 120
    }
  });
  // @end(NumberInput)
}

export const MultilineTextInput = () => {
  // @code(MultilineTextInput)
  return SurveyItems.multilineTextInput({
    itemKey:'t2',
    parentKey:'test',
    inputLabelText: textMap("My Input label "),
    questionText: textMap("Question with Multiline Text Input"),
  });
  // @end(MultilineTextInput)
}
 



export default [
    {
    name: 'TextInput',
    item: TextInput,
  },
  {
    name: 'NumberInput',
    item: NumberInput,
  },
  {
    name: 'MultilineTextInput',
    item: MultilineTextInput,
  },
  
  
] as ItemViewerDefinition[];
