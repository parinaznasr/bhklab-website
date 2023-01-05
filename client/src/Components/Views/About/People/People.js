import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import colors from "../../../../styles/colors";


const PIContainer = styled.div`
  display: flex;
  flex-direction: row;
   img {
     border-radius: 2px;
     width: 300px;
     height: auto;
     object-fit: cover;
   }
  .desc {
    .name {
      font-size:calc(0.3vw + 0.6em);
      font-weight: bold;
    }
    color: black;
    line-height: 25px;
    margin-left: 20px;
    padding: 0px 10px;
    width: 60%;
    text-align: justify;
  }
  .social {
    
  }
`;


const Container = styled.div`
  width: 90%;
  margin: 0px 20px 0px 200px;
  display: flex;
  flex: 1 1 24%;
  flex-direction: column;
  text-align: center;
  .header {
    font-size:calc(0.6vw + 0.8em);
    font-weight: bold;
    margin : 100px 0px 20px 0px;
  }
`;

const StyledPeople = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  word-wrap: break-word;
  gap: 40px 30px;
  
   img {
     border-radius: 2px;
     width: 240px;
     height:320px;
     object-fit: cover;
   }

  .member-container {
    background-color: gray;
    width: 100px;
    height: 100px;
    flex: 0 0 32%;
    margin: 1% 0;
  }
  
  a{
    text-decoration: none;
      color: ${colors.gray_footer};
  }
`;


const member = (item,index) => {
    return (
        <StyledPeople key = {index}>
            <div id="member-container">
                {/*<Link to={`/people/${item.name.replace(" ","_").lowercase()}_${item._id.slice(-3,-1)}`}>*/}
                <Link to={`/people/${item.name.replaceAll(" ","_").replace().toLowerCase()}`}>
                    <img src={`/images/people/${item.image}`}/>
                    <div className="desc">
                        <div className='name'>{item.name}</div>
                        <div>{item.position.split('/')[0]}</div>
                    </div>
                </Link>
            </div>
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
            setReady(true);
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
                {
                    ready &&
                        <>
                            <div className="header">Principal Investigator</div>
                            <PIContainer>
                                <img src={'/images/people/bh-large.jpg'}/>
                                <div className="desc">
                                    <div className='name'>Benjamin Haibe-Kains</div>
                                    <div className='member-title'>Trained as a computer scientist, Dr. Benjamin Haibe-Kains earned his PhD in Bioinformatics at the Université Libre de Bruxelles (Belgium). He was a postdoc in the Quackenbush group at the Dana-farber Cancer Institute and Harvard School of Public Health (USA). Dr. Haibe-Kains started his own laboratory at the Institut de Recherches Cliniques de Montréal (Canada) and he is now Principal Investigator at the Princess Margaret Cancer Centre. His research focuses on the integration of high-throughput data from various sources to simultaneously analyze multiple facets of diseases, with a particular emphasis on cancer. Dr. Haibe-Kains and his team are using publicly available genomic datasets and data generated through his collaborations to better understand the biology underlying carcinogenesis and to develop new predictive models in order to significantly improve disease management. Dr. Haibe-Kains' main scientific contributions include several prognostic gene signatures in breast cancer, subtype classification models for ovarian and breast cancers, as well as genomic predictors of drug response in cancer cell lines.</div>
                                </div>
                            </PIContainer>
                            <div className="header">Current Members</div>
                            <StyledPeople>
                                {
                                    people.length &&
                                    <React.Fragment>
                                        { people.filter(item => item.status ==="current member").sort((a,b)=> new Date(a.startDate) - new Date(b.startDate)).map((item,i) =>
                                            (member(item, i, (i !==people.length-1))))}
                                    </React.Fragment>
                                }
                            </StyledPeople>
                            <div className="header">Alumni</div>
                            <StyledPeople>
                                {
                                    people.length &&
                                    <React.Fragment>
                                        { people.filter(item => item.status ==="alumni").sort((a,b)=> new Date(b.endDate) - new Date(a.endDate)).map((item,i) =>
                                            (member(item, i, (i !==people.length-1))))}
                                    </React.Fragment>
                                }
                            </StyledPeople>
                        </>

                }
            </Container>
        </Layout>
    );
}

export default People;
