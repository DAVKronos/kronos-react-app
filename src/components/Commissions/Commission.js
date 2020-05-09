import React from 'react';
import {Spinner, Table} from 'react-bootstrap';
import {CommissionCollection} from "../../utils/rest-helper";

export default class Commission  extends React.Component {
    state={
        loading: true,
        commission: null,
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let commission = await CommissionCollection.get(id, {},true);
        this.setState({
            commission,
            loading: false
        });
    }

    renderTable() {

    }


    render() {
        const {commission, loading} = this.state;
        if (loading ) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }

        if (!commission) {
            return <h1>Commission not found</h1>
        }


        return <React.Fragment>
            <h1>{commission.name}</h1>
            <p className={"lead"}>{commission.description}</p>
            <Table striped>
                <thead>
                <tr>
                    <th>
                        Naam
                    </th>
                    <th>
                        Functie
                    </th>
                </tr>
                </thead>
                <tbody>
                {commission.commission_memberships && commission.commission_memberships.map(membership => {
                    let name = membership.user && membership.user.name;
                    return <tr key={membership.id}><td>{name}</td><td>{membership.function}</td></tr>
                })}
                </tbody>
            </Table>
        </React.Fragment>;
    }
}