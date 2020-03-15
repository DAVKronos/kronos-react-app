import React from 'react'
import {Link} from "react-router-dom";
import {Row, Col, Nav, Card} from 'react-bootstrap';


const AgendaItems = () => {
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

    return (<React.Fragment>
        <Row>
            <Col md={12}>
                <h1>Agenda</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Nav variant="tabs" defaultActiveKey="/mar2020">
                    <Nav.Item>
                        <Nav.Link eventKey="/feb2020">feb 2020</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/mar2020">mar 2020</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/apr2020">apr 2020</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Nav variant="pills" defaultActiveKey="/all">
                    <Nav.Item>
                        <Nav.Link href="/all">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="activiteit">Activiteit</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                {items.map(item => {
                    return <Link to={`/agendaitems/${item.id}`}><Card body>
                        <Row>
                        <Col>{item.date}</Col>
                        <Col>{item.title}</Col>
                        <Col>{item.subscriptions}</Col>
                        </Row>
                    </Card></Link>
                })}
            </Col>
        </Row>
    </React.Fragment>);
};

export default AgendaItems;