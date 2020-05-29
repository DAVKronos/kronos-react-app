import React from "react";
import AgendaItem from "./AgendaItem";
import {Card, ListGroup} from 'react-bootstrap';
import {AgendaItemsCollection} from "../../utils/rest-helper";
import withData from "../../utils/withData";
import Spinner from "react-bootstrap/Spinner";

function AgendaItemsSideBar({loading, data: agendaItems = []}) {
    if (loading) {
        return <Spinner />;
    }

    return <Card className="side-panel">
        <Card.Header>Agenda</Card.Header>
        <ListGroup variant='flush'>
            {agendaItems.sort(sortAgendaItems).map(item => (<ListGroup.Item key={item.id}><AgendaItem item={item}/></ListGroup.Item>))}
        </ListGroup>
    </Card>
}



function sortAgendaItems(a, b) {
    return new Date(a.date) - new Date(b.date);
}


export default withData(AgendaItemsSideBar, () => AgendaItemsCollection.getAll());