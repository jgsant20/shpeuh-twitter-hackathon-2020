import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

export default function ProtectedRoute({ component: RouteComponent, ...rest }) {
    const { user } = rest;

    console.log(`AUTH: ${user?.email ?? "not authenticated"}`);

    if (user) {
        return <RouteComponent {...rest} />
    } else {
        return <Redirect to={{ pathname: "/login" }} />
    }
}


