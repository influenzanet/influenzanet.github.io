# Survey Single Item

A Survey Item is the most common unit of a survey. It describes the content of a survey block, composed with visual components to define what is usually called as a "question" (a textual block and data collection fields) or purely visual components using only texts, or media.

It holds several properties :

- `validations` : a list of [validation rules](#validation-rules)
- `components` : a group component holding the [components tree](#survey-item-components) of the *Survey Item*. 
- `type` : an optional type name, used to define some [special kind of survey item](#special-survey-item)

## Survey Item Components

Components defines the content of an SingleItem. They can be composed and organized to create simple survey block (textual note, a simple question) or complex question (several text block, several interactive data collection fields, ...).
As the Survey Items, they can also react to logic rules to make them interactive. For example each component visibility can be controlled by a rule, making it visible only if a condition (based for example on the responses) is fulfilled.

The [components](./components/overview)

# Validation Rules

Validation rules is a set of rules applied when the survey is about to be submitted.

Each validation rule is defined by several fields :

- a `type` : 'hard' or 'soft',  'hard' will block the survey submission, soft wont block and can be used to show warning message for example.
- an `id` : identifier of the validation rule, this is required to be able to test the value of this validation rule 
- an `rule` : an [expression](./expressions) to be evaluated to true/false 


# Special Survey Item

Special survey Item are defined using the `type` property of a SurveyItem.

## Page break

```yaml
type: 'pageBreak'
```

A Survey Item with this type value, will trigger the display of subsequent items in another page and activate the page progress toolbar in the survey view component.


## Survey Ending

```yaml
type: 'surveyEnd'
```

A Survey Item with this type value, will be used as a final block in the survey. Holding the validation button.