import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/Home.jpg'

export const FormContainer = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(${HomeImage})
        no-repeat center fixed;
        background-size: cover;
        height: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 10% 0;
    color: #fff;

    @media screen and ( max-width:700px ){
        padding: 30% 0;
    }    
`

export const Form = styled.form`
    width: 50%;
    min-height: 450px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: ${props => props.user?'5%':'0'};
    border-radius: ${props => props.user?'15px':'0'};
    box-shadow: ${props => props.user?'0 0 15px #a43f49':'none'};
    background: ${props => props.user?'rgba(0,0,0,0.4)':'none'};
    @media screen and ( max-width: 1000px ){
        width: 70%;
    }
     @media screen and ( max-width: 700px ){
        width: 85%;
        font-size: 1rem;
    }
`

const sharedStyle = css`
    width: 100%;
    padding: 10px 20px;
    border: 1px solid ${props=> props.theme.colors.secondary};
    margin: ${props => props.home?'10px':'0px'};
    background-color: rgba(250,250,250,0.1);
    color: ${props=> props.theme.colors.secondary};
`
export const TextField = styled.input.attrs({
    type: "text"
})`
    ${sharedStyle}
`

export const PasswordField = styled.input.attrs({
    type: "password"
})`
    ${sharedStyle}
`

export const MessageField = styled.textarea`
    ${sharedStyle}
`

export const Button = styled.button`
    align-self: ${props => props.user?'left':'center'};
    max-width: 200px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: ${props=> props.theme.colors.primary};
    margin: 10px 0;
    padding: 10px;

    &: hover{

        color: ${props=> props.theme.colors.secondary};    
        background: ${props=> props.theme.colors.primary};
    }

    @media screen and ( max-width: 1000px ){
        font-size: 1.1rem;
    }
`
export const sharedStyle2 = css`
    text-align: right;
    color: ${props=> props.theme.colors.secondary}!important;
    font-weight: 100;
    text-decoration: underline;
`
export const SignUpRedirect = styled(Link)`
    ${sharedStyle2}
`

export const Error = styled.div`
    color: ${props=> props.theme.colors.error};
    font-weight: 300;
    font-size: 1rem;
`

export const PasswordLink = styled.p`
    ${sharedStyle2}
    cursor: pointer;
`