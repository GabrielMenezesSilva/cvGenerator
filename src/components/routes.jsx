import React from 'react';
import { Navigate } from 'react-router-dom';

// Define o componente ProtectedRoute, que recebe children como props
function ProtectedRoute({children}){
    // Obtém o token do usuário do localStorage
    const userToken = localStorage.getItem('userToken');
    // Se o token existir, renderiza os children, caso contrário, redireciona para a página de login
    return userToken ? children : <Navigate to="/login"/>;
}

function PublicRoute({children}){
    const userToken = localStorage.getItem('userToken');
    // Se o token existir, redireciona para a página /cv, caso contrário, renderiza os children
    return userToken ? <Navigate to="/cv"/> : children;
}

export {ProtectedRoute, PublicRoute}