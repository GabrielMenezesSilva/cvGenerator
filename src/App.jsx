import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Curriculum from "./components/curriculum";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute, PublicRoute } from "./components/routes";

function App() {
  const navigate = useNavigate();

  function storageUserToken(user) {
    if (user && user.accessToken) {
      localStorage.setItem("userToken", user.accessToken);
      navigate("/cv");
    }
  }

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Login onLoginSuccess={storageUserToken} />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login onLoginSuccess={storageUserToken} />
            </PublicRoute>
          }
        />
        <Route path="/cv" 
        element={
          <ProtectedRoute>
            <Curriculum />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
