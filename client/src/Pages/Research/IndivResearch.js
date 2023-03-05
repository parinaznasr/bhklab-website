import Layout from '../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import {Container, StyledPage, StyledCard } from '../../styles/StyledPage';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import axios from "axios";


const IndivResearch= () => {
    const [ready, setReady] = useState(false);
    const [researches, setResearches] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        const getDataset = async () => {
            const res = await axios.get('/api/data/researches');
            setResearches(res.data.research);
        }
        getDataset().then(()=> {setReady(true)});
    }, []);

    return(
        <Layout>
            <Container>
                <StyledPage className="static">
                    <ScrollAnimation animateIn="fadeIn">
                        {
                            researches.length?
                                researches.map( item => {
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
