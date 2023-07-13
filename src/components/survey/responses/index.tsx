import React from "react";
import { ItemView } from "./utils";

// Single Choice
import { SingleChoiceViewer } from "./singleChoice";
import singleChoiceCode from "!!raw-loader!./singleChoice";

// Single Choice
import { DateInputViewer } from "./dateInput";
import DateInputCode from "!!raw-loader!./dateInput";

export const getSurveyViewer = (name: string) => {
    
    switch(name) {
        case 'singleChoice':
            return <ItemView defaultViewer={SingleChoiceViewer} code={singleChoiceCode} />;
            break;
        case 'dateInput':
            return <ItemView defaultViewer={DateInputViewer} code={DateInputCode} />;

        default:
            return <span>Unknown component {name}</span>
    }
}
 