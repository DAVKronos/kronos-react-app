import React from 'react';
import {Col, Row, Card, Spinner} from 'react-bootstrap';
import {AgendaItemsCollection, AgendaItemTypesCollection} from "../../utils/rest-helper";

import format from '../../utils/date-format';

class AgendaItem extends React.Component {
    state = {
        agendaItem: null,
        loading: true,
        agendaItemType: null,
        commission: null
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let agendaItem = await AgendaItemsCollection.get(id)
        this.setState({
            agendaItem,
            loading: false
        })
        if (agendaItem && agendaItem.agendaitemtype_id) {
            let agendaItemType = await AgendaItemTypesCollection.get(agendaItem.agendaitemtype_id);
            this.setState({agendaItemType})
        }
        if (agendaItem && agendaItem.commission_id) {
            let commission = await AgendaItemTypesCollection.get(agendaItem.commission_id);
            this.setState({commission})
        }
    }

    render() {
        if (this.state.loading || !this.state.agendaItem) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }
        let {agendaItem, agendaItemType} = this.state;
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

export default AgendaItem;