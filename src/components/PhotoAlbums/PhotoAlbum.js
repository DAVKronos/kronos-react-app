import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Pagination, Spinner} from 'react-bootstrap';
import {getAPIHostUrl, PhotoAlbumsCollection} from "../../utils/rest-helper";
import format from '../../utils/date-format';

// TODO convert to real data
class PhotoAlbum extends React.Component {
    state = {
        photoAlbum: null,
        loading: true,
        page: 1
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let photoAlbum = await PhotoAlbumsCollection.get(id)
        this.setState({photoAlbum: photoAlbum, loading: false})
    }

    changePage(page) {
        // page = page < 1 ? 1 : page;
        if (page !== this.state.page) {
            this.setState({page});
        }
    }

    render() {
        if (this.state.loading || !this.state.photoAlbum) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }
        let {photoAlbum, page} = this.state;
        if (!photoAlbum.photos || photoAlbum.photos.length === 0){
            return <h3>Geen foto's</h3>
        }


        let photos = photoAlbum.photos || [];
        let {id} = this.props.match.params;
        let pageNumbers = [];
        const photosPerPage = 12;
        let pages = Math.ceil(photos.length / photosPerPage);
        for (let number = 1; number <= pages; number++) {
            pageNumbers.push(
                <Pagination.Item key={number} onClick={() => this.changePage(number)}
                                 active={number === page}>
                    {number}
                </Pagination.Item>,
            );
        }

        let photosPage = photos.slice((page-1)*photosPerPage, page * photosPerPage);

        let date = new Date(photoAlbum.created_at);
        return <React.Fragment>
            <Row><Col>
                <h1>{photoAlbum.name}</h1>
                <p>aangemaakt: {format(date, 'PPP p')}</p>
            </Col></Row>
            <Row>
                {photosPage && photosPage.map(photo => {
                    return <Col key={photo.id} md={4} sm={4}>
                        <Link to={`/photoalbums/${id}/${photo.id}`}>
                            <Card>
                                <Card.Img src={getAPIHostUrl(photo.photo_url_thumb)}/>
                            </Card>
                        </Link>
                    </Col>;
                })}
            </Row>
            <Row style={{marginTop: 20}}>
                <Col>
                    <Pagination>
                        <Pagination.Prev disabled={page===1} onClick={() => this.changePage(page - 1 )}/>
                        {pageNumbers}
                        <Pagination.Next disabled={page === photos.length} onClick={() => this.changePage(page + 1 )}/>
                    </Pagination>
                </Col>
            </Row>
        </React.Fragment>;
    }
}

export default PhotoAlbum;