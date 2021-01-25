import React from 'react'
import PropTypes from 'prop-types';
import {
    CardContainer,
    CardTitle,
    CardBody,
    BtnWrapper,
    Button,
} from './CardElements';

const Card = ({ title, description, link, gender, DOB, btnText }) => {
    return (
        <CardContainer>
            <div>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardBody>
                    {gender ? (<p>Gender: {gender}</p>) : null}
                    {DOB ? (<p>Date of Birth: {DOB.split('T')[0]}</p>) : null}
                    {description}
                </CardBody>
            </div>
            <BtnWrapper>
                <Button href={link} target="_blank">
                    {btnText}
                </Button>
            </BtnWrapper>
        </CardContainer>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}

export default Card
