import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Grid, AddIcon } from './ChildrenDisplayElements';
import Container from '../Container';
import Title from '../Heading';
import Card from '../Card';
import ParentForm from '../ParentForm';

const ChildrenDisplay = ({
    children,
    admin
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [childRoute, setChildRoute] = useState('/parent/child');

    useEffect(() => {
        if (admin) {
            setChildRoute('/admin/child');
        }
    }, [admin])
    
    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            backgroundColor: 'rgb(1,1,1)',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '400px'
        }
    }; 
    
    return (
        <Container>
            <Title>List of registered children</Title>
            <Grid>
                {children.map((child,i) =>
                    <Card
                        key={i}
                        title={child.name}
                        DOB={child.DOB}
                        gender={child.gender}
                        id={child._id}
                        btnText={"Check Vaccines"}
                        child={true}
                        childRoute={childRoute}
                    />)}
            </Grid>
            {!admin &&
                (<AddIcon>
                    <BsPlusCircleFill onClick={openModal} />
                </AddIcon>)
            }
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <ParentForm closeModal={closeModal} modal={true}/>
            </Modal>
        </Container>
    )
}

ChildrenDisplay.propTypes = {
    children: PropTypes.array
}

export default ChildrenDisplay
