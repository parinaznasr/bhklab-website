import Layout from '../../UtilComponents/Layout';
import React from 'react';
import styled from "styled-components";
import research from './research.json';
import "animate.css/animate.min.css";
import HyperLink from "../../UtilComponents/HyperLink";

const StyledCard = styled.div`
  border-color: #ff0000;
  border-width: 1px;
  height: 80vh;
  margin: 5px;
  border-style: none;
  width: 300px;
  display: flex;
  flex-direction: column;
`

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .subject {
    color: black;
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 20px;
    font-weight: normal;
    margin-top: 30px;
  }
`

const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: row;
`;

const Research= () => {
    return(
        <Layout>
            <Container>
                <StyledPage className="static">
                    {
                        research.length?
                        research.map( item => {
                            return (
                                <StyledCard className="research-card" style={{backgroundImage: 'url(' + require("./images/research_network.jpeg") + ')' }}>
                                    <text className="subject">{item.title}</text>
                                    <HyperLink>

                                    </HyperLink>
                                </StyledCard>)
                        }):''
                    }
                </StyledPage>
            </Container>
        </Layout>
    );
}

export default Research;
