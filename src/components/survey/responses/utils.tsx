import { SurveySingleItemView } from "case-web-ui";
import React from "react";
import { ResponseItem, SurveyItem } from "survey-engine/data_types";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const _T = (str: string) => {
    return new Map<string, string>([ ['en', str] ]);
}

type SurveyItemProvider = SurveyItem | ( () => SurveyItem);

interface SurveyItemProps {
    item: SurveyItemProvider
    prefill?: ResponseItem
}

const invalidWarning = "Please check your response";

const resolveItem = (item : SurveyItemProvider) => {
    return typeof(item) == "function" ? item() : item;
}


/**
 * Simple Item viewer, basic helper to show an item with only optional prefills
 * @param props S
 * @returns 
 */
export const DefaultItemViewer = (props:  SurveyItemProps) => {
    return <SurveySingleItemView
        renderItem={resolveItem(props.item)}
        responsePrefill={props.prefill}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
        />
}
    
const snippetExp = /.*\/\/\s*--snippet--\s(\s*return\s*)?(.*)\/\/\s*--end--.*/gms

/**
 * Snippet extract from code portions between  
 * // --snippet-- 
 * ...
 * // --end--
 * @param code 
 * @returns 
 */
const snippet = function(code: string) {
    return code.replace(snippetExp, "$2");
}

interface ItemViewProps {
    viewer?: React.ReactNode
    defaultViewer?: SurveyItemProps
    json?: object
    code: string
}

export const ItemView : React.FC<ItemViewProps> = (props) => {
     var json : object = undefined;

    if(props.defaultViewer) {
        props.defaultViewer.item = json = resolveItem(props.defaultViewer.item);
    }

    const surveyViewer = props.viewer ?? <DefaultItemViewer {...props.defaultViewer }/>

    if(!json) {
        json = props.json;
    }

    return  <Tabs>
            <TabItem value="item" label="Component">
            {surveyViewer}
            </TabItem>
            <TabItem value="code" label="Code (case-editor-tools)">
                <CodeBlock language="jsx">{ snippet(props.code) }</CodeBlock>
            </TabItem>
            {json ? <TabItem value="json" label="JSON"><CodeBlock language="json">{ JSON.stringify(json, undefined, 3) }</CodeBlock></TabItem> : undefined}
        </Tabs>
}