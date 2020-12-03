import styled from 'styled-components';

export const HomeContainer = styled.section`
    height: 100vh;
    padding: 5%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props=> props.theme.colors.secondary};
`
export const Text = styled.p`
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: bold;
    @media screen and ( max-width: 1000px ){
        font-size: 2.5rem;
    }
    @media screen and ( max-width: 682px ){
        font-size: 2rem;
    }
`

export const Subtext = styled.p`
    text-align: center;
    font-size: 1.5rem;

    @media screen and ( max-width: 1000px ){
        font-size: 1rem;
    }
`