import Layout from '../../../Components/Utils/Layout';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import CollaborationMap from "./CollaborationComponents/CollaborationMap";


const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;

  html {
    font-size: 1.25rem;
  }

  body {
    margin: 0;
    padding: 0 1.5rem;
  }
`;

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
