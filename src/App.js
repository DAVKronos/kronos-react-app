import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";


const App = () => {
    return <Container>
        <Header />
        <HomePage />
        <Footer />
    </Container>
};

export default App;