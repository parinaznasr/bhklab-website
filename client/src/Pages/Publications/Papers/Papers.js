import Layout from '../../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {PaginatedPublications} from "../PublicationComponents/PaginatedPublications";
import {PaperCard} from "../PublicationComponents/PublicationCard";
import Container from '@mui/material/Container';

const customizedContent = (item, index) => {
    return ( <PaperCard key = {index} publication={item}/>);
};


const Papers= () => {
    const [ready, setReady] = useState(false);
    const [publications, setPublications] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPublications = async () => {
            const res = await axios.get('/api/data/publications');
            setPublications(res.data.publications.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate)));
            setReady(true);
        }
        getPublications();
    }, []);

    return(
        <Layout>
            <Container fixed>
                { ready &&
                <PaginatedPublications
                    customizedContent={customizedContent}
                    publications= {publications}
                    itemsPerPage={10}
                />}
            </Container>
        </Layout>
    );
}

export default Papers;
