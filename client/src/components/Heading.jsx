import React from 'react'
import styled from 'styled-components';

const Title = styled.h3`
    text-align: center;
    margin-top: 5%;

    @media screen and ( max-width: 650px ){
        margin-top : 20%;
    }
`
const Heading = props => {
    return (
        <Title>
          {props.children}  
        </Title>
    )
}

export default Heading
