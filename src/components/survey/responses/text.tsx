import { SurveyItems } from "case-editor-tools/surveys";
import { text, ItemViewerDefinition } from "../../../viewer/response";
import React from "react";

export const TextItem = () => {
  // @code(textComponent)

  /**
   * The display helper creates a SurveyItem with a list of textual components
   * 
   * Each component here has the 'text' role and can show a list of text.
   * `style` option can be used to customize visual style of the text
   */

  return SurveyItems.display({
    itemKey:'t1',
    parentKey:'test',

    content: [ // List of texts to show
        
        {
            'role': 'text',
            content: [  // Content is a list of LocalizedObject, each can contain a text (or a expression, resolved during item rendering using response or context)
                text("A stylized text using 'h2' style variant")
            ],
            style: [ // Styles can be used to customize th rendering of the text
                {key: 'variant', value:'h2'}
            ]
        },
        {
            role: 'text',
            content:[ 
                text("A very intersting text") 
            ]
        }
   ]
  });
  // @end(textComponent)
}
 
export default [
    {
        name:'basicText',
        item: ()=> {
            // @code(basicText)
                /**
                 * The display helper creates a SurveyItem with a list of textual components
                 * 
                 * Each component here has the 'text' role and can show a list of text.
                 * `style` option can be used to customize visual style of the text
                 */

                return SurveyItems.display({
                    itemKey:'t1',
                    parentKey:'test',

                    content: [ // List of texts to show
                        {
                            role: 'text',
                            content:[ 
                                text("A very intersting text") 
                            ]
                        }                       
                    ]
                });
            // @end(basicText)
        }
        
    },
    {
        name:'textComponent',
        item: TextItem
    }
] as ItemViewerDefinition[]
