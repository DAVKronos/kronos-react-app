import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PhotoAlbumCover from "./PhotoAlbumCover";

const photoAlbums = [{
    id: 1,
    name: "Campusloop 1",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}, {
    id: 2,
    name: "Campusloop 2",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}, {
    id: 3,
    name: "Campusloop 3",
    date: "2019-04-01",
    image: "https://kronos.nl/system/photos/afb23a812fbd65321a9e3ccc35a10f467abf5555.JPG?1569313592"
}];


const PhotoAlbums = () => {
    return <React.Fragment>
        <Row>
            <Col><h1>Fotoalbum</h1></Col>
        </Row>
        <Row>
            {photoAlbums.map(photoAlbum => {
                return <Col key={photoAlbum.id} sm={6} md={4}>
                    <PhotoAlbumCover photoAlbum={photoAlbum} />
                </Col>
            })}
        </Row>
    </React.Fragment>;
};

export default PhotoAlbums;