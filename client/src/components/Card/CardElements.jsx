import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(250, 250, 250, 0.1);
    padding: 20px;
    width: 100%;
    max-height: 400px;
    font-size: 1.2rem;

    &:hover{
        background: rgba(255,255,255,0.7);
        transition: all 0.5s;
    }

    @media screen and ( max-width: 920px ){
        font-size: 1rem;
    }
`

export const CardTitle = styled.div`
    color: rgba(255,255,255,0.9);
    font-size: 2rem;
    font-weight: bold;
    @media screen and ( max-width: 920px ){
        font-size: 1.4rem;
    }

    ${CardContainer}:hover & {
    color: #000;
    }
`

export const CardBody = styled.div`
    margin-top: 5px;

    ${CardContainer}:hover & {
    color: #2e2e2e;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const sharedStyle = css`
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    color: ${props=> props.theme.colors.secondary};
    padding: 5px;
    margin: 10px;
    border: 1px solid ${props=> props.theme.colors.secondary};
    border-radius: 2px;

    &: hover{
        color: ${props=> props.theme.colors.primary};
        border: 1px solid ${props=> props.theme.colors.primary};
        text-decoration: none;
    }

    ${CardContainer}:hover & {
        color: ${props=> props.theme.colors.primary};
        border: 1px solid ${props=> props.theme.colors.primary};
        text-decoration: none;
    }
`

export const Button = styled.a`
    ${sharedStyle}
`

export const BtnLink = styled(Link)`
    ${sharedStyle}
`