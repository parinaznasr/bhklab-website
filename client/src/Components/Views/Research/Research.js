import Layout from '../../UtilComponents/Layout';
import React from 'react';
import styled from "styled-components";
import research from './research.json';
import {Container, StyledPage, StyledCard } from '../../../styles/StyledPage';
import colors from "../../../styles/colors";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Research= () => {
    return(
        <Layout>
            <Container>
                <StyledPage className="static">
                    <ScrollAnimation animateIn="fadeIn">
                    {
                        research.length?
                        research.map( item => {
                            return (
                                <StyledCard>
                                    <div>
                                        <div className="subject">{item.title}</div>
                                        <div className="content">{item.description}</div>
                                    </div>
                                </StyledCard>)
                        }):''
                    }
                    </ScrollAnimation>
                </StyledPage>
            </Container>
        </Layout>
    );
}

export default Research;
