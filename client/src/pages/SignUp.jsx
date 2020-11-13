import React, { useState } from 'react';
import * as authActionCreators from '../actions/auth';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import axios from 'axios';

const SignUp = ({ authActions }) => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // authActions.register({ name, email, password });
        axios.post('http://localhost:5000/parent/signup')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(null, mapDispatchToProps)(SignUp);
