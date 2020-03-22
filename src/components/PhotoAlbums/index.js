import React from "react";
import {Switch, Route} from 'react-router-dom';
import PhotoAlbums from "./PhotoAlbums";
import PhotoAlbum from "./PhotoAlbum";

const PhotoAlbumsRouter = () => {
    return <Switch>
        <Route exact path="/photoalbums">
            <PhotoAlbums />
        </Route>
        <Route path="/photoalbums/:id">
            <PhotoAlbum />
        </Route>
    </Switch>
};

export default PhotoAlbumsRouter