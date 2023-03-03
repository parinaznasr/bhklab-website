import Layout from '../../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {StyledPublicationCard} from "../StyledPublication";
import GroupAvatar from "../../../Components/Utils/GroupAvatar";
import CustomDropdown from "../../../Components/Utils/CustomDropdown";
import { FilterElement} from "../CustomFilter";
import {PaginatedPublications} from "../PaginatedPublications";
import PublicationCard from "../PublicationCard";


const customizedContent = (item, index) => {
    return ( <PublicationCard key = {index} publication={item}/>);
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
            {   ready &&
                <PaginatedPublications
                    customizedContent={customizedContent}
                    publications= {presentations}
                    itemsPerPage={10}
                />
            }
        </Layout>
    );
};

export default Presentation;
