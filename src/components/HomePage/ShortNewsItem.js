import React from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';

const ShortNewsItem = ({item}) => {
    return <Row>
        <Col md={3} style={{display: 'flex'}}>
            <Link to={`/newsitems/${item.id}`} className="align-self-center">
                <Image className="d-block w-100" src={item.small_img} alt={item.title} thumbnail/>
            </Link>
            </Col>
        <Col md={9}>
            <header>
                <Link to={`/newsitems/${item.id}`}><h2>{item.title}</h2></Link>
                <p>{item.date} | {item.author}</p>
            </header>
            <p>{item.text.split('\n')[0]}</p>
            <Link to={`/newsitems/${item.id}`}>Read more</Link>
        </Col>
    </Row>
};

export default ShortNewsItem;