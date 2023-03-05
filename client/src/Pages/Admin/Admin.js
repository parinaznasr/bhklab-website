import React, { useState } from 'react';
import Layout from '../../Components/Utils/Layout';
import Login from "./Login";
import Container from "@mui/material/Container";
import {FormControl, InputAdornment, InputLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Input, Visibility, VisibilityOff} from "@mui/icons-material";
import styled from 'styled-components';
import AdminPage from "./AdminComponents/AdminForm";



const Admin = () => {
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        correctUsername: 'weTheBHKLabAdmins',
        correctPass: '123',
        incorrectPassword: false,
        showPassword: false,
        showDiv: false,
    });

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            if (values.password === values.correctPass) {
                setValues({
                    ...values, showDiv: true, incorrectPassword: false,
                });
            } else {
                setValues({ ...values, incorrectPassword: true });
            }
        }
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <Layout>
            <Container >
                <div>
                    {!values.ready ?
                        <AdminPage/>
                    :
                        <Login/>
                    }
                </div>
            </Container>
        </Layout>
    );
}

export default Admin;
