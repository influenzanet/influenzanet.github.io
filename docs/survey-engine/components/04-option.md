
# Option component

*Option* component is used in several *Response* components to represent a list of possible choices.

Each option has several properties:

Mandatory:

- `key`: This value must identify uniquely the option in the option list. This value is used as the response value if this option is selected.
- `role`: The role defines the kind of element (see below), it can be used to customize the option

Optional properties:

- `content`: [Localized Text](../../general/concepts#localized) for the label
- `items`: list of sub options
- `description`: 

- `displayCondition`: [Expression](../expressions) to control visibility of this option 
- `disabled`:  [Expression](../expressions) to control 
- `style`: list of style properties
- `optionProps`: Properties useable to define some extra options for some roles, each can be an [ExpressionArg](../expressions)
  - `min`, `max` : range for numeric input
  - `stepSize` : step value
  - `dateInputMode` : Kind of date input (described in [date component](./response/date))

## Option roles

Option roles

| Role           | Cloze  | SingleChoice | MultipleChoice |
| ---------------| :-----:| :-----------:| :------------: |
| text           |   X    |       X      |       X        |
| input          |   X    |       X      |       X        |
| numberInput    |   X    |       X      |       X        |
| dateInput      |   X    |       X      |                |
| timeInput      |   X    |              |       X        |
| markdow        |   X    |              |                |
| lineBreak      |   X    |              |                |
| dropDownGroup  |   X    |              |                |
| cloze          |        |      X       |       X        |
| dateDisplay(*) |        |              |                |

## Complex Options

An option Component can be a group component with a list of children.

This can be used for 2 cases :

- Provide a styled option label (each child of the option component will hold a text portion with a specific style)
- For cloze option, to mix input and textual parts in the same paragraph.
 