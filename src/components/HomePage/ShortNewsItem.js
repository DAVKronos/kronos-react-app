import React from "react";
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const ShortNewsItem = ({item}) => {
    return <Row>
        <Col md={3} style={{display: 'flex'}}>
            <img className="align-self-center" src={item.url} alt={item.title} style={{width: '100%'}}/></Col>
        <Col md={9}>
            <header>
                <h2>{item.title}</h2>
                <p>{item.date} | {item.author}</p>
            </header>
            <p>{item.text}</p>
            <Link to={`/newsitems/${item.id}`}>Read more</Link>
        </Col>
    </Row>
};

export default ShortNewsItem;