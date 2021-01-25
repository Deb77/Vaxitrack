import React from 'react'
import styled from 'styled-components';

const Title = styled.h3`
    text-align: center
`
const Heading = props => {
    return (
        <Title>
          {props.children}  
        </Title>
    )
}

export default Heading
