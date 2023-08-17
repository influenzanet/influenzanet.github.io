import { SurveySingleItemView } from "case-web-ui";
import React from "react";
import { ResponseItem, SurveyItem, Survey, LocalizedObject } from "survey-engine/data_types";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { SurveyEngineCore } from "survey-engine/engine";
import { ViewerDefinition } from "../types";

export type SurveyItemProvider = SurveyItem | ( () => SurveyItem);

// Create an english text 
export const textMap = (str: string) => {
    return new Map<string, string>([ ['en', str] ]);
}

// Create a Localized Object for english text
export const text = (str: string): LocalizedObject => {
    return {
        'code': 'en',
        'parts': [
            str
        ]
    }
}

const invalidWarning = "Please check your response";

const resolveItem = (surveyItem : SurveyItemProvider) => {
    const item =  typeof(surveyItem) == "function" ? surveyItem() : surveyItem;
    
    // Now resolve texts using survey engine and Survey
    // Mock full a survey
    const survey: Survey = {
        versionId: '1',
        surveyDefinition: {
            key: 'test',
            items: [
                item
            ]
        }
    }
    const engine = new SurveyEngineCore( survey, {},[], true);
    // Render the survey by resolving all expressions
    const resolvedItem =  engine.getRenderedSurvey().items.at(0)
    //console.log(resolvedItem);
    return resolvedItem;
}

/**
 * Simple Item viewer, basic helper to show an item with only optional prefills
 * @param props S
 * @returns 
 */
export const DefaultItemViewer = (props:  ItemViewProps) => {
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

export interface ItemViewerDefinition extends ViewerDefinition {
    item: SurveyItemProvider
    prefill?: ResponseItem
}

export interface ItemViewProps extends ItemViewerDefinition {
    customViewer?: React.ReactNode // Will use the DefaultItemViewer with this configuration if not provided
}

/**
 * ItemView provide Survey component UI with code snippet and json
 * The Component is rendered using a
 * @param props 
 * @returns 
 */
export const ItemView : React.FC<ItemViewProps> = (props) => {
    
    const item = resolveItem(props.item);

    const viewerConf = { ...props, item : item}

    const surveyViewer = props.customViewer ?? <DefaultItemViewer {...viewerConf }/>

    const json = props.json ?? item;

    return  <Tabs>
            <TabItem value="item" label="Component">
            {surveyViewer}
            </TabItem>
            <TabItem value="code" label="Code (case-editor-tools)">
                <CodeBlock language="jsx">{ props.codeSnippet }</CodeBlock>
                <span style={{"fontSize":".8em", "fontStyle":"italic"}}>To simplify code, helpers <code>textMap()</code> and <code>text()</code> generate respectively a Map and a Localized Text for the english text provided. See Internationalization for more details of translation.</span>
            </TabItem>
            {json ? <TabItem value="json" label="JSON"><CodeBlock language="json">{ JSON.stringify(json, undefined, 2) }</CodeBlock></TabItem> : undefined}
        </Tabs>
}
