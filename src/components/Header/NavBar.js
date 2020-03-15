import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return <Navbar className="navbar-kronos" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Vereninging" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Trainingen" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Wedstrijden" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Agenda</Nav.Link>
                <Nav.Link href="#link">Uitslagen</Nav.Link>
                <Nav.Link href="#link">Foto's</Nav.Link>
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