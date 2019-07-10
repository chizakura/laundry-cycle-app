// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import authService from '../services/authService';

function ProtectedRoute ({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => authService.isAuthenticated() ? (
                <Component {...props} {...rest} />
            ) : (
                <Redirect to={{pathname: './login', state: {from: props.location}}}/>
            )}
        />
    )
}

export default ProtectedRoute;