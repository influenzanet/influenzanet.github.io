import { ExpressionViewProps } from "@site/src/viewer/expression";
import { StudyEngine as study, StudyEngineActions  } from "case-editor-tools/expression-utils/studyEngineExpressions";

const defs: ExpressionViewProps[] = [

    {
        name:'study:rules-assign-survey',
        expr: ()=> {
            // @code(study:rules-assign-survey)
              return study.ifThen(
                study.checkEventType('SUBMIT'),
                study.ifThen(
                    study.checkSurveyResponseKey('profile'),
                    study.participantActions.assignedSurveys.remove('womenstudy', 'all'),
                    study.participantActions.assignedSurveys.add('womenstudy', "prio"),
                )
              );
            // @end(study:rules-assign-survey)
        }
    },

    {
        name:'study:rules-assign-question',
        expr: ()=> {
            // @code(study:rules-assign-question)
            return study.ifThen(
                study.checkEventType('SUBMIT'),
                study.ifThen(
                    study.checkSurveyResponseKey('profile'),
                    study.if(
                        study.and(
                            study.hasResponseKeyWithValue('profile.gender','rg.scg.1', 'woman'),
                            study.lt(
                                study.getResponseValueAsNum('profile.age', 'rg.date'),
                                study.timestampWithOffset({years: -50})
                            )
                        ),
                        study.participantActions.updateFlag('women50', 1),
                        study.participantActions.updateFlag('women50', 0)
                    )
                )
              );
            // @end(study:rules-assign-question)
        }
    },

];

export default defs;