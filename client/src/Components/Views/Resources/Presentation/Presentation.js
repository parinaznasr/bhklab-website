import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";

const StyledPresentation = styled.div`
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

const customizedPresentation = (item,index, divider) => {
    return (
        <StyledPresentation key = {index}>
            <div className='subject'>{item.title}</div>
            <div className='content'>{item.event}</div>
        </StyledPresentation>
    );
}

const Presentation= () => {
    const [ready, setReady] = useState(false);
    const [presentations, setPresentation] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPresentation = async () => {
            const res = await axios.get('/api/data/presentations');
            setPresentation(res.data.presentations);
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
                <StyledPresentation className="individual">
                    {
                        presentations.length?
                            <>
                                {presentations.sort((a,b)=> b.date - a.date).map((item,i) =>
                                        (customizedPresentation(item, i, (i !==presentations.length-1))))}
                            </>
                            : 'Loading'
                    }
                </StyledPresentation>
            </Container>
        </Layout>
    );
}

export default Presentation;
