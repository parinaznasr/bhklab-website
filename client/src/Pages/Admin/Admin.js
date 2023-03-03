import React, { useState } from 'react';
import Layout from '../../Components/Utils/Layout';
import Login from "./Login";
import Container from "@mui/material/Container";

const Admin = () => {
    return(
        <Layout>
            <Container>
                {/*<Authentication/>*/}
                <Login/>
            </Container>
        </Layout>
    );
}

export default Admin;
