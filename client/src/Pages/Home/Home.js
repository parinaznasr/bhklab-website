import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../Components/Utils/Layout';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {ResearchTopics} from "./ResearchTeams";
import { motion } from 'framer-motion';

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
    font-size: 24px;
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
            <motion.nav
                className="navbar"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            <Container>
                {/*<header className="App-header">*/}
                <div className="header">
                    <div>Bioinformatics and Computational Genomics Laboratory</div>
                    <img src={'/images/Logo/bhklab-logo.png'} alt="logo" />
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
            </motion.nav>
        </Layout>
    );
}

export default Home;
