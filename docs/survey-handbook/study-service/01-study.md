---
sidebar_label: Study
---

# Study

A *Study* is the hightest level data unit of the survey system. A platform instance can manage multiple studies, but studies are considered as **independent** and are not intended to share participants and/or surveys from each other in the common use case.

*Study* here is not the exactly the same as what we might mean in the epidemiological field and can be more global (think about namespace or global project). If several epidemiological studies are intended to share the same participants, or data across surveys (to share participant data) they are ancillary studies to a more global project (which is called a "Study" for the platform). 

A *Study* contains (related entities):
- Surveys, used by the [Survey Engine](../survey-engine/) to collect data from participants
- A set of [Participants](./participants)
- A set of [rules](./study-rules),that react to study events

And have some properties:
- `Key`: Uniquely identifyies the study (used to refer to it in administration tools)
- `SecretKey`: A secret value used by [participant mapping operator](./participants#mapping)
- Some labelling properties (title, description, ...)
- `SystemDefaultStudy` flag: indicates if the study is the one to show to participant if none is selected (if multiple studies are defined)
- Start and end date
- Status (can be 'active' or 'inactive')
- Notification subscriptions to be able to send notification on study event

## Study Events

During the life of a study, several types of event can occur and each of which can trigger operations on the study, defined by the [Study Rules](./study-rules)

The current events handled by the system are:

- `ENTER`: When a participant joins a study
- `TIMER`: When then study timer runs
- `SUBMIT`: When a participant submits a survey response
- `MERGE`: (implemented ?)
- `LEAVE`: When a participant leaves a study (implemented ?)

## Study Timer

An internal timer runs at a specified frequency (defined in the service configuration) and trigger a `TIMER` event. It can be used to perform regular actions on a study or participants.

