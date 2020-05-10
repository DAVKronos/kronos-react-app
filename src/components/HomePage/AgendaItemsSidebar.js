import React from "react";
import AgendaItem from "./AgendaItem";
import {Card, ListGroup} from 'react-bootstrap';
import {AgendaItemsCollection} from "../../utils/rest-helper";
import withData from "../../utils/withData";

function AgendaItemsSideBar(props) {

    let items = props.data || [];

    return <Card className="side-panel">
        <Card.Header>Agenda</Card.Header>
        <ListGroup variant='flush'>
            {items.map(item => (<ListGroup.Item><AgendaItem item={item}/></ListGroup.Item>))}
        </ListGroup>
    </Card>
}



function sortAgendaItems(a, b) {
    return new Date(b.date) - new Date(a.date)
}


export default withData(AgendaItemsSideBar, AgendaItemsCollection, (DS) => DS.getAll({}, sortAgendaItems));