import { ViewerRegistry } from "@site/src/viewer";
import { ExpressionView, ExpressionViewProps } from "@site/src/viewer/expression";
import React from "react";

import clientExpressions from './client';
import studyExpressions from './study';

const viewers = new ViewerRegistry<ExpressionViewProps>();

viewers.add(clientExpressions);
viewers.add(studyExpressions);
export const getExpressionViewer = (name: string) => {
    const def = viewers.get(name);
    if(!def) {
        return <span>Unknown component {name}</span>;
    }

    return <ExpressionView {...def}/>;
}