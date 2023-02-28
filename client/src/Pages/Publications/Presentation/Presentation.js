import Layout from '../../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import { Timeline } from 'primereact/timeline';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import { FilterElement} from "../CustomFilter";
import {StyledPublication, StyledPaperCard} from "../StyledPublication";
import GroupAvatar from "../../../Components/Utils/GroupAvatar";
import CustomDropdown from "../../../Components/Utils/CustomDropdown";


const customizedMarker = () => {

};


const customizedContent = (item) => {
    return (
        <Card
            title={item.title? item.title : `Event: ${item.event || ""}`}
            // subTitle={item.date && Moment(item.date).format("MMM Do, YYYY")}
        >
            <StyledPaperCard>
                <div className="column">
                    <div className="event-title">
                        { item.title && item.event && `Event: ${item.event}`}
                        {/*{ item.url &&*/}
                        {/*<a className="link" href={item.url} target='_blank'>*/}
                        {/*    <Button label={item.format} icon="pi pi-external-link" className="p-button-text"  iconPos="right"/>*/}
                        {/*</a>*/}
                        {/*}*/}
                    </div>
                    { item.members && <GroupAvatar members={item.members}/>}
                </div>
                <div className="column">
                    <a href={item.url || null} target="_blank">
                        {
                            item.image &&
                                <img src={`images/presentations/${item.image}`}
                                     onError={(e) => e.target.src='images/presentations/presentation-alt.png'}
                                     alt={item.name}
                                     width={150}
                                     height={100}
                                     className="shadow-1"
                                />
                        }
                    </a>
                </div>
            </StyledPaperCard>
        </Card>

    );
};


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
            <StyledPublication>
                {   ready &&
                    <>
                        <Timeline
                            value={presentations.sort((a,b) => new Date(a)-new Date(b))}
                            align="left"
                            className="customized-timeline"
                            marker={customizedMarker}
                            content={customizedContent}
                            style={{width: '80%'}}
                        />
                        <FilterElement>
                            <span className="label">Filter by:</span>
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"hello"}
                                options={[... new Set(presentations.map(item=>item.members.map(member => member.name)))]}
                                onChange={(e) =>
                                    console.log(e)
                                }
                                filter={true}
                                placeholder="Presenter..."
                            />
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"Year"}
                                options={[... new Set(presentations.map(item=> new Date(item.date).getFullYear()))]}
                                onChange={(e) =>
                                    console.log(e)
                                }
                                filter={true}
                                placeholder="Year..."
                            />
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"hello"}
                                options={[... new Set(presentations.map(item=>item.format))]}
                                onChange={(e) =>
                                    console.log(e)
                                }
                                filter={true}
                                placeholder="Format..."
                            />
                        </FilterElement>
                    </>
                }
            </StyledPublication>
        </Layout>
    );
}

export default Presentation;
