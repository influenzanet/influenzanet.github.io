---
sidebar_label: Introduction
sidebar_class_name: green
---
# Survey Engine Overview

The survey engine runs a Survey on the client. By "running" a survey we means to display the survey elements (texts, images and the widgets used to collect the data) and apply the logic rules allowing the survey to react to the user inputs (like showing a question on some condition).

The survey engine, doesn't contains the survey itself, but it expects a [Survey Definition](../general/00-concepts.md#survey-definition) document to describe the specifications of the survey using a declarative language currently represented in [JSON](https://www.json.org/).

Note: The usual "question" is not a direct concept used in this engine, but we use a more general element called "Item" which can be used as a pure display element (section title, note) or as a collection of display elements (title/text) and data collection fields (what we usually call a "question").

A Survey is composed of different kinds of elements :

- [Survey structure](./structure): How Items are organized, grouped and defined
- [Survey Item](./item) : How an Item and its content is described (to be a "Question" or not), 
- [Surveys Components](./components/overview) : used to build an Item contents (texts, data collection fields) 
- [Survey Expressions](./expressions) : describing rules to control survey logic and reactive behaviors
- [Internationalization](./i18n) : How to define survey in different languages
- [Runtime Context](./context) : The runtime context (external information about the participant, the previous responses)

# About the Survey Engine

What we call a "survey" can be ambiguous it can refer to several things : the intended data collection (what we want to collect), and the survey implementation, the instrument (what we collect actually ).  

The Survey Engine is composed of two separated (and partly independent)

## Survey Definition

it's an abstract data structure, describing each survey elements organization and properties used to render the survey using a rendering engine. 
The *survey definition* doesn't collect anything by itself. It describes what we want to have and collect but do not define how it will be rendered.

For example (simplified), the survey definition will describe a component with a role 'singleChoiceGroup', with a list of sub components with the role of 'option'. 
From these elements, the rendering engine will display it as a list of radio button. Using the role 'multipleChoiceGroup' will render them as checkboxes.

This suppose a mapping between the components `role` and the UI components, and also enable its extensibility (the survey definition doesnt restrict the usable roles, you can define yours and map them to your own UI components).

## Survey UI

The survey engine is a program, that will interpret the survey definition, to render each element into a visual component.

Current implementation in Typescript is composed of 2 main librairies:

- [Survey Engine](https://github.com/influenzanet/survey-engine.ts). It runs the survey logic (but do not render the UI)
- [Case Web UI](https://github.com/coneno/case-web-ui). it provides the UI component to render the survey elements, using [React](https://react.dev/)

It's also possible to use extra UI components, to handle Survey Components that are not provided in the core UI library by [Extending the Survey Engine](./extending)