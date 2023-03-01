import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";


const StyledLabel = (props) => {
    const {title}= props;
    return(
        <div>
            <label>{title}<span style={{color: 'red'}}>*</span></label>
        </div>
    )
};

function MarginBar() {
    return (
        <Box
            sx={{
                height: 20,
                backgroundColor: 'rgba(255,255,255,0)'
            }}
        />
    );
}


export const ContactForm = () => {
    // States for contact form fields
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullName.length <= 0) {
            tempErrors["fullName"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            console.log("this")
            setButtonText("Sending");
            const res = await fetch("api/mail/send", {
                body: JSON.stringify({
                    email: email,
                    fullName: fullName,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
    };
    return (
        <main>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '40ch'},
                }}
                autoComplete="off"
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label={<StyledLabel title="Your Name"/>}
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                    />
                    <MarginBar/>
                    <TextField
                        id="outlined-basic"
                        label={<StyledLabel title="Email"/>}
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <MarginBar/>
                    <TextField
                        id="outlined-basic"
                        label={<StyledLabel title="Subject"/>}
                        variant="outlined"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                    <MarginBar/>
                    <TextField
                        id="outlined-multiline-static"
                        label={<StyledLabel title="Message"/>}
                        multiline
                        rows={4}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <MarginBar/>
                    <div>
                        <Button label="Send Message" className="p-button-rounded p-button-info"/>
                    </div>
                </form>
            </Box>
        </main>
    );
}
