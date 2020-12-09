import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PasswordField, Button } from '../components/FormElements';
import { userService } from '../services/userService';

const Container = styled.form`
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 10% 20%;
`

const Text = styled.p`
    color: ${props=> props.invalid?props.theme.colors.error:props.theme.colors.secondary};
    font-size: 2rem;
    text-align: center;
    margin: ${props => props.invalid?'20%':'0'}
`

const PasswordReset = (props) => {
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        userService.post('checkToken', {
            resetPasswordToken: props.match.params.token
        })
            .then(({ data }) => {
                if (data.message === 'Password link is okay') {
                    setId(data.id)
                }
            });
    }, [props.match.params.token])

    const onSubmit = (e) => {
        e.preventDefault();
        userService.put('updatePassword', {
            id,
            password,
        })
            .then(({ data }) => {
                alert(data)
                props.history.push('/login');
            })
            .catch(err => alert(err));
    }

    return (
        <>
            {id ? (<Container onSubmit={onSubmit}>
                <Text>Password Reset</Text>
                <PasswordField
                    placeholder="Enter new password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Submit</Button>
            </Container>) :
                (<Text invalid>Sorry!! Your link has either expired or is invalid. </Text>)
            }
        </>
    )
}

PasswordReset.propTypes = {
    props: PropTypes.object
}

export default PasswordReset
