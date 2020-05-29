import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getAPIHostUrl, transformObject} from "../../utils/rest-helper";
import format from '../../utils/date-format';

const PhotoAlbumCover = ({photoAlbum}) => {
    let album = transformObject(photoAlbum.photoalbum);
    let photoThumb = photoAlbum.photos && photoAlbum.photos[0] && photoAlbum.photos[0].photo_url_thumb;
    return <Card>
        <Card.Img variant="top" src={getAPIHostUrl(photoThumb)} />
        <Card.Body>
            <Card.Title><Link to={`/photoalbums/${album.id}`}>{album.name}</Link></Card.Title>
            <Card.Text>
                {album.created_at && format(album.created_at, 'PPP p')}
            </Card.Text>
        </Card.Body>
    </Card>
};

export default PhotoAlbumCover;