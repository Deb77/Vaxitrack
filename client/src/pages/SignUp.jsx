import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import * as authActionCreators from '../actions/auth';

const SignUp = ({ authActions, auth }) => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(auth);
    }, [auth])

    const onSubmit = (e) => {
        e.preventDefault();
        authActions.register({ name, email, password });
    }

    const logout = () => {
        authActions.logout();
    }

    return (
        redirect ? (
            <Redirect to="/parent"/>
        ) : (
            <Container>
            <Button  onClick={logout}>LogOut</Button>
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
    )
}

const mapStateToProps = ({ auth }) => ({ auth: auth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
