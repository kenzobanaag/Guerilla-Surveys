import React, {useEffect} from 'react';
import AnalyticsHeader from './AnalyticsHeader';
import SurveyResultsTable from './SurveyResultsTable';
import AnalyticsGraph from './AnalyticsGraph';
import NavBar from '../Header/NavBar'
//redux
import { useDispatch } from "react-redux";
import * as analyticsActions from '../../store/actions/analyticsActions'
import * as appActions from '../../store/actions/actions'


/*
    UPDATE: Removed analytics context provider
    If there is an id in the url, make an api call
*/
function AnalyticsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appActions.switchPage(2))
        const url = (window.location.pathname);
        let id = "";
        //this means that there is an id that is loaded.
        if (url.split('/').length === 3) {
            id = url.split('/')[2];
            //dispatch to get all survey ids
            dispatch(analyticsActions.loadResponses(id));
            dispatch(analyticsActions.setCurrentSurvey(id));
        }
    }, [])

    return(
        <div>
            <NavBar/>
            <AnalyticsHeader/>
            <AnalyticsGraph/>
            <SurveyResultsTable/>
        </div>
    );
}

export default AnalyticsPage;