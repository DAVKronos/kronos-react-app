import React from 'react'
import {Link} from "react-router-dom";
import {Row, Col, Nav, Card} from 'react-bootstrap';
import {AgendaItemsCollection, AgendaItemTypesCollection} from "../../utils/rest-helper";
import format from '../../utils/date-format';


class AgendaItems extends React.Component {
    state = {
        agendaItems: [],
        loading: true,
        date: new Date(),
        agendaItemTypes: [],
        filter: null
    }

    async componentDidMount() {
        let agendaItems = await AgendaItemsCollection.getAll();
        this.setState({
            agendaItems,
            loading: false
        });
        let agendaItemTypes = await AgendaItemTypesCollection.getAll();
        this.setState({
            agendaItemTypes
        })
    }

    changeDate(date) {
        if (this.state.date !== date) {
            this.setState({date, loading:true});
            AgendaItemsCollection.getAll({'date[year]': date.getFullYear(), 'date[month]': date.getMonth()+1}).then(agendaItems => {
                this.setState({
                    agendaItems,
                    loading: false
                });
            });

        }
    }

    changeFilter(filter) {
        if (this.state.filter !== filter) {
            this.setState({filter});
        }
    }

    render() {
        let {date, agendaItems, filter, agendaItemTypes} = this.state;
        let month = date.getMonth();
        let year = date.getFullYear();

        let prev = new Date(year, month - 1);
        let next = new Date(year, month + 1);

        if (filter) {
            agendaItems = agendaItems.filter(agendaItem => agendaItem.agendaitemtype_id === filter)
        }

        return (<React.Fragment>
            <Row>
                <Col md={12}>
                    <h1>Agenda</h1>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => this.changeDate(prev)}>{format(prev, 'MMM yyyy')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link active>{format(date, 'MMM yyyy')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => this.changeDate(next)}>{format(next, 'MMM yyyy')}</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    <Nav variant="pills">
                        <Nav.Item><Nav.Link active={filter == null}
                                            onClick={() => this.changeFilter(null)}>All</Nav.Link></Nav.Item>
                        {agendaItemTypes.map(agendaItemType => {
                            return <Nav.Item>
                                <Nav.Link
                                    active={filter === agendaItemType.id}
                                    onClick={() => this.changeFilter(agendaItemType.id)}>
                                    {agendaItemType.name}
                                </Nav.Link>
                            </Nav.Item>;
                        })}
                    </Nav>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    {agendaItems.map(item => {
                        let itemDate = new Date(item.date);
                        return <Link to={`/agendaitems/${item.id}`}><Card body>
                            <Row>
                                <Col>{format(itemDate, 'ccc')} {format(itemDate, 'd')}</Col>
                                <Col>{format(itemDate, 'p')}</Col>
                                <Col>{item.name}</Col>
                                <Col>{item.subscriptions.length}</Col>
                            </Row>
                        </Card></Link>
                    })}
                </Col>
            </Row>
        </React.Fragment>);
    }
}

export default AgendaItems;