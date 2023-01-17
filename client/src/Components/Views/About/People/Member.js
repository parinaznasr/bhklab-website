import Layout from '../../../UtilComponents/Layout';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import {Container, StyledMember} from './StyledIndivMember';



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


    return(
        <Layout>
            <Container>
                {
                    member.ready &&
                    <StyledMember>
                        <img src ={`/images/people/${member.data.image}`}/>
                        <div className="desc">
                            <div className = "name">{member.data.position}: {member.data.name}</div>
                            <div className='member-title'>{member.data.bio}</div>
                        </div>
                    </StyledMember>
                }
            </Container>
        </Layout>
    );
}

export default Member;
