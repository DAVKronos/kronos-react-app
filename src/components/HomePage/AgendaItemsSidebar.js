import React from "react";
import AgendaItem from "./AgendaItem";
import {Card, ListGroup} from 'react-bootstrap';

const AgendaItemsSideBar = () => {
    let items = [{
        id:1,
        date: "2020-06-01",
        title: "Borrel 1",
        subscriptions: 25
    }, {
        id:2,
        date: "2020-06-01",
        title: "Borrel 2",
        subscriptions: 25
    }, {
        id:3,
        date: "2020-06-01",
        title: "Borrel 3",
        subscriptions: 25
    }];

    return <Card>
        <Card.Header>Agenda</Card.Header>
        <ListGroup variant='flush'>
            {items.map(item => (<ListGroup.Item><AgendaItem item={item} /></ListGroup.Item>)
            )}
        </ListGroup>
    </Card>
};

export default AgendaItemsSideBar;