import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";

const StyledPeople = styled.div`
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

const customizedPeople = (item,index) => {
    return (
        <StyledPeople key = {index}>
            <img width='30px' height='40px' src={`/images/people/${item.image}`}/>
            <div className='content'>{item.name}</div>
            <div className='content'>{item.position}</div>
        </StyledPeople>
    );
}

const People= () => {
    const [ready, setReady] = useState(false);
    const [people, setPeople] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getPeople = async () => {
            const res = await axios.get('/api/data/members');
            setPeople(res.data.members.filter(item=> item.display));
        }
        getPeople();
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
                <StyledPeople className="individual">
                    {
                        people.length?
                            <>
                                {people.sort((a,b)=> b.date - a.date).map((item,i) =>
                                        (customizedPeople(item, i, (i !==people.length-1))))}
                            </>
                            : 'Loading'
                    }
                </StyledPeople>
            </Container>
        </Layout>
    );
}

export default People;
