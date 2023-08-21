import { ExpressionViewProps } from "@site/src/viewer/expression";
import { SurveyEngine  } from "case-editor-tools/surveys";

/**
export type ClientSideSurveyExpName =
  // logic expression:
  'or' | 'and' | 'not' |
  // comparision methods:
  'eq' | 'lt' | 'lte' | 'gt' | 'gte' |
  'isDefined' |
  // client reference methods:
  'getContext' | 'getResponses' | 'getRenderedItems' |
  // client side object access methods:
  'getAttribute' | 'getArrayItemAtIndex' | 'getArrayItemByKey' | 'getObjByHierarchicalKey' | 'getNestedObjectByKey' |
  // query methods for previous names:
  'findPreviousSurveyResponsesByKey' | 'getLastFromSurveyResponses' | 'getPreviousResponses' | 'filterResponsesByIncludesKeys' | 'filterResponsesByValue' | 'getLastFromSurveyItemResponses' |
  'getSecondsSince' |
  'parseValueAsNum' |
  // client side shortcut methods:
  'hasResponse' | 'getResponseItem' | 'getResponseValueAsNum' | 'getResponseValueAsStr' | 'checkResponseValueWithRegex' | 'responseHasKeysAny' | 'responseHasKeysAll' | 'responseHasOnlyKeysOtherThan' | 'getSurveyItemValidation' |
  'timestampWithOffset' | 'dateResponseDiffFromNow' | 'countResponseItems';
 */

const defs: ExpressionViewProps[] = [

    {
        name:'client:or',
        expr: ()=> {
            // @code(client:or)
            return SurveyEngine.logic.or(
                SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),
                SurveyEngine.hasResponse('intake.Q2','rg.scg.1')
            )
            // @end(client:or)
        }
    },
    {
        name:'client:and',
        expr: ()=> {
            // @code(client:and)
            return SurveyEngine.logic.and(
                SurveyEngine.hasResponse('intake.Q1','rg.scg.1'),
                SurveyEngine.hasResponse('intake.Q2','rg.scg.1')
            )
            // @end(client:and)
        }
    },
    {
        name:'client:not',
        expr: ()=> {
            // @code(client:not)
            return SurveyEngine.logic.not(
                SurveyEngine.hasResponse('intake.Q1','rg.scg.1')
            )
            // @end(client:not)
        }
    },
    {
        name:'client:eq',
        expr: ()=> {
            // @code(client:eq)
            return SurveyEngine.compare.eq(
                SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),
                20
            )
            // @end(client:eq)
        }
    },
    {
        name:'client:lt',
        expr: ()=> {
            // @code(client:lt)
            return SurveyEngine.compare.lt(
                SurveyEngine.getResponseValueAsNum('survey.age','rg.age'),
                20
            )
            // @end(client:lt)
        }
    }
];

export default defs;