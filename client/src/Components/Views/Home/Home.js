import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../UtilComponents/Layout';
import logo from '../Home/bhklab-logo.png';
import {TwitterTimelineEmbed} from "react-twitter-embed";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Home = () => {
    return(
        <Layout page="home">
            <Container>
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <p>
                        Benjamin Haibe-Kains Lab
                    </p>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="bhklab"
                        options={{ width: 1000, height: 1000}}
                        tweetLimit={5}
                    />
                </header>
            </Container>
        </Layout>
    );
}

export default Home;
