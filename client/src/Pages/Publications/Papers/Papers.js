import Layout from '../../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Moment from 'moment';
import { Button } from 'primereact/button';
import {FilterElement} from "../CustomFilter";
import {StyledPaperCard } from "../StyledPublication";
import CustomDropdown from "../../../Components/Utils/CustomDropdown";
import CustomButton from "../../../Components/Utils/CustomButton";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const customizedContent = (item, index) => {
    return (
        <StyledPaperCard key = {index} className="paper-details">
            <h4>{item.title}</h4>
            <a href={item.url || null} target="_blank">
                {
                    item.image &&
                    <img src={`images/publication/${item.image}`}
                         onError={(e) => e.target.src='images/presentations/presentation-alt.png'}
                         alt={item.name}
                         height={100}
                         width={100}
                         objectfit="cover"
                         className="shadow-1"
                    />
                }
            </a>
            <p><strong>Authors: </strong>{item.authors}</p>
            <p><strong>Date: </strong>{item.releaseDate && Moment(item.releaseDate).format("MMM Do, YYYY")}</p>
            { item.url &&
                <a className="link" href={item.url} target='_blank'>
                    <CustomButton label="" icon="pi pi-external-link" className="p-button-text"  iconPos="right"/>
                </a>
            }
            <span className="material-symbols-outlined" >delete</span>
        </StyledPaperCard>
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
            {   ready && publications.map((item, index)=> customizedContent(item, index))}
            {/*<FilterElement>*/}
            {/*    <CustomDropdown*/}
            {/*        className="dropdown-presentations"*/}
            {/*        value={"hello"}*/}
            {/*        options={[... new Set(publications.map(item=>item.publisher))]}*/}
            {/*        onChange={(e) =>*/}
            {/*            console.log(e)*/}
            {/*        }*/}
            {/*        filter={true}*/}
            {/*        placeholder="Publisher..."*/}
            {/*    />*/}
            {/*    <CustomDropdown*/}
            {/*        className="dropdown-presentations"*/}
            {/*        value={"Year"}*/}
            {/*        options={[... new Set(publications.map(item=>item.year))]}*/}
            {/*        onChange={(e) =>*/}
            {/*            console.log(e)*/}
            {/*            // setPipelineDropdown((prev) => ({*/}
            {/*            //     ...prev,*/}
            {/*            //     selected: e.value,*/}
            {/*            // }))*/}
            {/*        }*/}
            {/*        filter={true}*/}
            {/*        placeholder="Year..."*/}
            {/*    />*/}
            {/*    <CustomDropdown*/}
            {/*        className="dropdown-presentations"*/}
            {/*        value={"Year"}*/}
            {/*        options={["Pharmacogenomics", "Radiomics", "Software Development"]}*/}
            {/*        onChange={(e) =>*/}
            {/*            console.log(e)*/}
            {/*        }*/}
            {/*        filter={true}*/}
            {/*        placeholder="Category..."*/}
            {/*    />*/}
            {/*</FilterElement>*/}

            }
        </Layout>
    );
}

export default Papers;
