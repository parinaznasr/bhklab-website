import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './Contexts';
import { emailRegex } from '../utils/constants';

/**
 * Custom hook to handle authentication.
 * @returns 
 */
const useAuth = () => {
    const history = useHistory();
    const { setUser } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [registerStatus, setRegisterStatus] = useState(null);

    const isValidEmail = (email, isRegister) => {
        // let domain = email.split("@")[1];
        // let domains = isRegister ? allowedDomains : allowedDomains.concat(reservedDomains);
        // return emailRegex.test(email) && domains.includes(domain);
        return emailRegex.test(email);
    }

    /**
     * Gets a user and sets it in UserContext, then pushes to another page based on location value
     * @param {*} location 
     */ 
    const setUserContext = async (location) => {
        const res = await axios.get('/api/user/session');
        setUser(res.data);
        if(res.data){
            if(location.state && location.state.from){
                history.push(location.state.from);
            }else{
                history.push('/');
            }
        }else{
            console.log('authentication failed');
            setError(true);
        }
    }

    /**
     * Submits user data to be logged in or registered.
     * @param {*} user user data to be submitted (set in Authentication.js)
     * @param {*} location 
     */
    const submitUser = async (user, location) => {
        try{
            const res = await axios.post('/api/user/submit', user);
            switch(user.action){
                case 'login':
                    await setUserContext(location);
                    break;
                case 'signin':
                    setUser(res.data);
                    if(res.data){
                        history.push('/');
                    }else{
                        console.log('authentication failed');
                        setError(true);
                    }
                    break;
                case 'register':
                    if(res.data.error){
                        setRegisterStatus({status: 'error', message: res.data.message});
                    }else{
                        setRegisterStatus({status: 'success', message: res.data.message});
                    }
                    break;
                default:
                    setError(true);
                    break;
            }
        }catch(err){
            console.log(err);
        }
    }

    const signoutUser = async () => {
        try{
            await axios.get(`/api/user/signout`); // call API to reset cookie token
            setUser(null); // reset user in UserContext to null
            history.push('/signin'); // push to signin page
        }catch(err){
            console.log(err);
        }
    }

    return {
        submitUser,
        signoutUser,
        isValidEmail,
        error,
        registerStatus
    }
}

export default useAuth;