# General Concepts

## Study, Survey

A Study, for this system is a set of surveys working together, associated with a set of [Participants](#participant).

## Survey System

The Survey System is the set of the [Survey Engine](../survey-engine) and the [Study Service](../study-service).

The [Survey Engine](../survey-engine) is the client part, dedicated to running a survey using a [Survey Definition](#survey-definition) and sending the response to the [Study Service](../study-service)

The [Study Service](../study-service/) is the backend part, with several roles:

- Manages and provides Survey Definition and Survey Context to a Survey Engine client
- Runs [study rules](../study-service/03-study-rules.mdx) when study events occur (e.g. when a survey response is submitted) 
- Runs the survey timer to update the `participant state` (by running rules associated with the `TIMER` event)

## Survey Definition

A Survey Definition is a formal document that specifies a survey. It embeds the survey structure (organization of items and groups), survey components (display or data collection elements), translations and logic (using [Expressions](./expressions)).
The Survey Definition is represented in JSON format.

A Survey is then executed by the Survey Engine, using the Survey Definition along with a [Survey Context](../survey-engine/05-context) (additional information about the data collection to be processes, such as participant flags, previous responses, ...). 

## Expression

An expression is the way in which survey and study logic is described. An expression can be evaluated to describe a condition (on a question or a response data), to trigger an operation with side effects (in a survey, for example by triggering a question to be shown, or in a study to add assign a new survey to be filled by a [participant](#participant) or to trigger a message to be sent to the participant or the researcher team).

Three types of Expressions are used in the system:

- *Survey Expression* (evaluated by [Survey Engine](../survey-engine) on the client side, while the survey is running.
   
- *Study Expression* & *Study Action* (evaluated by the [Study Service](../study-service), triggered by a study event, such as response submission).

*Survey and Study Expression* are evaluated to a value (like boolean, string, number), like a function. Conditions (triggering an action) always expect an expresstion to be evaluated as a boolean value.

*Study Action*, are not evaluated to a value, but are side-effect expressions. They can modify the [Participant](#participant)'s data (flags, assigned surveys) and trigger external actions (like sending a message to the participant or to the "team" holding the running the platform).

All expressions have the same structure, [described in the following page](./expressions)

## Participant

A *participant*, is the subject of the data collection. In this survey system, a *participant** is only represented by a set of properties that give a persistent state for the subject of the data collection (they are mostly defined by the study/survey designer, we do not manage credentials, login, username here. They are managed in the User Management Service). Participant is an abstract concept to represents the  subject of the data collection in a study/survey. It may or may not be a human depending on the study.

Participants and their associated data are described in the [Study service](../study-service/participants)

## Localized Text {#localized}

The [Survey Definition](#survey-definition) includes translations for all texts presented to the user.
The texts are provided in a small structure associating text and language code called Localized Text. A survey can contain the translations for multiple languages.
Many fields in a [Survey Definition](#survey-definition) contain this type of structure with all the translations.