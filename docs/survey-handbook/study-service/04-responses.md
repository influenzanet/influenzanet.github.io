---
sidebar_label: Response data
---

## General structure

Each survey response will create a new entry in the [surveyResponses collection](./#database)

```ts
{
    participantID: string, // name of the participant who responded to the survey
    key: string, // Key of the survey 
    versionID: string, // String identifying the version of the survey (same key in Survey collection)
    openedAt: int, // Timesptamp when survey has been Opened on the client (seconds)
    submittedAt: int, // Timestamp when survey has been submited on the client (seconds)
    arrivedAt: int, // Server timestamp when the survey has arrived in the backend ?
    context: Record<string,string> // Key values info about the filling context
    responses: ItemResponse[] // List of ItemResponse object,
}
```

Context contains several common keys:
- `language` : Code of the language used to render the survey
- `engineVersion`: Version of the survey-engine library
- `session`: Session id if the survey is run under a SurveySession

## ItemResponse

Each `responses` entry is an object corresponding to the output of each [SurveyItem](../survey-engine/item)

An ItemResponse contains:

```ts
    key: string, // item key
    meta: ResponseMeta // Metadata about the response of this item
    items?: ItemResponse[] // If item is a group item, it can contains sub items response
    response?: Response // If item is Single Item
    confidentialMode: string
```

This structure can be hierarchical for complex surveys. 

In case of a single item response, the response field will contains the output of each Response components (defining data entry, an item can contains several response components in its Response Group).

Response object is defined as :

```ts
{
    key: string // Key of the response component
    value?: string // Value of the response (if SingleItemComponent, will not be defined otherwise), if component is not key based
    dtype?: string // Data type of the value, if provided (can be omitted for string/number)
    items: Response[] // Children components response
}
```

The reponse is in the tree : The structure of the response will depend on how components are organized in the item.
The simplest will only have 2 levels : 'rg' component (for ResponseGroup) and 

Remember that, all items have **one** root ResponseGroup component always called `rg`, the response structure will always have
an `rg` entry as root response key, and then the response of children components in items.

Some components, like categorical inputs (SingleChoiceGroup, MultipleChoiceGroup) will returns the key of the selected response(s) and dont provide value.

For example, a SingleResponseGroup, will output this kind of structure if the response option with key '1' is selected:

```json
{
    "key":"rg",
    "items: [
        {
            "key":"scg",
            items: [
                { "key": "1" }
            ]
        }
    ]
}
```


