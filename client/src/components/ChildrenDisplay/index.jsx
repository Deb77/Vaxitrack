import React from 'react'
import Container from '../Container';
import Title from '../Heading';
import { Grid } from './ChildrenDisplayElements'
import Card from '../Card';

const ChildrenDisplay = ({children}) => {
    return (
        <Container>
            <Title>List of registered children</Title>
            <Grid>
                {children.map(child =>
                    <Card
                        title={child.name}
                        DOB={child.DOB}
                        gender={child.gender}
                        btnText={"Check Vaccines"}
                    />)}
            </Grid>
        </Container>
    )
}

export default ChildrenDisplay
