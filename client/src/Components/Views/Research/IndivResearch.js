import Layout from '../../UtilComponents/Layout';
import React from 'react';
import research from './research.json';
import {Container, StyledPage, StyledCard } from '../../../styles/StyledPage';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const IndivResearch= () => {
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

export default IndivResearch;
