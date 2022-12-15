import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../hooks/Contexts';

export const AdminRoute = ({component: Component, location, ...rest}) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return null;
    } 

    return(
        <Route 
            {...rest}
            render={props => (
                user && user.admin ? 
                <Component {...props} /> 
                : 
                <Redirect to={{pathname: "/signin", state: { from: location }}} />
            )} 
        />
    );
}

export const UserRoute = ({component: Component, location, ...rest}) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return null;
    } 

    return(
        <Route 
            {...rest}
            render={props => (
                user ? 
                <Component {...props} /> 
                : 
                <Redirect to={{pathname: "/signin", state: { from: location }}} />
            )} 
        />
    );
}