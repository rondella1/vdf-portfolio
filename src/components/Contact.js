import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
    const [submissionMessage, setSubmissionMessage] = useState(null)

    const sendEmail = (event) => {
        event.preventDefault();

        const name = event.target.user_name.value;
        const email = event.target.user_email.value;
        const message = event.target.message.value;

        if (!name || !email || !message) {
            setSubmissionMessage("There seems to be information missing. Please try again.");
            return;
        }

        emailjs.sendForm('service_6k58mpf', 'template_jzng0bn', event.target, 'sMSJyFxD_YO5c5d-v')
            .then((result) => {
                console.log(result.text);
                setSubmissionMessage("Thank you.")
            }, (error) => {
                console.log(error.text);
                setSubmissionMessage("Please try again.")
            })

        event.target.reset();
    }

    return (
        <>
        <Wrapper>
        <FormContainer>
            <WriteMe>Contact</WriteMe>
            {submissionMessage && 
                (<Message isError={submissionMessage.includes("Please")}>
                    {submissionMessage}
                </Message>)}
            <form onSubmit={sendEmail}>
                <FormGroup>
                    <Label>Full Name </Label>
                    <Input type="text" name="user_name" />
                </FormGroup>
                <FormGroup>
                    <Label>Email </Label>
                    <Input type="email" name="user_email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Message </Label>
                    <Textarea name="message" />
                </FormGroup>
                <FormGroup>
                    <SubmitButton type="submit" value="Send">Send</SubmitButton>
                </FormGroup>
            </form>
        </FormContainer>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 98%;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

const Message = styled.p`
    color: ${props => (props.isError ? "brown" : "black")};
    margin-top: 0px;

    @media (max-width: 600px) {
        font-size: 0.9em;
        margin-top: -15px;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    margin-top: 50px;

    @media (max-width: 600px) {
        width: 98%;
        margin-top: 5px;
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        width: 75%;
        margin-top: 25px;
    }
`;

const WriteMe = styled.h2`
    font-size: 2em;

    @media (max-width: 600px) {
        font-size: 1.5em;
    }

    @media (max-width: 768px) {
        font-size: 1.4em;
        margin-top: 0px;
    }
`;

const FormGroup = styled.div`
    margin: 2px 0;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 1.3em;

    @media (max-width: 600px) {
        font-size: 1.1em;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    font-family: Garamond, serif;
    font-size: 1.1em;
    border: 1px solid lightgrey;

    @media (max-width: 600px) {
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
        width: 90%;
    }

    &:focus {
        outline: 2px solid gray;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 8px;
    margin-bottom: 29px;
    font-family: Garamond, serif;
    border: 1px solid lightgrey;
    font-size: 1.1em;

    @media (max-width: 600px) {
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
        width: 90%;
    }

    &:focus {
        outline: 2px solid gray;
    }
`;

const SubmitButton = styled.button`
    padding: 8px 20px;
    align-self: center;
    background-color: white;
    color: black;
    font-family: 'Bellefair';
    border: 1px solid lightgrey;
    font-size: 1.1em;

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
    }

`;

export default Contact;