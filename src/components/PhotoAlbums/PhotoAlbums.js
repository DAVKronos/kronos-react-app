import React from 'react';
import {Col, Row} from 'react-bootstrap';
import PhotoAlbumCover from "./PhotoAlbumCover";
import {PhotoAlbumsCollection} from "../../utils/rest-helper";
import withData from "../../utils/withData";


function PhotoAlbums(props) {
    let photoAlbums = props.data;
    return <React.Fragment>
        <Row>
            <Col><h1>Fotoalbum</h1></Col>
        </Row>
        <Row>
            {photoAlbums.map(photoAlbum => {
                return <Col key={photoAlbum.id} sm={6} md={4}>
                    <PhotoAlbumCover photoAlbum={photoAlbum}/>
                </Col>
            })}
        </Row>
    </React.Fragment>;
}

function sortPhotoAlbums(a,b) {
    return b.created_at - a.created_at;
}

function dataFunction(DataSource) {
    let photoAlbums =  DataSource.getAll({}, sortPhotoAlbums);
    if (photoAlbums && photoAlbums.length > 0){
        photoAlbums =  photoAlbums.map((item, index) => {
            return DataSource.get(item.id)
        })
        return photoAlbums;
    }
    return photoAlbums;
}

export default withData(PhotoAlbums, PhotoAlbumsCollection, dataFunction);