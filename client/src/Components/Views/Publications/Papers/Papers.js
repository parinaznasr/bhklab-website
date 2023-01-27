import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Timeline } from 'primereact/timeline';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import Moment from 'moment';
import { Button } from 'primereact/button';
import {FilterElement} from "../CustomFilter";
import {StyledPublication, StyledCard} from "../StyledPublication";
import CustomDropdown from "../../../UtilComponents/CustomDropdown";


const customizedContent = (item) => {
    return (
        <Card
            title={item.title}
            // subTitle= {item.releaseDate && Moment(item.releaseDate).format("MMM Do, YYYY")}
        >
            <StyledCard>
                <div className="column">
                    <div className="event-title">
                        {item.authors}
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
                                 height={100}
                                 width={100}
                                 objectFit="cover"
                                 className="shadow-1"
                            />
                        }
                    </a>
                </div>
            </StyledCard>
        </Card>

    );
};



const Papers= () => {
    const [ready, setReady] = useState(false);
    const [publications, setPublications] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPublications = async () => {
            const res = await axios.get('/api/data/publications');
            setPublications(res.data.publications.sort((a,b) => new Date(b.date) - new Date(a.date)));
            setReady(true);
        }
        getPublications();
    }, []);

    return(
        <Layout>
            <StyledPublication>
                {   ready &&
                    <>
                        <Timeline
                            value={publications.sort((a,b) => new Date(b.releaseDate)-new Date(a.releaseDate))}
                            align="left"
                            className="customized-timeline"
                            content={customizedContent}
                            style={{width: '80%'}}
                        />
                        <FilterElement>
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"hello"}
                                options={[... new Set(publications.map(item=>item.publisher))]}
                                onChange={(e) =>
                                    console.log(e)
                                }
                                filter={true}
                                placeholder="Publisher..."
                            />
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"Year"}
                                options={[... new Set(publications.map(item=>item.year))]}
                                onChange={(e) =>
                                    console.log(e)
                                    // setPipelineDropdown((prev) => ({
                                    //     ...prev,
                                    //     selected: e.value,
                                    // }))
                                }
                                filter={true}
                                placeholder="Year..."
                            />
                            <CustomDropdown
                                className="dropdown-presentations"
                                value={"Year"}
                                options={["Pharmacogenomics", "Radiomics", "Software Development"]}
                                onChange={(e) =>
                                    console.log(e)
                                }
                                filter={true}
                                placeholder="Category..."
                            />
                        </FilterElement>
                    </>
                }
            </StyledPublication>
        </Layout>
    );
}

export default Papers;
