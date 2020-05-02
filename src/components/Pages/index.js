import React from "react";
import {Switch, Route} from 'react-router-dom';
import Page from "./Page";

// TODO Page should be accesed by id or pagetag.
const PhotoAlbumsRouter = () => {
    return <Switch>
        <Route path="/pages/:id" component={Page} />
    </Switch>
};

export default PhotoAlbumsRouter