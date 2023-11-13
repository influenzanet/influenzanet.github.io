import { SurveyEngine, SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";
import text from "./text";

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

export const DropDownItem = () => {
  // @code(DropDownItem)
  return SurveyItems.dropDown({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("DropDown Example "),
    responseOptions:[
        {'key': '1', content: textMap("Option One"), role: 'option' },
        {'key': '2', content: textMap("Option Two"), role: 'option' },
        {'key': '3', content: textMap("Option Three"), role: 'option' },
    ]
  });
  // @end(DropDownItem)
}
 
export const MultipleChoiceItem = () => {
  // @code(MultipleChoice)
  return SurveyItems.multipleChoice({
    itemKey:'t2',
    parentKey:'test',
    questionText: textMap("Multiple Choice Example "),
    responseOptions:[
        {'key': '1', content: textMap("Choice 1"), role: 'option' },
        {'key': '2', content: textMap("Choice 2"), role: 'option' },
        {'key': '3', content: textMap("Choice 3"), role: 'option' },
    ]
  });
  // @end(MultipleChoice)
}

export const MultipleChoiceExclusiveItem = () => {
  // @code(MultipleChoiceExclusive)

  const exclusive1 = SurveyEngine.multipleChoice.any('test.t3', "1");
  const exclusive3 = SurveyEngine.multipleChoice.any('test.t3', "3");

  return SurveyItems.multipleChoice({
    itemKey:'t3',
    parentKey:'test',
    questionText: textMap("Multiple choice with exclusive option"),
    responseOptions:[
      {'key': '1', content: textMap("Choice 1"), role: 'option', disabled: exclusive3 },
      {'key': '2', content: textMap("Choice 2"), role: 'option' },
      {'key': '3', content: textMap("Choice 3"), role: 'option', disabled: exclusive1 },
    ]
  });
  // @end(MultipleChoiceExclusive)
}

export const MultipleChoiceOpenItem = () => {
  // @code(MultipleChoiceOpenItem)
  return SurveyItems.multipleChoice({
    itemKey:'t2',
    parentKey:'test',
    questionText: textMap("Multiple Choice Example "),
    responseOptions:[
        {'key': '1', content: textMap("Choice 1"), role: 'option' },
        {'key': '2', content: textMap("Choice 2"), role: 'option' },
        {
          'key': '3', 
          content: textMap("Choice 3"), 
          role: 'input',
        },
    ]
  });
  // @end(MultipleChoiceOpenItem)
}


export const MultipleChoiceComplexOption = () => {
  // @code(MultipleChoiceComplexOption)
  return SurveyItems.multipleChoice({
    itemKey:'t2',
    parentKey:'test',
    questionText: textMap("Multiple Choice Example "),
    responseOptions:[
        {'key': '1', role: 'option',
          items: [
            {"key": "1", role:"text", content: textMap("Main text of the option")},
            {"key":"2",  role:"text", content: textMap("Small text"), style: [{key:"className", value:"d-block fs-6"}]}
          ]
        },
        {'key': '2', content: textMap("Choice 2"), role: 'option' },
        {
          'key': '3', 
          role: 'option',
          items: [
            {"key":"1", role:"text", content: textMap("text in bold"), style: [{key:"className", value:"fw-bold"}]},
            {"key":"2", role:"text", content: textMap(" text in red"), style: [{key:"className", value:"text-danger"}]}
          ]
        },
    ]
  });
  // @end(MultipleChoiceComplexOption)
}


export default [
    {
    name: 'singleChoice',
    item: SingleChoiceItem,
    prefill:{
              key: 'rg',
              items: [
                { key: 'scg', items: [{ key: 't1' }] }
              ]
    }
  },
  {
    name: 'MultipleChoice',
    item: MultipleChoiceItem,
  },
  {
    name: 'MultipleChoiceExclusive',
    item: MultipleChoiceExclusiveItem,
  },
  {
    name: 'MultipleChoiceOpenItem',
    item: MultipleChoiceOpenItem,
  },
  {
    name: 'MultipleChoiceComplexOption',
    item: MultipleChoiceComplexOption,
  },
  
  {
    name: 'DropDownItem',
    item: DropDownItem
  }
  
] as ItemViewerDefinition[];
