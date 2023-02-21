import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../UtilComponents/Layout';
import Loading from '../../UtilComponents/Loading';
import CustomButton from '../../UtilComponents/CustomButton';
import CustomMessages from '../../UtilComponents/CustomMessages'
import LinkButton from '../../UtilComponents/LinkButton';
import { genericError } from '../../../utils/messages';

const StyledVerification = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const getMessage = (resData) => {
    let message = {
        severity: '', 
        summary: 'Verification Link', 
        detail: '', 
        sticky: false 
    }
    switch(resData.status){
        case 1:
            message.severity = 'success';
            break;
        case 2:
            message.severify = 'error';
            break;
        default:
            break;
    }
    message.detail = resData.message;
    return message;
}

const VerifyAccount = () => {
    const { email, token } = useParams();
    const [loading, setLoading] = useState(true);
    const [accountStatus, setAccountStatus] = useState(null);
    const [message, setMessage] = useState({
        show: false,
        message: null
    });
    
    useEffect(() => {
        const verifyAccount = async () => {
            console.log(email);
            console.log(token);
            const res = await axios.post('/api/user/verify', {
                email: email,
                token: token
            });
            setLoading(false);
            setAccountStatus(res.data);
            console.log(res.data);
        }
        verifyAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const resendLinkReq = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/user/verify/resend-email', {
            email: email
        });
        switch(res.data.status){
            case 0:
                setMessage({
                    show: Math.random(),
                    message: genericError
                });
                break;
            case 1: 
                setMessage({
                    show: Math.random(),
                    message: getMessage(res.data)
                });
                break;
            case 2: 
                setMessage({
                    show: Math.random(),
                    message: getMessage(res.data)
                });
                break;
            default:
                break;
        }
    }

    return(
        <Layout>
            <StyledVerification>
                <CustomMessages trigger={message.show} message={message.message} />
                <h2>Account Verification</h2>
                {
                    loading &&
                    <Loading />
                }
                {
                    accountStatus &&
                    <div>
                        <h3>{accountStatus.message}</h3>
                        {
                            accountStatus.status === 0 &&
                            <CustomButton 
                                label='Re-send verification link'
                                onClick={resendLinkReq}
                            />
                        }
                        {
                            (accountStatus.status === 1 || accountStatus.status === 3) &&
                            <LinkButton 
                                label='Go to Sign In'
                                icon='pi-arrow-right'
                                to='/signin'
                            />
                        }
                        {
                            accountStatus.status === 2 &&
                            <LinkButton 
                                label='Go to Register'
                                icon='pi-arrow-right'
                                to='/signin'
                            />
                        }
                    </div>
                }
            </StyledVerification>
        </Layout>
    );
}

export default VerifyAccount;