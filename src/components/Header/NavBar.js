import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return <Navbar className="navbar-kronos" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <NavDropdown title="Vereninging" id="basic-nav-dropdown">
                    <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Trainingen" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Wedstrijden" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/agendaitems">Agenda</Nav.Link>
                <Nav.Link as={NavLink} to="/uitslagen">Uitslagen</Nav.Link>
                <Nav.Link as={NavLink} to="/photoalbums">Foto's</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
};

export default NavBar