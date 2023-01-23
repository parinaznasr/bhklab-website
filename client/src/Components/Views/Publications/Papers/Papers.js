import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import { Timeline } from 'primereact/timeline';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import Moment from 'moment';
import { Button } from 'primereact/button';
import {CustomFilter, FilterElement} from "./CustomFilter";


const StyledCard =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .column {
    flex-direction: column;
  }
`

const customizedContent = (item) => {
    return (
        <Card
            title={item.title}
            subTitle={item.authors}
        >
            <StyledCard>
                <div className="column">
                    <div className="event-title">
                        {item.releaseDate && Moment(item.releaseDate).format("MMM Do, YYYY")}
                        { item.url &&
                            <a className="link" href={item.url} target='_blank'>
                                <Button label="" icon="pi pi-external-link" className="p-button-text"  iconPos="right"/>
                            </a>
                        }
                    </div>
                </div>
                <div className="column">
                    <a href={item.url || null} target="_blank">
                        {
                            item.image &&
                            <img src={`images/publication/${item.image}`}
                                 onError={(e) => e.target.src='images/presentations/presentation-alt.png'}
                                 alt={item.name}
                                 width={150}
                                 height={100}
                                 className="shadow-1"
                            />
                        }
                    </a>
                </div>
            </StyledCard>
        </Card>

    );
};


const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: row;

  .p-timeline-event-opposite {
    display: none;
  }

  .p-card-title {
    font-size: 16px;
  }

  .p-card-subtitle {
    font-size: 14px;
  }

  .p-card-content {
    padding: 0px;
  }
  
  .p-avatar-group {
    margin-buttom: 0px;
  }
  
  .p-card {
    border-style: none;
  }
  
  .p-card:hover {
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    border-color: lightgray;
    border-width: 1px;
    border-style: solid;
    background-color: white;
  }

  .event-title {
    font-size: 14px;
    margin: 0px 0px 5px 0px;
  }

  .pi-circle-fill {
    color: ${colors.navbarLink};
  }

  #p-card-subtitle {
    color: ${colors.gray_text};
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    font-weight: normal;
  }

  #content {
    font-size: 14px;
    line-height: 25px;
    font-weight: normal;
    width: 75%;
    color: ${colors.gray_text};
  }

  #p-timeline-event-opposite {
    width: 0px;
  }

  .p-timeline-event-connector {
    background-color: #e82222;
  }

  .p-timeline-event-separator {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${colors.navbarLink}
  }
  
`;


const Papers= () => {
    const [ready, setReady] = useState(false);
    const [publications, setPublications] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPublications = async () => {
            const res = await axios.get('/api/data/publications');
            console.log("!!!",res)
            setPublications(res.data.publications.sort((a,b) => new Date(b.date) - new Date(a.date)));
            setReady(true);
        }
        getPublications();
    }, []);

    return(
        <Layout>
            <Container>
                {   ready &&
                <Timeline
                    value={publications.sort((a,b) => new Date(b.releaseDate)-new Date(a.releaseDate))}
                    align="left"
                    className="customized-timeline"
                    content={customizedContent}
                    style={{width: '80%'}}
                />
                }
                <FilterElement>
                    <CustomFilter/>
                </FilterElement>
            </Container>
        </Layout>
    );
}

export default Papers;
