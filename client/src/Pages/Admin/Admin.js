import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../Components/Utils/Layout';
import Login from "./Login";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #efefef;
`;

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
