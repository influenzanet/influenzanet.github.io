# General Concepts

## Study, Survey

A Study, for this system is a set of surveys working together, associated to a set of [Participants](#participant).

## Survey System

The Survey System is the set of the [Survey Engine](../survey-engine) and the [Study Service](../study-service) allowing all the 

The [Survey Engine](../survey-engine) is the client part, dedicated to run a survey using a [Survey Definition](#survey-definition) and sending the response to the [Study Service](../study-service)

The [Study Service](../study-service) is the backend part, with several roles, it manage and provides Survey Definition and Survey Context to a Survey Engine client, it processes event based rules (like when a survey response is submitted) to update the participant state.

## Survey Definition

A Survey Definition is a formal document specifying a survey. The survey definition embeds the survey structure (organization of item and groups), survey components (display or data collection), translations and logic (using Rules Expressions).
Survey definition is represented in JSON format.

A Survey is run by the Survey Engine, along with a Survey Context (extra information about the run, like flags.)

## Expression

An expression is the way survey and study logic are described. An expression can be evaluated to describe a condition (on question, on response data), to trigger operation with side effect (in a survey, for example triggering a question to be shown, or in a study for example to add assign a new survey to be filled to a participant](#participant) or trigger a message sending).

Three kind of Expression are used in the system:

- *Survey Expression* (evaluated by [Survey Engine](../survey-engine) on client side, during the survey running.
   
- *Study Expression* & *Study Action* (evaluated by the [Study Service](../study-service), triggered by study event, like response submission).

*Survey and Study Expression* are evaluated to a value (like boolean, string, number), like a function.

*Study Action*, are not evaluated to a value, but are updating the [Participant](#participant) state (flags, assigned surveys) and can trigger some external actions (like sending a message to the participant or to the "team" holding the running the platform).

## Participant

A *participant*, is the subject of the data collection. In this Survey system, a *participant** is only represented by a set of properties giving a persistent state for the subject of the data collection (they are mostly defined by the study/survey designer, we dont manage credentials, login, username here,). So participant is an abstract concept to design a context/state of a subject in a study/survey. It can be a human, or not depending of the study.

Participants and associated data are described in [Study service](../study-service/participants)

## Localized Text {#localized}

The [Survey Definition](#survey-definition) includes translations for all text to be presented to the user.
The texts are provided in a little structure associating text and language code called Localized Text. A survey can contain the translations for several languages.
Many fields in a [Survey Definition](#survey-definition) contains this kind of structure containing all the translations.