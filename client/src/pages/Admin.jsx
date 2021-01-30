import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/adminAuth';
import {
    FormContainer,
    Form,
    TextField,
    PasswordField,
    Button,
    Error
} from '../components/FormElements';

const Admin = ({ auth, errors, authActions }) => {
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
                <FormContainer>
                    <Form user={true} onSubmit={onSubmit}>
                        <TextField
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Error>{errors && errors.username}</Error>
                        <PasswordField
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Error>{errors && errors.password}</Error>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </FormContainer>
        )
    )
}

const mapStateToProps = ({ adminAuth }) => ({
    auth: adminAuth.isAuthenticated,
    errors: adminAuth.errors
});

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
