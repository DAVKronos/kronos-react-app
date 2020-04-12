import React from "react";
import {Row, Col, Spinner} from 'react-bootstrap';
import {getAPIHostUrl, NewsItemsCollection} from "../../utils/rest-helper";


class NewsItem extends React.Component {
    state = {
        item: null,
        loading: true
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let item = await NewsItemsCollection.get(id);
        this.setState({item, loading: false});
    }

    render() {
        if (this.state.loading || !this.state.item) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }

        let item = this.state.item;
        return <React.Fragment>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <h1>{item.title}</h1>
                    <p>{item.created_at} | {item.user.name}</p>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <img src={getAPIHostUrl(item.articlephoto_url_carrousel)} alt={item.title}/>
                    <p>{item.news}</p>
                </Col>
            </Row>
        </React.Fragment>
    }
}

export default NewsItem