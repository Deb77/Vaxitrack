import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/auth';
import {
    FormContainer,
    SignUpRedirect,
    Form,
    TextField,
    PasswordField,
    Button
} from '../components/FormElements';

const Login = ({ authActions, auth }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(auth);
    }, [auth])

    const onSubmit = (e) => {
        e.preventDefault();
        authActions.register({ name, email, password });
    }

    return (
        redirect ? (
            <Redirect to = "/parent"/>
        ) : (
                <FormContainer>
                    <Form user={true} onSubmit={onSubmit}>
                        <TextField
                            placeholder="Enter name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            placeholder="Enter email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordField
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button user={true} variant="primary" type="submit">
                            Submit
                        </Button>
                        <SignUpRedirect to="/login">Have An Account? Login</SignUpRedirect>
                    </Form>
                </FormContainer >
        )
    )
}

Login.propTypes = {
    authActions: PropTypes.object,
    auth: PropTypes.bool
}

const mapStateToProps = ({ auth }) => ({ auth: auth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);