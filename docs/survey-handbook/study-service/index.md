---
sidebar_label: Study Service
sidebar_class_name: green
---

The **Study Service** is the backend part of the Survey system, it manages data of a study like survey definitions and participants' responses :

More specifically it manages several kind of data:

- [Participants](./participants)
- [Study](./study)
- [Survey Responses](./responses)

## Study Service Database {#database}

The study Database contains several collections about the studies of an [Instance](/docs/system/architecture#instances)

General collection

- study-infos : Studies available for this instance. Each document describe [study properties](./study)

Others collections will be prefixed by the name of the study (field `key` of each `study-infos` document)
- [study]_participants : [Participants]
- [study]_surveys: Available survey of the study
- [study]_surveyResponses: the [responses data submitted](./responses)

For example, for a 'grippenet' study name, collection names will be grippenet_participants, grippenet_surveys, ...
