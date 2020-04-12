import React from 'react';
import {Col, Row, Card, Spinner} from 'react-bootstrap';
import {getAgendaItem} from "../../utils/rest-helper";

class AgendaItem extends React.Component {
    state = {
        item: null,
        loading: true
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let item = await getAgendaItem(id)
        console.log(item);
        this.setState({
            item,
            loading: false
        })
    }

    render() {
        if (this.state.loading || !this.state.item) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }

        let item = {
            id: 1,
            date: "2020-06-01 19:30",
            title: "Borrel 1",
            description: "Description goes here",
            agendaitemtype: "Activiteit",
            commission: "Pilscie",
            location: "Friends"
        };

        return <React.Fragment>
            <Row>
                <Col sm={12}>
                    <h1>{item.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {item.date}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {item.location}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {item.commission}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={11}>
                            {item.description}
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            Programma
                        </Card.Header>
                        <Card.Body>
                            Geen Programma
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    }
}

export default AgendaItem;