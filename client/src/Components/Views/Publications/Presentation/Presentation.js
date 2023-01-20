import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
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
import StyledGroupAvatar from "../../../UtilComponents/StyledGroupAvatar";


const StyledPresentation = styled.div`
    width: 80%;
   .event-title {
      font-size: 16px;
      margin: 0px 0px 10px 10px;
    }
  
    #p-card-subtitle{
        color: ${colors.gray_text};
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 12px;
        font-weight: normal;
    }
  
    #content {
        font-size: 15px;
        line-height: 25px;
        font-weight: normal;
        width: 75%;
        color: ${colors.gray_text};
    }
    #p-timeline-event-opposite {
      width: 0px;
    }
    a {
      text-decoration: none;
      color: ${colors.navbarLink}
    }
`;

const customizedMarker = () => {
    return (
        <i color= 'black' className='pi pi-circle-fill'></i>
    );
};


const StyledCard =  styled.div`
  display: flex;
  flex-direction: row;
  .column {
    
  }
`

const customizedContent = (item) => {
    return (
        <Card
            title={item.title? item.title : `Event: ${item.event || ""}`}
            subTitle={item.date && Moment(item.date).format("MMM Do, YYYY")}
        >
            <StyledCard>
                <div className="column">
                    <a href={item.url || null} target="_blank">
                        {
                            item.image ?
                                <img src={`images/presentations/${item.image}`}
                                     onError={(e) => e.target.src='images/presentations/presentation-board.png'}
                                     alt={item.name}
                                     width={150}
                                     height={100}
                                     className="shadow-1"
                                /> :
                                <img src={`images/presentations/presentation-board.png`}
                                     alt="image is unavailable."
                                     width={150}
                                     height={100}
                                     className="shadow-1"
                                />
                        }
                    </a>
                </div>
                <div className="column">
                    <div className="event-title">
                        { item.title && item.event && `Event: ${item.event}`}
                    </div>
                    { item.members && <StyledGroupAvatar members={item.members}/>}
                </div>
                { item.url &&
                    <a href={item.url} target='_blank'>
                        <Button label={item.format} icon="pi pi-external-link" className="p-button-text"  iconPos="right"/>
                    </a>
                }
            </StyledCard>
        </Card>
    );
};


const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  .p-timeline-event-opposite {
    display: none;
  }
  .p-card-title {
    font-size: 18px;
  }

  .p-card-subtitle {
    font-size: 16px;
  }
`;


const Presentation= () => {
    const [ready, setReady] = useState(false);
    const [presentations, setPresentation] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPresentation = async () => {
            const res = await axios.get('/api/data/presentations');
            setPresentation(res.data.presentations.sort((a,b) => new Date(b.date) - new Date(a.date)));
            setReady(true);
        }
        getPresentation();
    }, []);

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
                {
                    ready &&
                    <StyledPresentation>
                        <Timeline
                            value={presentations.sort((a,b) => new Date(a)-new Date(b))}
                            align="left"
                            className="customized-timeline"
                            marker={customizedMarker}
                            content={customizedContent}
                        />
                    </StyledPresentation>
                }
            </Container>
        </Layout>
    );
}

export default Presentation;
