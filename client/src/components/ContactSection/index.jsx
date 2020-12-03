import React, { useState } from 'react'
import { Title, Underline, TitleBody } from '../SectionElements';
import {
    ContactContainer,
    Form,
    TextField,
    MessageField,
    Button
} from './ContactSectionElements';

const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, subject, message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <ContactContainer id="contact">
            <Title>Contact Us</Title>
            <Underline />
            <TitleBody>Feel free to get in touch for any queries and details.</TitleBody>
            <Form onSubmit={onSubmit}>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name..."
                />
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email..."
                />
                <TextField
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject..."
                />
                <MessageField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    rows="5"
                />
                <Button>Send Message</Button>
            </Form>
        </ContactContainer>
    )
}

export default ContactSection
