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
  // Define o componente Login, que recebe uma função de callback onLoginSuccess como prop
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState(""); // Define o estado para o email do email (Login)
  const [password, setPassword] = useState(""); // Define o estado para a senha (Login)
  const [emailRegister, setEmailRegister] = useState(""); // Define o estado para o email  (registro)
  const [passwordRegister, setPasswordRegister] = useState(""); // Define o estado para a senha (registro)
  const [passwordRegisterConfirm, setPasswordRegisterConfirm] = useState(""); // Define o estado para aconfirmação da senha no registro

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
    // Função para tratar o login com email e senha
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password) // Tenta fazer login com email e senha usando Firebase
      .then((result) => {
        // Se bem sucedido
        onLoginSuccess(result.user); // Chama a função de callback com o usuário logado
        toast.success("Utilisateur connecté avec succès");
      })
      .catch((error) => {
        // Se houver erro
        console.error(error);
        if (error.code === "auth/invalid-credential") {
          // Trata erro de credencial inválida
          toast.warn("Mot de passe invalide"); // afiche le msg
        } else if (error.code === "auth/invalid-email") {
          // ou Trata erro de email inválido
          toast.warn("Adresse e-mail invalide"); // afiche le msg
        }
      });
  }
  function signinWithRegister(e) {
    // Função para tratar o registro de novo usuário
    e.preventDefault();
    if (passwordRegister !== passwordRegisterConfirm) {
      // Verifica se as senhas coincidem
      toast.warn("Les mots de passe ne correspondent pas"); // afiche le msg
      return; // Sai da função se as senhas não coincidirem
    }

    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister) // Tenta criar um novo usuário com email e senha usando Firebase
      .then((result) => {
        // Se bem sucedido
        onLoginSuccess(result.user); // Chama a função de callback com o usuário registrado
        toast.success("Utilisateur enregistré avec succès"); // afiche le msg
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          // Trata erro de email já em uso
          toast.warn("Adresse e-mail déjà utilisée"); // afiche le msg
        } else if (error.code === "auth/weak-password") {
          // Trata erro de password fraco
          toast.warn("Mot de passe trop faible"); // afiche le msg
        } else if (error.code === "auth/invalid-email") {
          // Trata erro de email inválido
          toast.warn("Adresse e-mail invalide"); // mostra a mensagem
        }
      });
  }

  function handleEmail(event) {
    // atualizar o estado do email do login
    setEmail(event.target.value); // Atualiza o estado com o valor do input
  }
  function handlePassword(event) {
    // ""
    setPassword(event.target.value); // ""
  }
  function handleEmailRegister(event) {
    // ""
    setEmailRegister(event.target.value); // ""
  }
  function handlePasswordRegister(event) {
    // ""
    setPasswordRegister(event.target.value); // ""
  }
  function handlePasswordRegisterConfirm(event) {
    // ""
    setPasswordRegisterConfirm(event.target.value); // ""
  }

  function handleGoogleSignIn() {
    // tratar o login com Google
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Se bem sucedido
        onLoginSuccess(result.user); // Chama a função de callback com o usuário logado
        toast.success("Utilisateur connecté avec succès");
      })
      .catch((error) => { // Se houver erro
        console.error(error); 
        toast.warn("Erreur lors de la connexion");
      });
  }
  return (
    <div className="forms">
      <div
        className={`form-wrapper ${activeForm === "login" ? "is-active" : ""}`}
      >
        <button type="button" className="switcher switcher-login">
          Connexion
          <span className="underline">cvGenerator</span>
        </button>
        <form className="form form-login">
          <fieldset>
            <legend>
              Veuillez entrer votre adresse e-mail et votre mot de passe pour
              vous connecter.
            </legend>
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
              <label htmlFor="login-password">Mot de passe</label>
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
            Connexion
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
          S'inscrire
          <span className="underline"></span>
        </button>
        <form className="form form-signup">
          <fieldset>
            <legend>
              Veuillez entrer votre adresse e-mail, mot de passe et confirmation
              de mot de passe pour vous inscrire.
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
              <label htmlFor="signup-password">Mot de passe</label>
              <input
                id="signup-password"
                type="password"
                required
                value={passwordRegister}
                onChange={handlePasswordRegister}
              />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password-confirm">
                Confirmer le mot de passe
              </label>
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
