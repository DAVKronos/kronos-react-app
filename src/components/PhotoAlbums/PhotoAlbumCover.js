import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getAPIHostUrl} from "../../utils/rest-helper";
import format from '../../utils/date-format';

const PhotoAlbumCover = ({photoAlbum}) => {
    let photoThumb = photoAlbum.photos && photoAlbum.photos[0] && photoAlbum.photos[0].photo_url_thumb;
    let date = new Date(photoAlbum.created_at);
    return <Card>
        <Card.Img variant="top" src={getAPIHostUrl(photoThumb)} />
        <Card.Body>
            <Card.Title><Link to={`/photoalbums/${photoAlbum.id}`}>{photoAlbum.name}</Link></Card.Title>
            <Card.Text>
                {format(date, 'PPP p')}
            </Card.Text>
        </Card.Body>
    </Card>
};

export default PhotoAlbumCover;