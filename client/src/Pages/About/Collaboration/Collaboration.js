import Layout from '../../../Components/Utils/Layout';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import CollaborationMap from "./CollaborationComponents/CollaborationMap";
import Container from "@mui/material/Container";


const Collaboration = () => {
    const history = useNavigate();

    useEffect(() => {
        return(() => {
            if(history.action === 'POP' && history.location.pathname === '/') {
                console.log('history')
                history.replace({
                    pathname: '/',
                    state: {
                    }
                });
            }
        });
    }, [history]);

    return(
        <Layout>
            <Container>
                <CollaborationMap/>
            </Container>
        </Layout>
    );
}

export default Collaboration;
