import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import * as authActionCreators from '../actions/adminAuth';

const Admin = ({ auth,authActions }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(auth);
    }, [auth]);

    const onSubmit = (e) => {
        e.preventDefault();
        authActions.login({ username, password });
    }

    return (
        redirect? (
            <Redirect to="/admin/home"/>
        ) : (
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
    )
}

const mapStateToProps = ({ adminAuth }) => ({ auth: adminAuth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
