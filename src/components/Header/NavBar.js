import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import {PagesCollection} from "../../utils/rest-helper";
import LoginMenu from "./LoginMenu";

class NavBar extends React.Component {
    state = {
        pages: []
    }

    async componentDidMount() {
        let pages = await PagesCollection.getAll();
        this.setState({pages})
    }

    getPagesForMenu(title) {
        return this.state.pages.filter((page) => {
            return page.menu === title;
        })
    }

    getPageLinksForMenu(title) {
        // TODO Fix path to pagetag instead of id
        return this.getPagesForMenu(title).map(page => {
            return <NavDropdown.Item key={page.pagetag} as={NavLink} to={`/${page.pagetag}`}>{page.pagetag}</NavDropdown.Item>
        })
    }

    render() {
        // TODO Add highlight pages
        return <Navbar id="navbar-kronos" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                    <NavDropdown title="Vereniging" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/commissions">Commissies</NavDropdown.Item>
                        {this.getPageLinksForMenu('Vereniging')}
                    </NavDropdown>
                    <NavDropdown title="Trainingen" id="basic-nav-dropdown">
                        {this.getPageLinksForMenu('Trainingen')}
                    </NavDropdown>
                    <NavDropdown title="Wedstrijden" id="basic-nav-dropdown">
                        {this.getPageLinksForMenu('Wedstrijden')}
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/agendaitems">Agenda</Nav.Link>
                    <Nav.Link as={NavLink} to="/uitslagen">Uitslagen</Nav.Link>
                    <Nav.Link as={NavLink} to="/photoalbums">Foto's</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <NavDropdown title="Login" id="basic-nav-dropdown" alignRight>
                        <LoginMenu/>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    }
}

export default NavBar