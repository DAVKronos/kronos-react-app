import React from "react";
import AgendaItem from "./AgendaItem";
import {Card, ListGroup, Spinner} from 'react-bootstrap';
import {getAgendaItems} from "../../utils/rest-helper";

class AgendaItemsSideBar extends React.Component  {
    state = {
        items: [],
        loading: true
    }

    async componentDidMount() {
        let items = await getAgendaItems();
        this.setState({
            items,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }


        return <Card className="side-panel">
            <Card.Header>Agenda</Card.Header>
            <ListGroup variant='flush'>
                {this.state.items.map(item => (<ListGroup.Item><AgendaItem item={item}/></ListGroup.Item>)
                )}
            </ListGroup>
        </Card>
    }
}

export default AgendaItemsSideBar;