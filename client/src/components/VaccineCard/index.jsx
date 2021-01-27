import React from 'react';
import {
    Box,
    CardContainer,
    CardTitle,
    CardBody,
    Date,
    Icon
} from './VaccineCardElements';

const VaccineCard = ({
    name,
    description,
    dueDate,
    administeredOn
}) => {
    return (
        <CardContainer>
            <CardTitle>{name}</CardTitle>
            <CardBody>
                <p>{description}</p>
                <Box>
                    <Icon />
                    {
                        administeredOn ?
                        <Date>Administered On: {administeredOn.split('T')[0]}</Date>
                        :
                        null
                    }
                    {
                        dueDate ?
                            <Date>Due On: {dueDate.split('T')[0]}</Date>
                            :
                            null
                    }
                </Box>
            </CardBody>
        </CardContainer>
    )
}

export default VaccineCard;
