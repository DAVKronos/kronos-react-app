import React from 'react';
import withData from "../../utils/withData";
import {AgendaItemsCollection, EventTypesCollection} from "../../utils/rest-helper";
import DefaultSpinner from "../Spinner";
import {Table} from 'react-bootstrap';

const EventResults = ({event}) => {
    return <Table striped size='sm' key={event.id}>
        <thead>
        <tr>
            <th colSpan={3}>
                {event.name}
            </th>
        </tr>
        </thead>
        <tbody>
        {event.results && event.results.map(result => {
            return <tr key={result.id}>
                <td>{result.result} {event.measuringUnit} {result.place && `(${result.place})`}</td>
                <td>{result.username}</td>
                <td>{result.calculated} {event.calculatedUnit}</td>
            </tr>
        })}
        </tbody>
    </Table>
}


const EventsResults = ({loading, data: events}) => {
    if (loading) {
        return <DefaultSpinner/>;
    }

    return <div>
        <h2>Results</h2>
        {events && events.map(event => <EventResults event={event}/>)}
    </div>;
};

function dataFunction(agendaItemId) {
    return AgendaItemsCollection.getEvents(agendaItemId).then(events => {
        return Promise.all(events.map(async event => {
            const eventType= await EventTypesCollection.get(event.eventtype_id)
            return {...event, measuringUnit: eventType.measuringunit, calculatedUnit: eventType.calculated_unit};
        }));
    });
}

export default withData(EventsResults, (props) => dataFunction(props.agendaItemId))