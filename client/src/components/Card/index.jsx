import React from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../../actions/children';
import {
    CardContainer,
    CardTitle,
    CardBody,
    BtnWrapper,
    Button,
    BtnLink
} from './CardElements';

const Card = ({
    title,
    description,
    link,
    id,
    gender,
    DOB,
    btnText,
    child,
    childRoute,
    childrenActions
}) => {
    
    const onClick = () => {
        childrenActions.setSelected(id);
    }

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
                {child ?
                    (
                        <BtnLink onClick={onClick} to={childRoute}>
                            {btnText}
                        </BtnLink>
                    )
                    :
                    (
                        <Button href={link} target="_blank">
                            {btnText}
                        </Button>                        
                    )}
            </BtnWrapper>
        </CardContainer>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    gender: PropTypes.string,
    DOB: PropTypes.string,
    btnText: PropTypes.string,
    child: PropTypes.bool,
    childrenActions: PropTypes.object
}

const mapStateToProps = ({ adminAuth }) => ({ admin: adminAuth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
