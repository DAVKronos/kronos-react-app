import React from 'react';
import {Button, Form} from 'react-bootstrap';

export default function LoginMenu() {
    return <Form style={{padding: 7}}>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Emailadres"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Wachtwoord"/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Onthoud mij"/>
        </Form.Group>
        <Button variant="primary">
            Inloggen
        </Button>
    </Form>
}