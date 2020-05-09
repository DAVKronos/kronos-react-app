import React from 'react'
import {Link} from "react-router-dom";
import {Row, Col, Nav, Card, Spinner, Form, Button, FormControl} from 'react-bootstrap';
import {AgendaItemsCollection, AgendaItemTypesCollection} from "../../utils/rest-helper";
import format from '../../utils/date-format';


class AgendaItems extends React.Component {
    state = {
        agendaItems: [],
        loading: true,
        date: new Date(),
        agendaItemTypes: [],
        filter: null,
        searchMonth: null,
        searchYear: null
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

    loadAgendaItems(date) {
        let params = {};
        if (date) {
            params = {'date[year]': date.getFullYear(), 'date[month]': date.getMonth()+1}
        }
        AgendaItemsCollection.getAll(params).then(agendaItems => {
            this.setState({
                agendaItems,
                loading: false
            });
        });
    }

    getAgendaItemTypeName(agendaItemTypeId) {
        // TODO refactor to use AgendaItemTypeCollection instead of this data.
        if (this.state.agendaItemTypes) {
            let agendaItemType = this.state.agendaItemTypes.find(i => i.id === agendaItemTypeId);
            return agendaItemType ? agendaItemType.name : null
        }
        return null;
    }

    changeDate(date) {
        if (this.state.date !== date) {
            this.setState({date, loading:true});
            this.loadAgendaItems(date);
        }
    }

    changeFilter(filter) {
        if (this.state.filter !== filter) {
            this.setState({filter});
        }
    }

    onChangeSearchYear = (event) => {
        let searchYear = event.target.value;
        if (this.state.searchYear !== searchYear) {
            this.setState({searchYear})
        }
    }

    onChangeSearchMonth = (event) => {
        let searchMonth = event.target.value;
        if (this.state.searchMonth !== searchMonth) {
            this.setState({searchMonth})
        }
    }

    onClickSearch = () => {
        let {searchYear, searchMonth, date} = this.state;
        let month = date.getMonth();
        let year = date.getFullYear();
        let searchYearValue = searchYear !== null ? searchYear : year;
        let searchMonthValue = searchMonth !== null ?  searchMonth - 1 : month;
        let newDate = new Date(searchYearValue, searchMonthValue)
        this.setState({
            date: newDate,
            searchYear: null,
            searchMonth: null,
            loading: true
        });
        this.loadAgendaItems(newDate);

    }

    renderMonthSwitcher() {
        let {date, searchMonth, searchYear} = this.state;
        let month = date.getMonth();
        let year = date.getFullYear();

        let searchYearValue = searchYear !== null ? searchYear : year;
        let searchMonthValue = searchMonth !== null ?  searchMonth : month + 1;
        let prev = new Date(year, month - 1);
        let next = new Date(year, month + 1);
        return <Nav variant="tabs">
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
            <Nav.Item>
            <Form inline>
                <FormControl style={{width: 50}} type="text" placeholder="M" value={searchMonthValue} onChange={this.onChangeSearchMonth} className="mr-sm-1" />
                <FormControl style={{width: 100}} type="text" placeholder="Y" value={searchYearValue} onChange={this.onChangeSearchYear} className="mr-sm-1" />
                <Button variant="outline-success" onClick={this.onClickSearch}>Search</Button>
            </Form>
            </Nav.Item>
        </Nav>
    }

    renderFilter() {
        let {filter, agendaItemTypes} = this.state;
        return <Nav variant="pills">
            <Nav.Item><Nav.Link active={filter == null}
                                onClick={() => this.changeFilter(null)}>All</Nav.Link></Nav.Item>
            {agendaItemTypes && agendaItemTypes.map(agendaItemType => {
                return <Nav.Item>
                    <Nav.Link
                        active={filter === agendaItemType.id}
                        onClick={() => this.changeFilter(agendaItemType.id)}>
                        {agendaItemType.name}
                    </Nav.Link>
                </Nav.Item>;
            })}
        </Nav>
    }

    renderItems() {
        let { agendaItems, filter, loading} = this.state;
        if (loading) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }
        if (filter) {
            agendaItems = agendaItems.filter(agendaItem => agendaItem.agendaitemtype_id === filter)
        }
        return agendaItems && agendaItems.map(item => {
            let itemDate = new Date(item.date);
            return <Link to={`/agendaitems/${item.id}`} className='agenda-item'><Card body>
                <Row>
                    <Col sm={1}><h4>{format(itemDate, 'd')} <small>{format(itemDate, 'ccc')}</small></h4></Col>
                    <Col sm={1}><h4>{format(itemDate, 'p')}</h4></Col>
                    <Col sm={9}><h4>{item.name} <small>{this.getAgendaItemTypeName(item.agendaitemtype_id)}</small></h4></Col>
                    <Col sm={1}><h4>{item.subscriptions.length}</h4></Col>
                </Row>
            </Card></Link>
        });
    }

    render() {
        return (<React.Fragment>
            <Row>
                <Col md={12}>
                    <h1>Agenda</h1>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    {this.renderMonthSwitcher()}
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    {this.renderFilter()}
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={12}>
                    {this.renderItems()}
                </Col>
            </Row>
        </React.Fragment>);
    }
}

export default AgendaItems;