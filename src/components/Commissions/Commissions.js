import React from 'react';
import {Table} from "react-bootstrap";
import {CommissionCollection} from "../../utils/rest-helper";
import {Link} from 'react-router-dom';

export default class Commission  extends React.Component {
    state={
        loading: true,
        commissions: []
    }

    async componentDidMount() {
        let commissions = await CommissionCollection.getAll();
        this.setState({
            commissions,
            loading: false
        });
    }

    render() {
        const {commissions} = this.state;

        return <React.Fragment>
            <h1>Commissies van Kronos</h1>
            <p className={"lead"}>Onderstaand treft u een overzicht aan van de huidige commissies van Kronos.</p>
            <Table striped>
                <thead>
                <tr>
                    <th>
                        Naam
                    </th>
                </tr>
                </thead>
                <tbody>
                {commissions && commissions.map(commission => {
                    return <tr key={commission.id}>
                        <td><Link to={`/commissions/${commission.id}`}>{commission.name}</Link></td>
                    </tr>;
                })}
                </tbody>
            </Table>
        </React.Fragment>;
    }
}