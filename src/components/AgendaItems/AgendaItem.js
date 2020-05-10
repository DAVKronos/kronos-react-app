import React from 'react';
import {Col, Row, Card} from 'react-bootstrap';
import {AgendaItemsCollection, AgendaItemTypesCollection} from "../../utils/rest-helper";

import format from '../../utils/date-format';
import withData from "../../utils/withData";

class AgendaItem extends React.Component {
    render() {
        let agendaItem = this.props.data;
        if (!agendaItem) {
            return null;
        }
        let agendaItemType =  AgendaItemTypesCollection.get(agendaItem.agendaitemtype_id);
        let agendaItemTypeName = agendaItemType && <small>{agendaItemType.name}</small>;

        let date = new Date(agendaItem.date);
        return <React.Fragment>
            <Row>
                <Col sm={12}>
                    <h1>{agendaItem.name} {agendaItemTypeName}</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {format(date, 'PPP p')}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {agendaItem.location}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {agendaItem.commission}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>                 </Col>
                        <Col xs={11}>{agendaItem.description}</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>Programma</Card.Header>
                        <Card.Body> Geen Programma</Card.Body>
                    </Card>
                    <Card style={{marginTop: 20}}>
                        <Card.Header>Inschrijflijst</Card.Header>
                        <Card.Body>Je moet inloggen om inschrijvingen te zien of aan te vullen.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withData(AgendaItem, AgendaItemsCollection, (DS, props) => DS.get(props.match.params.id));