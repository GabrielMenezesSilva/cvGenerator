import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}){
    const userToken = localStorage.getItem('userToken');
    return userToken ? children : <Navigate to="/login"/>;
}

function PublicRoute({children}){
    const userToken = localStorage.getItem('userToken');
    return userToken ? <Navigate to="/cv"/> : children;
}

export {ProtectedRoute, PublicRoute}