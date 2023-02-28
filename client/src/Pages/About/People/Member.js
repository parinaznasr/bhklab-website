import Layout from '../../../Components/Utils/Layout';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import {Container} from './MemberComponents/StyledIndivMember';
import MemberCard from "./MemberComponents/MemberCard";

//
// const StyledCard = styled.div`
//   width: 280px;
//   height: 400px;
//   border-radius: 10px;
//   overflow: hidden;
//   background-color: ${colors.white};
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// `;
//
// const StyledImage = styled.img`
//   width: 280px;
//   height: 320px;
//   object-fit: cover;
// `;
//
// const StyledTitle = styled.h2`
//   font-size: 14px;
//   font-weight: normal;
//   margin: 10px 10px;
//   text-align: center;
// `;
//
// const StyledDescription = styled.p`
//   font-size: 12px;
//   color: ${colors.gray_footer};
//   margin: 10px 10px;
//   text-align: center;
// `;


const Member= (props) => {
    const params = useParams();
    const [member, setMember] = useState({data: {}, ready: false});
    const {token} = params;

    useEffect(() => {
        window.scrollTo(0, 0)
        const getMember = async () => {
            const res = await axios.get(`/api/data/member/${token}`);
            setMember({data: res.data.member, ready: true})
        }
        getMember();
    }, []);
    const {image, position, bio, name} = member.data;

    return(
        <Layout>
            <Container>
                {
                    member.ready &&
                    <MemberCard
                        photo={`/images/people/${image}`}
                        name={name}
                        title={position}
                        bio={bio}
                    />
                }
            </Container>
        </Layout>
    );
}

export default Member;
