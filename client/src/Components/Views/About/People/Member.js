import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";

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

const StyledMember = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .text {
    color: black;
    margin-top: 60px;
    flex-direction: column;
    max-width: 45vw;
    line-height: 22px;
    
    .name {
      min-height: 40px;
      color: black;
      font-weight: 60;
      font-size: calc(0.7vw + 0.8em);
      display: flex;
      justify-content: left;
    }
  }
  .img {
    height: 550px;
  }
`;


const Member= (props) => {
    const params = useParams();
    const [member, setMember] = useState({data: {}, ready: false});
    const {token} = params;

    useEffect(() => {
        window.scrollTo(0, 0)
        const getMember = async () => {
            const res = await axios.get(`/api/data/member/${token}`);
            console.log(res)
            setMember({data: res.data.member, ready: true})
        }
        getMember();
    }, []);

    console.log(member)
    return(
        <Layout>
            <Container>
                {
                    member.ready &&
                        <StyledMember>
                            <img height='335px' src ={`/images/people/${member.data.image}`}></img>
                            <div className="text">
                                <div className = "name">{member.data.position}:{member.data.name}</div>
                                {member.data.bio}<br/>
                            </div>
                        </StyledMember>
                }
            </Container>
        </Layout>
    );
}

export default Member;
