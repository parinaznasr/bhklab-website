import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../UtilComponents/Layout';
import axios from 'axios';

import useAuth from '../../../hooks/useAuth'; // custom hook to hadle authentication.
import CustomInputText from '../../UtilComponents/CustomInputText';
import CustomButton from '../../UtilComponents/CustomButton';
import CustomMessages from '../../UtilComponents/CustomMessages';
import { StyledAuthContainer, AuthPanel, FormField, ButtonField } from './AuthenticationStyle';
import { pwdResetErrorMessage, pwdResetSuccessMessage } from '../../../utils/messages';

const PasswordReset = () => {
    const { token } = useParams();
    const { isValidEmail } = useAuth();
    const [user, setUser] = useState({email: '', password1: '', password2: ''});
    const [message, setMessage] = useState({trigger: false, message: null});

    const submit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`/api/user/pwdreset/reset/${token}`, user);
            console.log(res.data);
            if(res.data.status){
                setMessage({trigger: Math.random(), message: pwdResetSuccessMessage});
            }else{
                setMessage({trigger: Math.random(), message: {...pwdResetErrorMessage, detail: res.data.message}});
            }
        }catch(error){
            console.log(error);
            setMessage({trigger: Math.random(), message: pwdResetErrorMessage});
        }
    }

    const disableSubmit = () => {
        return(
            user.password1.length < 8 ||
            user.password1.localeCompare(user.password2) !== 0 ||
            !isValidEmail(user.email)
        );
    }

    return(
        <Layout>
            <StyledAuthContainer>
                <AuthPanel>
                    <h4>Reset your password</h4>
                    <CustomMessages trigger={message.trigger} message={message.message} />
                    <FormField>
                        <span className='label'>Email: </span>
                        <span className='input-field'>
                            <CustomInputText 
                                value={user.email} 
                                type='text' 
                                onChange={(e) => setUser({...user, email: e.target.value})}
                            />
                        </span>
                    </FormField>
                    <FormField>
                        <span className='label'>New password: </span>
                        <span className='input-field'>
                            <CustomInputText 
                                value={user.password1} 
                                type='password' 
                                onChange={(e) => setUser({...user, password1: e.target.value})}
                            />
                        </span>
                    </FormField>
                    <FormField>
                        <span className='label'>Confirm new password: </span>
                        <span className='input-field'>
                            <CustomInputText 
                                value={user.password2} 
                                type='password' 
                                onChange={(e) => setUser({...user, password2: e.target.value})}
                            />
                        </span>
                    </FormField>
                    <ButtonField>
                        <CustomButton 
                            className='p-button-sm' 
                            label='Reset Password' 
                            onClick={submit}
                            disabled={disableSubmit()}
                        />
                    </ButtonField>
                </AuthPanel>
            </StyledAuthContainer>
        </Layout>
    );
}

export default PasswordReset;