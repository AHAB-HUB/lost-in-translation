
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.isLogged)

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogged
                ? <Component {...props} />
                : <Redirect to="/signin" />
        )}
        />
    );
};

export default PrivateRoute;