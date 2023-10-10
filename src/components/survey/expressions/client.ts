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
    },
    {
        name:'client:timestampWithOffset',
        expr: ()=> {
            // @code(client:timestampWithOffset)
            return SurveyEngine.timestampWithOffset({years: -1})
            // @end(client:timestampWithOffset)
        }
    },
    {
        name:'client:hasResponse',
        expr: ()=> {
            // @code(client:hasResponse)
               // Check if the question intake.Q5 has response int the MultipleChoice (mcg) in the Response Group (rg)
               return SurveyEngine.hasResponse('intake.Q5', 'rg.mcg')
            // @end(client:hasResponse)
        }
    },
    {
        name:'client:getAttribute',
        expr: ()=> {
            // @code(client:getAttribute)
               // Extract participantFlags from context and 'adult' element from it
               return SurveyEngine.getters.getAttribute(
                SurveyEngine.getters.getAttribute(SurveyEngine.getters.getContext(), 'participantFlags'),
                'adult'
                )
            // @end(client:getAttribute)
        }
    },
    {
        name:'client:getAttribute2',
        expr: ()=> {
            // @code(client:getAttribute2)
               // Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)
               return SurveyEngine.participantFlags.hasKeyAndValue("adult", "1")
            // @end(client:getAttribute2)
        }
    },
    {
        name:'client:checkResponseValueWithRegex',
        expr: ()=> {
            // @code(client:checkResponseValueWithRegex)
               // Extract 'adult' from participantFlags and test if it's equal to '1' (flags value are strings)
               return SurveyEngine.checkResponseValueWithRegex('intake.Q6', 'rg.1', '/[0-9]{5}/')
            // @end(client:checkResponseValueWithRegex)
        }
    },
    {
        name:'client:responseHasKeysAll',
        expr: ()=> {
            // @code(client:responseHasKeysAll)
               // 'intake.Q1' multiplechoice group has, at least option checked with key 'cat' AND 'dog' (regardless other checked response)
               return SurveyEngine.responseHasKeysAll('intake.Q1','rg.mcg', 'cat', 'dog')
            // @end(client:responseHasKeysAll)
        }
    },
    {
        name:'client:responseHasOnlyKeysOtherThan',
        expr: ()=> {
            // @code(client:responseHasOnlyKeysOtherThan)
              // 'intake.Q1' multiplechoice group has NOT option checked with key 'cat' NOR 'dog' (regardless other checked response)
              return SurveyEngine.responseHasOnlyKeysOtherThan('intake.Q1','rg.mcg', 'cat', 'dog')
            // @end(client:responseHasOnlyKeysOtherThan)
        }
    },
    {
        name:'i18n:dateResponseDiffFromNow',
        expr: ()=> {
            // @code(i18n:dateResponseDiffFromNow)
              return SurveyEngine.dateResponseDiffFromNow("survey.age","rg.date", "years", true);
            // @end(i18n:dateResponseDiffFromNow)
        }
    },
    
];

export default defs;