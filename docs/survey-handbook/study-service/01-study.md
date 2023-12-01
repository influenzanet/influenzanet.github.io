---
sidebar_label: Study
---

A *Study* is the hightest level data entity of the survey system. An platform's instance can manage several studies but studies are considered as **independent** and are not intended to share participants and or surveys from each other.

From an epidemiological point of view a system *Study* is a broader concept than what we can mean as study in the field (think about namespace or global project). If several epidemiological studies are intended to share the same participants, or data across surveys (to share participants data) they are ancillaries studies for a more global project (which is the system "Study" for the platform). 

A *Study* contains (related entities):
- Surveys
- A set of [Participants](./participants)
- A set of rules, reacting to study events

And have some properties:
- `Key`: Identifiying the study (used to refer it in administration tools)
- `SecretKey`: A secret value used of [participant mapping](./participants#mapping)
- Some labelling properties (title, description, ...)
- SystemDefaultStudy flag: indicate the study is the one to show to participant if none is selected (in case of several studies are defined)
- Start and Ending date
- Status (can be 'active' or 'inactive')
- Notification Subscriptions to be able to sed notificiation on study event

## Study Events

During the life of a study, several kind events can occur and each can trigger operations on study, defined by the [Study Rules](./study-rules)

- `ENTER`: When a participant enters a study
- `TIMER`: When then study timer is run
- `SUBMIT`: When a survey response si submitted by a participant
- `MERGE`: (implemented ?)
- `LEAVE`: When a participant leave a study (implemented ?)

## Study Timer

An internal timer runs at a given frequency (defined in the service configuration) and trigger a `TIMER` event. It can be used to perform regular action on study or participants.

