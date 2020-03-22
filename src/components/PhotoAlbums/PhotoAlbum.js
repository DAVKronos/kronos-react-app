import React from 'react';
import {useParams, useLocation, Link} from 'react-router-dom';
import {Row, Col, Card, Pagination} from 'react-bootstrap';

const photoAlbums = {1: {
    id: 1,
    name: "Campusloop 1",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}, 2: {
    id: 2,
    name: "Campusloop 2",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}, 3: {
    id: 3,
    name: "Campusloop 3",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}};



const PhotoAlbum = () => {
    let {id, page} = useParams();
    let {pathName} = useLocation();
    let photoAlbum = photoAlbums[id];
    let photos = [1,1,1,1,1,1].map(() => photoAlbum.image);

    let active = page || 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item as={Link} to={{pathName, search: `?page=${number}`}} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return <React.Fragment>
        <Row><Col>
            <h1>{photoAlbum.name}</h1>
            <p>{photoAlbum.date}</p>
        </Col></Row>
        <Row>
        {photos.map(photo => {
            return <Col md={4} sm={4}>
                <Card>
                    <Card.Img src={photo}/>
                </Card>
            </Col>;
        })}
        </Row>
        <Pagination>
            <Pagination.Prev />
            {items}
            <Pagination.Next />
        </Pagination>
    </React.Fragment>;
};

export default PhotoAlbum;