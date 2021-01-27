import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 8%;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;

    @media screen and ( max-width: 1300px ){
        margin: 50px 5%;
    }
    @media screen and ( max-width: 1000px ){
        grid-template-columns: auto ;
    }
    
`
const Grid = props => {
    return (
        <Container>
           {props.children} 
        </Container>
    )
}

export default Grid
