import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PhotoAlbumCover = ({photoAlbum}) => {
    return <Card>
        <Card.Img variant="top" src={photoAlbum.image} />
        <Card.Body>
            <Card.Title><Link to={`/photoalbums/${photoAlbum.id}`}>{photoAlbum.name}</Link></Card.Title>
            <Card.Text>
                {photoAlbum.created_at}
            </Card.Text>
            {/*<Button >Go somewhere</Button>*/}
        </Card.Body>
    </Card>
};

export default PhotoAlbumCover;