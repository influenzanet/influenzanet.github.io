import { SurveySingleItemView } from "case-web-ui";
import React from "react";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { ViewerProps } from "../types";
import { Expression } from "survey-engine/data_types";

interface ExpressionViewProps extends ViewerProps {
    expr: Expression;
}

/**
 * ItemView provide Survey component UI with code snippet and json
 * The Component is rendered using a
 * @param props 
 * @returns 
 */
export const ExpressionView: React.FC<ExpressionViewProps> = (props) => {

    const json = JSON.stringify(props.expr);

    return <Tabs>
        <TabItem value="expr" label = "JSON" >
            { json }
        </TabItem>
        < TabItem value = "code" label = "Code (case-editor-tools)" >
            <CodeBlock language="jsx" > { props.codeSnippet } </CodeBlock>           
        </TabItem>
    </Tabs>
}
