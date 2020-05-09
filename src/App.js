import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import Container from 'react-bootstrap/Container'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AgendaItemsRouter from "./components/AgendaItems";
import NewsItemsRouter from "./components/NewsItems";
import PhotoAlbumsRouter from './components/PhotoAlbums'
import PagesRouter from './components/Pages'

// TODO Add pages with pagetag to the home path
const App = () => {
    return <Router><Container>
        <Header />
        <div className='main'>
        <Switch>
           <Route exact path="/">
                <HomePage />
           </Route>
            <Route path="/newsitems">
                <NewsItemsRouter />
            </Route>
            <Route path="/agendaitems">
                <AgendaItemsRouter />
            </Route>
            <Route path="/photoalbums">
                <PhotoAlbumsRouter />
            </Route>

            <Route path="/pages">
                <PagesRouter />
            </Route>
            <Route path="/:pagetag">
                <PagesRouter />
            </Route>
        </Switch>
        </div>
        <Footer />
    </Container>
    </Router>
};

export default App;