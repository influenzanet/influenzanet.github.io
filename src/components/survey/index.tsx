import 'case-web-ui/build/scss/theme-default.scss';
import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from '@docusaurus/useIsBrowser';

import { getSurveyViewer } from './responses';
import { getExpressionViewer } from './expressions';

interface SurveyComponentProps {
    name: string
}

interface ExpressionViewerProps {
    name: string;
}

export const SurveyComponent: React.FC<SurveyComponentProps>= (props) => {
    const isBrowser = useIsBrowser();
    if(isBrowser) {
        require('bootstrap/dist/js/bootstrap.bundle');
        return getSurveyViewer(props.name);
    }
    return 'Only online';

}

export const ExpressionViewer: React.FC<ExpressionViewerProps>= (props) => {
    const isBrowser = useIsBrowser();
    if(isBrowser) {
        require('bootstrap/dist/js/bootstrap.bundle');
        return getExpressionViewer(props.name);
    }
    return 'Only online';

}
