import React from "react";
import { ItemView, ItemViewProps, ViewerDefinition } from "./utils";

// Load Modules and the raw version to provide code snippets

// Single Choice
import singleChoice from "./singleChoice";
import singleChoiceCode from "!!raw-loader!./singleChoice";

// Single Choice
import dateInput  from "./dateInput";
import DateInputCode from "!!raw-loader!./dateInput";

import text from "./text";
import TextCode from "!!raw-loader!./text";

// A module can export one viewer or several
type ModuleDefinition = ViewerDefinition | ViewerDefinition[];

// Known viewers (ViewerDefinition + resolved code snippet from loaded code)
const viewers = new Map<string, ItemViewProps>;

/**
 * Code Snippet extract from code portions between 
 * // --code-- 
 * ...
 * // --end--
 * 
 * With name
 * // --code:myname--
 * // --end:myname--
 * 
 * @param code 
 * @returns 
 */
const snippet = function(code: string, name?:string) {
    const p = name ? ':'+name : '';    
    const pattern = ".*\\/\\/\\s*--code"+p+"\\s*--\\s(\\s*return\\s*)?(.*)\\/\\/\\s*--end"+p+"\\s*--.*";
    const snippetExp = new RegExp(pattern,"gms");
    console.log(pattern);
    return code.replace(snippetExp, "$2");
}

const registerViewer = (def: ViewerDefinition, codeText: string) => {
    const codeSnippet = snippet(codeText, def.code);
    viewers.set(def.name, {...def, codeSnippet: codeSnippet });
}

const register = (defs: ModuleDefinition, codeText: string ) => {
    if(Array.isArray(defs)) {
        defs.forEach(d => {
            registerViewer(d, codeText)
        });
    } else {
        registerViewer(defs, codeText)
    }
}

export const getSurveyViewer = (name: string) => {
    
    const def = viewers.get(name);

    if(!def) {
        return <span>Unknown component {name}</span>;
    }

    return <ItemView {...def}/>;
}
 

// Assemble module with code snippets
register(singleChoice, singleChoiceCode);
register(dateInput, DateInputCode);
register(text, TextCode);

