import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../UtilComponents/Layout';
import logo from '../Home/bhklab-logo.png';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import colors from "../../../styles/colors";
import {ResearchTopics} from "./Teams";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
    //background-image: url('./images/pmcrt1.jpg');
  .header{
    padding: 50px 5%;
    color: black;
    height: 60vh;
    font-size: 40px;
    text-align: center;
    img {
      margin-top: 50px;
      width: 300px;
    }
  }

`;




const Home = () => {
    return(
        <Layout page="home">
            <Container>
                {/*<header className="App-header">*/}
                <div className="header">
                    <div>Welcome to the Bioinformatics and Computational Genomics Laboratory of
                        Benjamin Haibe-Kains</div>
                    <img src={logo} alt="logo" />
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}

                    {/*<TwitterTimelineEmbed*/}
                    {/*    sourceType="profile"*/}
                    {/*    screenName="bhklab"*/}
                    {/*    options={{ width: 1000, height: 1000}}*/}
                    {/*    tweetLimit={5}*/}
                    {/*/>*/}
                </div>
                <ResearchTopics/>
            </Container>
        </Layout>
    );
}

export default Home;
