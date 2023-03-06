import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import styled from "styled-components";
import Button from '@mui/material/Button';

const StyledLabel = (props) => {
    const {title}= props;
    return(
        <div>
            <label>{title}<span style={{color: 'red'}}>*</span></label>
        </div>
    )
};


/**
 * A function to create margin between input fields
 */
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

const StyledHeading= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 60px;
  line-spacing: 20px;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
`
/**
 * A custom React component that returns a contact form to receive emails by a registered
 * email account on SendGrid
 * @example
 * <ContactFrom/>
 */
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
            <StyledHeading>
                <b>Benjamin Haibe-Kains, Ph.D.</b>
                Scientist, Princess Margaret Cancer Centre, University Health Network
                Assistant Professor, Department of Medical Biophysics, University of Toronto
            </StyledHeading>
            <Box
                sx={{  display: 'flex',
                    justifyContent: 'left'}}
                autoComplete="off"
            >
                <form onSubmit={handleSubmit} >
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
                        sx={{ marginLeft: '5px', width: "200%" }}
                        id="outlined-multiline-static"
                        label={<StyledLabel title="Message"/>}
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <MarginBar/>
                    <Button variant="contained" type="submit">
                        Send
                    </Button>
                </form>
            </Box>
        </main>
    );
}
