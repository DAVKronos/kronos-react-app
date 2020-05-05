import React from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';
import PhotoAlbumCover from "./PhotoAlbumCover";
import {PhotoAlbumsCollection} from "../../utils/rest-helper";


class PhotoAlbums extends React.Component {
    state = {
        photoAlbums: [],
        loading: true
    }

    async componentDidMount() {
        let photoAlbums = await PhotoAlbumsCollection.getAll();
        this.setState({photoAlbums, loading: false})
        if (photoAlbums && photoAlbums.length > 0){
            photoAlbums = await Promise.all(photoAlbums.map((item, index) => {
                return PhotoAlbumsCollection.get(item.id)
            }));
            console.log(photoAlbums);
            this.setState({photoAlbums})
        }
    }

    render() {
        if (this.state.loading ) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }



        return <React.Fragment>
            <Row>
                <Col><h1>Fotoalbum</h1></Col>
            </Row>
            <Row>
                {this.state.photoAlbums.map(photoAlbum => {
                    return <Col key={photoAlbum.id} sm={6} md={4}>
                        <PhotoAlbumCover photoAlbum={photoAlbum}/>
                    </Col>
                })}
            </Row>
        </React.Fragment>;
    }
}

export default PhotoAlbums;