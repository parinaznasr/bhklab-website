import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";

const StyledPublication = styled.div`
    width: 80%;
    .subject {
        color: ${colors.gray_text};
        display: flex;
        align-items: center;
        height: 60px;
        font-size: 20px;
        font-weight: normal;
        margin-top: 30px;
    }
    .date{
        color: ${colors.light_gray};
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 12px;
        font-weight: normal;
    }
    .content {
        font-size: 15px;
        line-height: 25px;
        font-weight: normal;
        width: 75%;
        color: ${colors.gray_text};
    }
    .divider {
        margin-bottom: 30px;
        padding-top: 10px;
    }
`;


const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const customizedPublication = (item,index, divider) => {
    return (
        <StyledPublication key = {index}>
            <div className='subject'>{item.title}</div>
            {/*<div className='content'>{item.title , item.authors, item.year*/}
            {/*    , item.categories, item.url, item.pmid, item.publisher, item.releaseDate,*/}
            {/*    item.image}</div>*/}
        </StyledPublication>
    );
}

const Papers= () => {
    const [ready, setReady] = useState(false);
    const [publications, setPublication] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPublication = async () => {
            const res = await axios.get('/api/data/publications');
            setPublication(res.data.publications);
        }
        getPublication();
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
                {/*<StyledPublication className="individual">*/}
                {/*    {*/}
                {/*        publications.length?*/}
                {/*            <>*/}
                {/*                {publications.sort((a,b)=> b.date - a.date).map((item,i) =>*/}
                {/*                    (customizedPublication(item, i, (i !==publications.length-1))))}*/}
                {/*            </>*/}
                {/*            : 'Loading'*/}
                {/*    }*/}
                {/*</StyledPublication>*/}
                <StyledPublication className="individual">
                    {
                        publications.length?
                            <>
                                {publications.sort((a,b)=> b.date - a.date).map((item,i) =>
                                    (customizedPublication(item, i, (i !==publications.length-1))))}
                            </>
                            : ''
                    }
                </StyledPublication>
            </Container>
        </Layout>
    );
}

export default Papers;
