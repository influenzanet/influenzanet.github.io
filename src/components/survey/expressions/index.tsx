import { ViewerRegistry } from "@site/src/viewer";
import { ExpressionView, ExpressionViewProps } from "@site/src/viewer/expression";
import React from "react";

import clients from './client';

const viewers = new ViewerRegistry<ExpressionViewProps>();

viewers.add(clients);

export const getExpressionViewer = (name: string) => {
    const def = viewers.get(name);
    if(!def) {
        return <span>Unknown component {name}</span>;
    }

    return <ExpressionView {...def}/>;
}