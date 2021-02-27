import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as VaccineActionCreators from '../../actions/vaccine';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import { Label, Button } from '../FormElements';
import {
    Box,
    CardContainer,
    CardTitle,
    CardBody,
    Date,
    Icon,
    EditIcon,
    CloseButton,
    CloseButtonContainer
} from './VaccineCardElements';

const VaccineCard = ({
    vaccineId,
    name,
    description,
    dueDate,
    administeredOn,
    admin,
    vaccineActions
}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [due, setDue] = useState();
    const [administeredDate, setAdministeredDate] = useState(new window.Date());

    useEffect(() => {
        administeredOn
            ?
            setAdministeredDate(new window.Date(administeredOn))
            :
            setAdministeredDate(new window.Date())
        
        dueDate
            ?
            setDue(new window.Date(dueDate))
            :
            setDue(new window.Date())
    }, [administeredOn, dueDate])
    
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const onClick = () => {
        vaccineActions.updateVaccine(vaccineId,
            {
                administeredOn: administeredDate,
                dueDate: due
            })
        closeModal();
    }

    const customStyles = {
        content: {
            margin: '18% 30%',
            inset: '0',
            position: 'static',
            borderRadius: '5px'
        }
    };
    
    return (
        <CardContainer>
            <Box>
                <CardTitle>{name}</CardTitle>
                {admin ? <EditIcon onClick={openModal}/> : null}
            </Box>
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
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Update Form"
                ariaHideApp={false}
            > 
                <CloseButtonContainer>
                    <CloseButton onClick={closeModal}>X</CloseButton>
                </CloseButtonContainer>
                <div style={{textAlign:'center'}}>
                    <div>
                        <Label>Update Due Date</Label>
                        <br />
                        <DatePicker selected={due} onChange={date => setDue(date)} />  
                    </div>
                    <div>
                        <Label>Update Administered Date</Label>
                        <br />
                        <DatePicker selected={administeredDate} onChange={date => setAdministeredDate(date)} />    
                    </div>
                    <Button onClick={onClick}>Save</Button>
                </div>
            </Modal>
        </CardContainer>
    )
}

VaccineCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    administeredOn: PropTypes.string,
    admin: PropTypes.bool,
    vaccineActions: PropTypes.object
}

const mapStateToProps = ({ adminAuth }) => ({ admin: adminAuth.isAuthenticated });

const mapDispatchToProps = dispatch => ({
    vaccineActions: bindActionCreators(VaccineActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(VaccineCard);
