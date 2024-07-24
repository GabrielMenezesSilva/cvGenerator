import React, { useState, useEffect } from "react";
import "./login.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

function Login({ onLoginSuccess }) {
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [passwordRegisterConfirm, setPasswordRegisterConfirm] = useState("");

  useEffect(() => {
    const switchers = document.querySelectorAll(".switcher");
    switchers.forEach((item) => {
      item.addEventListener("click", (event) => {
        const formType = event.target.classList.contains("switcher-login")
          ? "login"
          : "signup";
        setActiveForm(formType);
      });
    });
    return () => {
      switchers.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  function signinWithLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        onLoginSuccess(result.user);
        toast.success("Usuário Logado Com Sucesso");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/invalid-credential") {
          toast.warn("Invalid Password");
        } else if (error.code === "auth/invalid-email") {
          toast.warn("Email inválido");
        }
      });
  }
  function signinWithRegister(e) {
    e.preventDefault();
    if (passwordRegister !== passwordRegisterConfirm) {
      toast.warn("Senhas não conferem");
      return;
    }

    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
      .then((result) => {
        onLoginSuccess(result.user);
        toast.success("Usuário Cadastrado Com Sucesso");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.warn("Email já cadastrado");
        } else if (error.code === "auth/weak-password") {
          toast.warn("Senha muito fraca");
        } else if (error.code === "auth/invalid-email") {
          toast.warn("Email inválido");
        }
      });
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleEmailRegister(event) {
    setEmailRegister(event.target.value);
  }
  function handlePasswordRegister(event) {
    setPasswordRegister(event.target.value);
  }
  function handlePasswordRegisterConfirm(event) {
    setPasswordRegisterConfirm(event.target.value);
  }

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        onLoginSuccess(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="forms">
      <div
        className={`form-wrapper ${activeForm === "login" ? "is-active" : ""}`}
      >
        <button type="button" className="switcher switcher-login">
          Login
          <span className="underline">cvGenerator</span>
        </button>
        <form className="form form-login">
          <fieldset>
            <legend>Please, enter your email and password for login.</legend>
            <div className="input-block">
              <label htmlFor="login-email">E-mail</label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="input-block">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
          </fieldset>
          <button type="submit" className="btn-login" onClick={signinWithLogin}>
            Login
          </button>
          <GoogleButton
            onClick={() => {
              handleGoogleSignIn();
            }}
            id="buttonGoogle"
          />
        </form>
      </div>
      <div
        className={`form-wrapper ${activeForm === "signup" ? "is-active" : ""}`}
      >
        <button type="button" className="switcher switcher-signup">
          Sign Up
          <span className="underline"></span>
        </button>
        <form className="form form-signup">
          <fieldset>
            <legend>
              Please, enter your email, password and password confirmation for
              sign up.
            </legend>
            <div className="input-block">
              <label htmlFor="signup-email">E-mail</label>
              <input
                id="signup-email"
                type="email"
                required
                value={emailRegister}
                onChange={handleEmailRegister}
              />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                required
                value={passwordRegister}
                onChange={handlePasswordRegister}
              />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password-confirm">Confirm password</label>
              <input
                id="signup-password-confirm"
                type="password"
                required
                value={passwordRegisterConfirm}
                onChange={handlePasswordRegisterConfirm}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-signup"
            onClick={signinWithRegister}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
