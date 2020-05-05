import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getAPIHostUrl} from "../../utils/rest-helper";

const PhotoAlbumCover = ({photoAlbum}) => {
    let photoThumb = photoAlbum.photos && photoAlbum.photos[0] && photoAlbum.photos[0].photo_url_thumb;
    return <Card>
        <Card.Img variant="top" src={getAPIHostUrl(photoThumb)} />
        <Card.Body>
            <Card.Title><Link to={`/photoalbums/${photoAlbum.id}`}>{photoAlbum.name}</Link></Card.Title>
            <Card.Text>
                {photoAlbum.created_at}
            </Card.Text>
        </Card.Body>
    </Card>
};

export default PhotoAlbumCover;