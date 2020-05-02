import React from "react";
import {Spinner} from 'react-bootstrap';
import {PagesCollection} from "../../utils/rest-helper";


class Page extends React.Component {
    state = {
        item: null,
        loading: true
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        //TODO this does not work directly, only from homepage. Fix in Rails
        let item = await PagesCollection.get(id);
        this.setState({item, loading: false});
    }

    render() {
        if (this.state.loading || !this.state.item) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }
        //TODO parse markdown
        return <div>
            <h1>{this.state.item.pagetag}</h1>
            <p>{this.state.item.information}</p>
        </div>;
    }
}

export default Page