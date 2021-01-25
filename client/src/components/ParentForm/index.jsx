import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../../actions/children';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    FormContainer,
    Form,
    TextField,
    Button
} from '../FormElements';
import {
    Grid,
    GridItem,
    Title,
    Text,
    RadioButtonContainer,
    RadioButton
} from './ParentFormElements';

const ParentForm = ({ parentId, childrenActions }) => {
    const [name, setName] = useState("");
    const [DOB, setDOB] = useState(new Date());
    const [gender, setGender] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = ({ name, gender, DOB, parentId });
        childrenActions.addChild(formData);
    }

    return (
        <FormContainer>
            <Title>You have not registered any
            children, please enter the following
            details to register your child.
            </Title>
            <Form user onSubmit={onSubmit}>
                <TextField
                    placeholder="Enter child's name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Grid>
                    <GridItem>
                        <Text>Enter child's Date of Birth</Text>
                        <DatePicker
                            selected={DOB}                            
                            onChange={date => setDOB(date)}                            
                        />    
                    </GridItem>
                    <GridItem>
                        <Text>Select Child's Gender</Text>
                        <RadioButtonContainer>                            
                            <RadioButton
                                name="gender"
                                value="male"
                                onChange={e => setGender(e.target.value)}
                            />
                            <Text>Male</Text>
                        </RadioButtonContainer>
                        <RadioButtonContainer>
                            <RadioButton
                                name="gender"
                                value="female"
                                onChange={e=>setGender(e.target.value)}
                            />
                            <Text>Female</Text>
                        </RadioButtonContainer>
                    </GridItem>
                </Grid>
                <Button>
                    Submit
                </Button>
            </Form>
        </FormContainer> 
    )
}

ParentForm.propType = {
    parentId: PropTypes.string,
    children: PropTypes.array,
    childrenActions: PropTypes.object
}


const mapStateToProps = ({ auth }) => ({ parentId: auth.user })

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ParentForm)
