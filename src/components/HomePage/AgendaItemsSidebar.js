import React from "react";
import AgendaItem from "./AgendaItem";
import {Card, ListGroup} from 'react-bootstrap';

const date = new Date(2020,6,1);

const AgendaItemsSideBar = () => {
    let items = [{
        id: 1,
        date: date,
        title: "Borrel 1",
        subscriptions: 25
    }, {
        id: 2,
        date: date,
        title: "Borrel 2",
        subscriptions: 25
    }, {
        id: 3,
        date: date,
        title: "Borrel 3",
        subscriptions: 25
    }];

    return <Card className="side-panel">
        <Card.Header>Agenda</Card.Header>
        <ListGroup variant='flush'>
            {items.map(item => (<ListGroup.Item><AgendaItem item={item}/></ListGroup.Item>)
            )}
        </ListGroup>
    </Card>
};

export default AgendaItemsSideBar;