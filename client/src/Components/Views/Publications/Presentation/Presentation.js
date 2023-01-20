import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import { Timeline } from 'primereact/timeline';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import CustomButton from "../../../UtilComponents/CustomButton";
import Moment from 'moment';
import {StyledLink} from "../../../../styles/StyledLink";


const StyledPresentation = styled.div`
    width: 80%;
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
`;

const customizedMarker = () => {
    return (
        <i color= 'black' className='pi pi-circle-fill'></i>
    );
};

const customizedContent = (item) => {
    return (
        <Card
            title={item.title? item.title : `Event: ${item.event || ""}`}
            subTitle={Moment(item.date).format("MMM Do, YYYY")}
        >
            { item.image &&
            <img src={`images/presentations/${item.image}`}
                 onError={(e) =>
                     e.target.src='images/bhklab.png'}
                 alt={item.name}
                 width={180}
                 className="shadow-1"
            />
            }
            {
                item.url &&
                <a href={item.url} target='_blank'>
                    <CustomButton label={item.format} className="pi-external-link p-button-text" iconPos="right"/>
                </a>
            }

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
`;


const Presentation= () => {
    const [ready, setReady] = useState(false);
    const [presentations, setPresentation] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPresentation = async () => {
            const res = await axios.get('/api/data/presentations');
            setPresentation(res.data.presentations);
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
