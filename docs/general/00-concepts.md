# General Concepts

## Survey Definition

A Survey Definition is a formal document fully specifiying a survey. The survey definition embeds the survey structure (organization of item and groups), survey components (display or data collection), translations and logic (using Rules Expressions)
Survey definition is represented in JSON format

## Expression

An expression is the way survey and study logic are described. An expression can be evaluated to describe a condition (on question, on response data), to trigger operation with side effect (in a survey, for example triggering a question to be shown, or in a study for example to add assign a new survey to be filled to a participant](#participant) or trigger a message sending).
2 kinds of Expression are used in the system : Survey Expression (evaluated in client side, during the survey running), Study Expression (evaluated in the server side, responding to study event, like submitting a response to a survey by a [participant](#participant) ).

## Participant
