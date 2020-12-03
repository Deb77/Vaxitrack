import React from 'react'
import {
    CardContainer,
    CardTitle,
    CardBody,
    BtnWrapper,
    Button,
} from './CardElements';

const Card = ({ title, description, link }) => {
    return (
        <CardContainer>
            <div>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardBody>
                    {description}
                </CardBody>
            </div>
            <BtnWrapper>
                <Button href={link} target="_blank">
                    Learn More
                </Button>
            </BtnWrapper>
        </CardContainer>
    )
}

export default Card