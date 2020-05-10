import React from "react";
import {PagesCollection} from "../../utils/rest-helper";
import ReactMarkdown from 'react-markdown';
import withData from "../../utils/withData";


class Page extends React.Component {

    render() {
        if (!this.props.data) {
            return <h1>Page not found</h1>;
        }

        let {pagetag, information} = this.props.data;
        return <div>
            <h1>{pagetag}</h1>
            <ReactMarkdown source={information} />
        </div>;
    }
}

function dataFunction(DataSource, props) {
    let {id, pagetag} = props.match.params;
    let item;
    if (id != null) {
        item = DataSource.get(id);
    } else {
        let pages = DataSource.getAll();
        item = pages.find(page => page.pagetag.indexOf(pagetag) > -1);
    }

    return item;
}

export default withData(Page, PagesCollection, dataFunction)