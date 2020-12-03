import styled from 'styled-components';

export const FooterContainer = styled.div`
    color: ${props=> props.theme.colors.secondary};
    background: ${props=> props.theme.colors.primary};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Icon = styled.a`
    font-size: 2rem;
    color: ${props=> props.theme.colors.secondary};
`

export const Copyrights = styled.div`
    font-weight: 100;
    font-size: 1rem;
    text-align: center;
    margin-top: 16px;
`