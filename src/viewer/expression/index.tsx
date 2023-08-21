import { SurveySingleItemView } from "case-web-ui";
import React from "react";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { ViewerDefinition } from "../types";
import { Expression } from "survey-engine/data_types";

type ExpressionDef = Expression | (()=>Expression); 

export interface ExpressionViewProps extends ViewerDefinition {
    expr: ExpressionDef;
}

/**
 * ItemView provide Survey component UI with code snippet and json
 * The Component is rendered using a
 * @param props 
 * @returns 
 */
export const ExpressionView: React.FC<ExpressionViewProps> = (props) => {

    const expr = typeof(props.expr) == "function" ? props.expr(): props.expr;

    const json = JSON.stringify(expr);

    return <Tabs>
        <TabItem value="expr" label = "JSON" >
            { json }
        </TabItem>
        < TabItem value = "code" label = "Code (case-editor-tools)" >
            <CodeBlock language="ts" > { props.codeSnippet } </CodeBlock>           
        </TabItem>
    </Tabs>
}
