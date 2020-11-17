import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        
    )
}

export default Admin
