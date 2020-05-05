import React from "react";
import {Spinner} from 'react-bootstrap';
import {PagesCollection} from "../../utils/rest-helper";
import ReactMarkdown from 'react-markdown';


class Page extends React.Component {
    state = {
        item: null,
        loading: true
    }

    async componentDidMount() {
        let {id, pagetag} = this.props.match.params;
        let item;
        if (id != null) {
            item = await PagesCollection.get(id);
        } else {
            let pages = await PagesCollection.getAll();
            item = pages.find(page => page.pagetag === pagetag) || null;
        }

        this.setState({item, loading: false});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params && prevState.item && prevState.item.pagetag !== this.props.match.params.pagetag) {
            let {pagetag} = this.props.match.params;
            if (pagetag) {
                PagesCollection.getAll().then(pages => {
                    let item = pages.find(page => page.pagetag === pagetag) || null;
                    this.setState({item});
                });
            }
        }
    }

    render() {
        if (this.state.loading ) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }

        if (!this.state.item) {
            return <h1>Page not found</h1>;
        }

        let {pagetag, information} = this.state.item;
        return <div>
            <h1>{pagetag}</h1>
            <ReactMarkdown source={information} />
        </div>;
    }
}

export default Page