/* This file is generated by scripts/snippet.js do not edit by hand
* To define a snippet, wrap the code by the comments tag
* // @code(snippetName) 
*   ... you code snippet
* // @end(snippetName)
*
* The snippetName must be unique (you can use -, : and word characters, like "item:my-snippet" 
*/

 export const snippetsData = {
 "client:or": "SurveyEngine.logic.or(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),\n            SurveyEngine.hasResponse('intake.Q2','rg.scg.1')\n            )\n            ",
 "client:and": "SurveyEngine.logic.and(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),\n            SurveyEngine.hasResponse('intake.Q2','rg.scg.1')\n            )\n            ",
 "client:not": "SurveyEngine.logic.not(\n            SurveyEngine.hasResponse('intake.Q1','rg.scg.1')\n            )\n            ",
 "client:eq": "SurveyEngine.compare.eq(\n                SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),\n                20\n            )\n            ",
 "client:lt": "SurveyEngine.compare.lt(\n            SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),\n            20\n            )\n            ",
 "client:timestampWithOffset": "SurveyEngine.timestampWithOffset({years: -1})\n            ",
 "client:hasResponse": "// Check if the question intake.Q5 has response int the MultipleChoice (mcg) in the Response Group (rg)\n               return SurveyEngine.hasResponse('intake.Q5', 'rg.mcg')\n            ",
 "client:getAttribute": "// Extract participantFlags from context and 'adult' element from it\n               return SurveyEngine.getters.getAttribute(\n                SurveyEngine.getters.getAttribute(SurveyEngine.getters.getContext(), 'participantFlags'),\n                'adult'\n                )\n            ",
 "client:getAttribute2": "// Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)\n               return SurveyEngine.participantFlags.hasKeyAndValue(\"adult\", \"1\")\n            ",
 "client:checkResponseValueWithRegex": "// Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)\n               return SurveyEngine.checkResponseValueWithRegex('intake.Q6', 'rg.1', '/[0-9]{5}/')\n            ",
 "client:responseHasKeysAll": "// 'intake.Q1' multiplechoice group has, at least option checked with key 'cat' AND 'dog' (regardless other checked response)\n               return SurveyEngine.responseHasKeysAll('intake.Q1','rg.mcg', 'cat', 'dog')\n            ",
 "client:responseHasOnlyKeysOtherThan": "// 'intake.Q1' multiplechoice group has NOT option checked with key 'cat' NOR 'dog' (regardless other checked response)\n              return SurveyEngine.responseHasOnlyKeysOtherThan('intake.Q1','rg.mcg', 'cat', 'dog')\n            ",
 "dateInput": "SurveyItems.dateInput({\n    itemKey: 'q1',\n    parentKey: 'test',\n    questionText:textMap(\"A date question\"),\n    dateInputMode: 'YMD',\n  });\n  ",
 "singleChoice": "SurveyItems.singleChoice({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: textMap(\"Single Choice Example \"),\n    responseOptions:[\n        {'key': '1', content: textMap(\"My Option\"), role: 'option' },\n    ]\n  });\n  ",
 "textComponent": "/**\n   * The display helper creates a SurveyItem with a list of textual components\n   * \n   * Each component here has the 'text' role and can show a list of text.\n   * `style` option can be used to customize visual style of the text\n   */\n\n  return SurveyItems.display({\n    itemKey:'t1',\n    parentKey:'test',\n\n    content: [ // List of texts to show\n        \n        {\n            'role': 'text',\n            content: [  // Content is a list of LocalizedObject, each can contain a text (or a expression, resolved during item rendering using response or context)\n                text(\"A stylized text using 'h2' style variant\")\n            ],\n            style: [ // Styles can be used to customize th rendering of the text\n                {key: 'variant', value:'h2'}\n            ]\n        },\n        {\n            role: 'text',\n            content:[ \n                text(\"A very intersting text\") \n            ]\n        }\n   ]\n  });\n  ",
 "basicText": "/**\n                 * The display helper creates a SurveyItem with a list of textual components\n                 * \n                 * Each component here has the 'text' role and can show a list of text.\n                 * `style` option can be used to customize visual style of the text\n                 */\n\n                return SurveyItems.display({\n                    itemKey:'t1',\n                    parentKey:'test',\n\n                    content: [ // List of texts to show\n                        {\n                            role: 'text',\n                            content:[ \n                                text(\"A very intersting text\") \n                            ]\n                        }                       \n                    ]\n                });\n            ",
 "snippetName": "*   ... you code snippet\n* "
};