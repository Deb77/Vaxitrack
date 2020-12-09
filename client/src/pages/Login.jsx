import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreators from '../actions/auth';
import {
    FormContainer,
    SignUpRedirect,
    PasswordLink,
    Form,
    TextField,
    PasswordField,
    Button,
    Error
} from '../components/FormElements';
import { userService } from '../services/userService';

const Login = ({ authActions, auth, errors }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(auth);
    }, [auth])

    const onClick = () => {
        userService.post('parent/forgotPassword', {
            email
        }).then(({ data }) => alert(data))
        .catch(err => alert(err))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        authActions.login({ email, password });
    }

    return (
        redirect ? (
            <Redirect to = "/parent"/>
        ) : (
                <FormContainer>
                    <Form user={true} onSubmit={onSubmit}>
                        <TextField
                            placeholder="Enter email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Error>{errors.email}</Error>
                        <PasswordField
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Error>{errors.password}</Error>
                        <Button user={true} variant="primary" type="submit">
                            Submit
                        </Button>
                        <PasswordLink onClick={onClick}>Forgot Password?</PasswordLink>
                        <SignUpRedirect to="/signup">Not Registered? SignUp</SignUpRedirect>
                    </Form>
                </FormContainer >
        )
    )
}

Login.propTypes = {
    authActions: PropTypes.object,
    auth: PropTypes.bool,
    errors: PropTypes.object
}

const mapStateToProps = ({ auth }) => ({ auth: auth.isAuthenticated, errors: auth.errors });

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);