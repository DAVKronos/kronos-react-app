import React from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';

const photo = {
        id: 1,
        name: "Campusloop 1",
        date: "2019-04-01",
        image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
    };


//TODO Center image, get real data, add functionality to buttons
const Photo = () => {


    return <React.Fragment>
        <Row><Col>
            <h1>{photo.name}</h1>
            <p>{photo.date}</p>
        </Col></Row>
        <Row>
            <Col>
            <Image src={photo.image}  />
            </Col>
        </Row>
        <Row>
            <Col>
            <Button disabled>Previous</Button>
            </Col>
            <Col>
            <Button >Next</Button>
            </Col>
        </Row>
    </React.Fragment>;
};

export default Photo;