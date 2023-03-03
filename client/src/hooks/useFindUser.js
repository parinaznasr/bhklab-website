import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Checks if a user has a valid cookie when they arrive on the site.
 */
const useFindUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            try{
                const res = await axios.get('/api/user/session');
                setUser(res.data);
            }catch(err){
                console.log('not logged in');
            }finally{
                setLoading(false);
            }
        }
        getSession();
    }, []);

    /**
     * Used before loading a restricted page.
     * Check if session is valid. If valid, loads the page.
     * If not valid, redirect to signin.
     * Prevents app from loading a restricted page if session is expired but local cookie is still set.
     * @param {*} history react-router's history object. Used to redirect to signin page.
     * @param {*} loadView a function to initialize the restricted view. Empty function by default
     */
    const checkSession = async (history, loadView=() => {}) => {
        const res = await axios.get('/api/user/session');
        setUser(res.data);
        if(res.data){
            loadView();
        }else{
            history.push('/signin');
        }
    }

    return {
        user,
        setUser,
        loading,
        setLoading,
        checkSession
    }
}

export default useFindUser;