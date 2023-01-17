import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const StyledLabel = (props) => {
    const {title}= props;
    return(
        <div style={{marginTop: '10px'}}>
            <label>{title}<span style={{color: 'red'}}>*</span></label>
        </div>
    )
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <form onSubmit={handleSubmit}>
                    <StyledLabel title="Your name"/>
                    <InputText
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                        name="fullName"
                    />

                    <StyledLabel title="E-mail"/>
                    <InputText
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <StyledLabel title="Subject"/>
                    <InputText
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    />

                    <StyledLabel title="Message"/>
                    <textarea
                        rows="5"
                        cols="60"
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />

                    <div>
                        <Button label="Send Message" className="p-button-info"/>
                    </div>
                </form>
            </div>
        </main>
    );
}
