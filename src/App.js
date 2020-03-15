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


const App = () => {
    return <Router><Container>
        <Header />
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
        </Switch>

        <Footer />
    </Container>
    </Router>
};

export default App;