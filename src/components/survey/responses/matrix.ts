import { SurveyEngine, SurveyItems } from "case-editor-tools/surveys";
import { textMap, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";

export const MatrixDropDownItem = () => {
  // @code(MatrixDropDownItem)
  return SurveyItems.responsiveMatrix({
    itemKey:'t2',
    parentKey:'test',
    questionText: textMap("Matrix with drop down"),
    breakpoint: 'xl',
    responseType: "dropdown",
    rows:   [  
        {'key': 'r1', label: textMap("Row 1"), role: 'row' },
        {'key': 'r2', label: textMap("Row 2"), role: 'row' },
        {'key': 'r3', label: textMap("Row 3"), role: 'row' },
    ],
    columns: [
        {'key': 'c1', label: textMap("Col 1")},
        {'key': 'c2', label: textMap("Col 2")},   
    ],
    dropdownConfig: {
        unselectedLabeL: textMap("Choose"),
        options: [
            {'key': '1', label: textMap("Choice 1")},
            {'key': '2', label: textMap("Choice 2")},  
        ]
    }
  });
  // @end(MatrixDropDownItem)
}

export const MatrixDropDownCategoryItem = () => {
    // @code(MatrixDropDownCategoryItem)
    return SurveyItems.responsiveMatrix({
      itemKey:'t2',
      parentKey:'test',
      questionText: textMap("Matrix with drop down"),
      responseType: "dropdown",
      breakpoint: 'xl',
      rows:   [  
          {'key': 'rc3', label: textMap("A category"), role: 'category' },
          {'key': 'r1', label: textMap("Row 1"), role: 'row' },
          {'key': 'r2', label: textMap("Row 2"), role: 'row' },
          {'key': 'rc2', label: textMap("A second category"), role: 'category' },
          {'key': 'r3', label: textMap("Row 3"), role: 'row' },
          {'key': 'r4', label: textMap("Row 4"), role: 'row' },
      ],
      columns: [
          {'key': 'c1', label: textMap("Col 1")},
          {'key': 'c2', label: textMap("Col 2")},   
      ],
      dropdownConfig: {
          unselectedLabeL: textMap("Choose"),
          options: [
              {'key': '1', label: textMap("Choice 1")},
              {'key': '2', label: textMap("Choice 2")},  
          ]
      }
    });
    // @end(MatrixDropDownCategoryItem)
  }

  // Not used because not implemented yet.
  export const MatrixInputItem = () => {
    // @code(MatrixInputItem)
    return SurveyItems.responsiveMatrix({
      itemKey:'t2',
      parentKey:'test',
      questionText: textMap("Matrix with drop down"),
      breakpoint: 'xl',
      responseType: "numberInput",
      rows:   [  
          {'key': 'r1', label: textMap("Row 1"), role: 'row' },
          {'key': 'r2', label: textMap("Row 2"), role: 'row' },
          {'key': 'r3', label: textMap("Row 3"), role: 'row' },
      ],
      columns: [
          {'key': 'c1', label: textMap("Col 1")},
          {'key': 'c2', label: textMap("Col 2")},   
      ]
    });
    // @end(MatrixInputItem)
  }



export default [
    {
    name: 'MatrixDropDownItem',
    item: MatrixDropDownItem,
   },
   {
    name: "MatrixDropDownCategoryItem",
    item: MatrixDropDownCategoryItem
   },
   {
    name: "MatrixInputItem",
    item: MatrixInputItem
   }
] as ItemViewerDefinition[];
