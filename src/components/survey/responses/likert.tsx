import { SurveyEngine, SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";


export const LikertInput = () => {
  // @code(LikertInput)
  return SurveyItems.responsiveSingleChoiceArray({
    itemKey:'t1',
    parentKey:'test',
    questionText: textMap("Likert question"),
        rows: [
            {"key":"row1", content: textMap("How do you feel today")}
        ],
        scaleOptions: [
            {"key": "1", content: textMap("Very good")},
            {"key": "2", content: textMap("Good")},
            {"key": "3", content: textMap("Fine")},
            {"key": "4", content: textMap("Not so good")},
            {"key": "5", content: textMap("Meh.")},
        ],
        defaultMode: "horizontal",  
  });
  // @end(LikertInput)
}
 

export const LikertInputSeveral = () => {
    // @code(LikertInputSeveral)
    return SurveyItems.responsiveSingleChoiceArray({
      itemKey:'t2',
      parentKey:'test',
      questionText: textMap("Likert question"),
          rows: [
              {"key":"row1", content: textMap("Violets are blue")},
              {"key":"row2", content: textMap("Red is a warm color")},
              {"key":"row3", content: textMap("I'm a robot")},
          ],
          scaleOptions: [
              {"key": "1", content: textMap("Strongly disagree")},
              {"key": "2", content: textMap("Disagree")},
              {"key": "3", content: textMap("Neutral")},
              {"key": "4", content: textMap("Agree")},
              {"key": "5", content: textMap("Strongly agree")},
          ],
          defaultMode: "horizontal",  
    });
    // @end(LikertInputSeveral)
  }
   
  export const LikertInputVertical = () => {
    // @code(LikertInputVertical)
    return SurveyItems.responsiveSingleChoiceArray({
      itemKey:'t2',
      parentKey:'test',
      questionText: textMap("Likert question"),
          rows: [
              {"key":"row1", content: textMap("Violets are blue")},
              {"key":"row2", content: textMap("Red is a warm color")},
          ],
          scaleOptions: [
              {"key": "1", content: textMap("Strongly disagree")},
              {"key": "2", content: textMap("Disagree")},
              {"key": "3", content: textMap("Neutral")},
              {"key": "4", content: textMap("Agree")},
              {"key": "5", content: textMap("Strongly agree")},
          ],
          defaultMode: "vertical",  
    });
    // @end(LikertInputVertical)
  }

  export const LikertInputTable = () => {
    // @code(LikertInputTable)
    return SurveyItems.responsiveSingleChoiceArray({
      itemKey:'t2',
      parentKey:'test',
      questionText: textMap("Likert question"),
          rows: [
              {"key":"row1", content: textMap("Violets are blue")},
              {"key":"row2", content: textMap("Red is a warm color")},
          ],
          scaleOptions: [
              {"key": "1", content: textMap("Strongly disagree")},
              {"key": "2", content: textMap("Disagree")},
              {"key": "3", content: textMap("Neutral")},
              {"key": "4", content: textMap("Agree")},
              {"key": "5", content: textMap("Strongly agree")},
          ],
          defaultMode: "table",  
    });
    // @end(LikertInputTable)
  }



export default [
    {
    name: 'LikertInput',
    item: LikertInput,
  },
  {
    name: 'LikertInputSeveral',
    item: LikertInputSeveral,
  },
  {
    name: 'LikertInputVertical',
    item: LikertInputVertical,
  },
  {
    name: 'LikertInputTable',
    item: LikertInputTable,
  },

] as ItemViewerDefinition[];
