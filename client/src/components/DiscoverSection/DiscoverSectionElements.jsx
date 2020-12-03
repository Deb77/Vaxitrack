import styled from 'styled-components';

export const DiscoverContainer = styled.section`
    padding: 3%;
    min-height: 100vh;
    color: ${props=> props.theme.colors.secondary};
    font-size: 1.5rem;
    @media screen and ( max-width: 1300px ){
        font-size: 1.3rem;
    }
    @media screen and ( max-width: 1050px ){
        font-size: 1.2rem;
    }
    @media screen and ( max-width: 900px ){
        font-size: 1rem;
    }
    @media screen and ( max-width: 400px ){
        font-size: 0.9rem;
    }
`

export const Grid = styled.div`
    margin: 50px 8%;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;

    @media screen and ( max-width: 1300px ){
        margin: 50px 5%;
    }
    @media screen and ( max-width: 1000px ){
        margin: 50px 3%;
    }
    @media screen and ( max-width: 600px ){
        grid-template-columns: auto;
    }
    
`
