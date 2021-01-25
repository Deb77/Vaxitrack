import styled from 'styled-components';

export const Grid = styled.div`
    margin: 50px 8%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
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