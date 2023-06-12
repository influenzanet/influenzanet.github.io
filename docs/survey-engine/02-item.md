# Survey Single Item

A Survey Item is the most common unit of a survey. It describes the content of a survey block, composed with visual components to define what is usually called as a "question" (a textual block and data collection fields) or purely visual components using only texts, or media.

It holds several properties :

- `validations` : a list of [validation rules](#validation-rules)
- `components` : a group component holding the [components tree](#survey-item-components) of the *Survey Item*. 
- `type` : an optional type name, used to define some [special kind of survey item](#special-survey-item)

## Survey Item Components

Components are the rendering block, used to define the content of a SingleItem. They can be composed and organized to create simple survey block (textual note, a simple question) or complex question (several text block, several interactive data collection fields, ...).
As the Survey Items, they can also react to logic rules to make them interactive. For example each component visibility can be controlled by a rule, making it visible only if a condition (based for example on the responses) is fulfilled.

In the *Survey Definition*, Every component has a specific `role`. For example the label, the input widget or an option is a component. The `role` defines the type of the component, and drives the way it's rendered by the UI library.

Several kind of components are proposed :

- Display component, describing the visual parts of the question like texts (title, description, tooltip)
- Response component describing the data collection process
- Group component containing a list of other components (the first level component of a `SingleItem` is a Group component, with the `role` of  'root')

Components can also be described as a tree, nodes as Group components, and leaf with other kinds of components.

Structural roles (they are used in the definition, but you probably never need to create them manually):

- 'root' : the group component of a survey item, containing all the components of a Survey item.
- 'responseGroup' : Contains the responses components

Common display roles:

- 'helpGroup': Group of textual components dedicated to create help boxes (tooltip for example)
- 'text' : a display component describing text to show (for example the label of the question)

Response dedicated roles:

- 'singleChoiceGroup'
- dropDownGroup
- multipleChoiceGroup
- dateInput
- input
- numberInput
- sliderNumeric, sliderNumericRange, sliderCategorical
- 'option' : component describing an option in a list of possible choices

Common Fields of components :

- `content`, `description` : the visual/textual contents
- `displayCondition`: rules for displaying the component
- `properties`: properties to describes constraints and parameters of a component (like min/max value)
- `disabled` : rules for disabling component

For group component only
- `order` : order of components (for Group component), using an expression, 'sequential' named expression is commonly used

Most of fields are represented as structure called `Expression`. They can be evaluated to a value (boolean, string, value) at runtime allowing to define complex rules to dynamically determine a field value.

### Keys

Component can also have keys uniquely identifying the component in the Item.

Keys are mandatory for Response component, because they are used as to identify the response field. An item can output several values, and the component provided the data is identified by its key in the response data structure.

# Validation Rules

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