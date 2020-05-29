import React from 'react';
import withData from "../../utils/withData";
import {AgendaItemsCollection, ResultsCollection} from "../../utils/rest-helper";


class EventResults extends React.Component {
    render() {
        return null;
    }
}

function dataFunction(agendaItemId) {
    return AgendaItemsCollection.getEvents(agendaItemId).then(data => {
        // return ResultsCollection.get()
        return [];
    })
}

export default withData(EventResults, (props) => dataFunction(props.agendaItemId))