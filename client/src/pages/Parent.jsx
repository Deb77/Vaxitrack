import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    FormContainer,
    TextField
} from '../components/FormElements';

const ParentForm = () => {

}

const Parent = () => {
    const [name, setName] = useState("");
    const [DOB, setDOB] = useState(new Date());

    return (
        <FormContainer>
            <TextField
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <DatePicker
                selected={DOB}
                onChange={date => setDOB(date)}
            />
        </FormContainer>
    )
}

export default Parent
