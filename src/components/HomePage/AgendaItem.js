import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const AgendaItem = ({item}) => {
    return <Row as={Link} to={`/agendaitems/${item.id}`}>
        <Col xs={2}><h5>
            <small>{item.date.getDay()}</small> <br/>
            {item.date.getDate()}<br/>
            <small>{item.date.getMonth()}</small>
        </h5></Col>
        <Col xs={8}><h5>{item.title}</h5></Col>
        <Col xs={2}><h5>{item.subscriptions}</h5></Col>
    </Row>
};


export default AgendaItem;