import React from "react";
import { ItemView, ItemViewProps,  } from "../../../viewer/response";
import { getSnippet } from "@site/src/snippets";
// Load Modules and the raw version to provide code snippets

// Single Choice
import singleChoice from "./singleChoice";
// Single Choice
import dateInput  from "./dateInput";
import text from "./text";
import { ViewerRegistry } from "@site/src/viewer";

const registry = new ViewerRegistry<ItemViewProps>();

export const getSurveyViewer = (name: string) => {
    
    const def = registry.get(name);

    if(!def) {
        return <span>Unknown component {name}</span>;
    }

    return <ItemView {...def}/>;
}
 
registry.add(singleChoice);
registry.add(dateInput);
registry.add(text);

