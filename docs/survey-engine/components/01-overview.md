---
sidebar_label: Components Overview
---
# Survey Item Components

Components are the content block of a Survey Item. A Survey Item can contains any number of needed components. For example the label, the input widget or an option is a component. They are organized in a hierarchical way (as a tree) combining group components (containing a list of component) and single component dedicated for a specific content (text, field,...).

The first level component of a `SingleItem` is a Group component, called the "root" components, containing all the components of the item. 

## Component role

The `role` defines the type of the component, and drives the way it's rendered by the UI library.

Several kind of components are proposed :

- [Display components](./display), describing the visual parts of the question like texts (title, description, tooltip)
- [Response component](./response) describing the data collection process
- Group component containing a list of other components (notable kind are 'root' and 'responseGroup' and some response kind like 'singleChoiceGroup')

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

## Common Fields of components

- `content`, `description` : the visual/textual contents
- `displayCondition`: rules for displaying the component
- `properties`: properties to describes constraints and parameters of a component (like min/max value)
- `disabled` : rules for disabling component

For group component only
- `order` : order of components (for Group component), using an expression, 'sequential' named expression is commonly used

Most of fields are represented as structure called `Expression`. They can be evaluated to a value (boolean, string, value) at runtime allowing to define complex rules to dynamically determine a field value.

## Component Keys

Component can also have keys uniquely identifying the component in the Item.

Keys are mandatory for Response component, because they are used as to identify the response field. An item can output several values, and the component provided the data is identified by its key in the response data structure.