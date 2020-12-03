import styled, { css } from 'styled-components';

export const ContactContainer = styled.section`
    padding: 3%;
    color: ${props=> props.theme.colors.secondary};
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    @media screen and ( max-width: 920px ){
        font-size: 1.3rem;
    }
`

export const Form = styled.form`
    width: 50%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;

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
    margin: 10px;
    background-color: rgba(250,250,250,0.1);
    color: ${props=> props.theme.colors.secondary};
`
export const TextField = styled.input.attrs({
    type: "text"
})`
    ${sharedStyle}
`

export const MessageField = styled.textarea`
    ${sharedStyle}
`

export const Button = styled.button`
    align-self: center;
    max-width: 200px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: ${props=> props.theme.colors.primary};
    margin: 10px;
    padding: 10px;

    &: hover{

        color: ${props=> props.theme.colors.secondary};    
        background: ${props=> props.theme.colors.primary};
    }

    @media screen and ( max-width: 1000px ){
        font-size: 1.1rem;
    }
`