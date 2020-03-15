import React from "react";
import {Row, Col} from 'react-bootstrap';

const NEWSITEM = {
    title: "NSK Indoor",
    text: "Een grote groene delegatie Kronauten reisde af naar Apeldoorn voor het NSK Indoor. Onder hen een aantal indoorveteranen voor wie het Omnisport inmiddels een soort tweede thuis is geworden en een aantal nieuwelingen. Gelukkig zorgde tourguide Marjolein ervoor dat ook zij zich binnen de kortste keren bekend voelden in het immense complex. Het beloofde een wisselvallige dag te worden met medailles, clubrecords, vele persoonlijke records maar ook wat teleurstellingen.",
    date: "2020-03-03 15:01",
    author: "Kegel",
    url: "https://kronos.nl/system/articlephotos/811f919e98db6c8b14053259e1cf1b600f222464.jpg?1583244102"
};

const NewsItem = () => {
    let item = NEWSITEM;
    return <React.Fragment>
        <Row>
            <Col md={{span: 8, offset: 2}}>
                <h1>{item.title}</h1>
                <p>{item.date} | {item.author}</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: 8, offset: 2}}>
                <img src={item.url} alt={item.title}/>
                <p>{item.text}</p>
            </Col>
        </Row>
    </React.Fragment>
};

export default NewsItem