import React, { useState } from 'react'
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

const ParentForm = () => {
    const [name, setName] = useState("");
    const [DOB, setDOB] = useState(new Date());
    const [gender, setGender] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ name, gender, DOB });
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

export default ParentForm
