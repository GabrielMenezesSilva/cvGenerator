import React, { useState, useEffect } from "react";
import "./login.css";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../../services/firebase";

function Login() {
  const [activeForm, setActiveForm] = useState("login");

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

  const [user, setUser] = useState(null);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
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
              <input id="login-email" type="email" required />
            </div>
            <div className="input-block">
              <label htmlFor="login-password">Password</label>
              <input id="login-password" type="password" required />
            </div>
          </fieldset>
          <button type="submit" className="btn-login">
            Login
          </button>
          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleSignIn}
          >
            Login Avec Google
          </button>
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
              <input id="signup-email" type="email" required />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password">Password</label>
              <input id="signup-password" type="password" required />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password-confirm">Confirm password</label>
              <input id="signup-password-confirm" type="password" required />
            </div>
          </fieldset>
          <button type="submit" className="btn-signup">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
