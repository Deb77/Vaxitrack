import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
    padding: 7% 3%;
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

const container = props => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default container
