import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const AgendaItem = ({item}) => {
    return <Row as={Link} to={`/agendaitems/${item.id}`}>
        <Col><h5>{item.date}</h5></Col>
        <Col><h5>{item.title}</h5></Col>
        <Col><h5>{item.subscriptions}</h5></Col>
    </Row>
};

export default AgendaItem;