import React from "react";
import { ItemView, ItemViewProps,  } from "../../../viewer/response";
import { getSnippet } from "@site/src/snippets";
// Load Modules and the raw version to provide code snippets

import { ViewerRegistry } from "@site/src/viewer";

import choices from "./choices";
import dateInput  from "./dateInput";
import text from "./text";
import textInput from "./textInput";
import matrix from "./matrix";
import cloze from "./cloze";
import likert from "./likert";

const registry = new ViewerRegistry<ItemViewProps>();

export const getSurveyViewer = (name: string) => {
    
    const def = registry.get(name);

    if(!def) {
        return <span>Unknown component {name}</span>;
    }

    return <ItemView {...def}/>;
}
 
registry.add(choices);
registry.add(dateInput);
registry.add(text);
registry.add(textInput);
registry.add(matrix);
registry.add(cloze);
registry.add(likert);