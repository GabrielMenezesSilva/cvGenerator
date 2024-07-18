import React from "react";

function MyLogin() {
  return (
    <div className="my-login-forms-section">
      <h1 className="my-login-section-title">Animated Forms</h1>
      <div className="my-login-forms">
        <div className="my-login-form-wrapper is-active">
          <button type="button" className="my-login-switcher my-login-switcher-login">
            Login
            <span className="my-login-underline"></span>
          </button>
          <form className="my-login-form my-login-form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="my-login-input-block">
                <label htmlFor="my-login-email">E-mail</label>
                <input id="my-login-email" type="email" required />
              </div>
              <div className="my-login-input-block">
                <label htmlFor="my-login-password">Password</label>
                <input id="my-login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="my-login-btn-login">
              Login
            </button>
          </form>
        </div>
        <div className="my-login-form-wrapper">
          <button type="button" className="my-login-switcher my-login-switcher-signup">
            Sign Up
            <span className="my-login-underline"></span>
          </button>
          <form className="my-login-form my-login-form-signup">
            <fieldset>
              <legend>Please, enter your email, password and password confirmation for sign up.</legend>
              <div className="my-login-input-block">
                <label htmlFor="my-login-signup-email">E-mail</label>
                <input id="my-login-signup-email" type="email" required />
              </div>
              <div className="my-login-input-block">
                <label htmlFor="my-login-signup-password">Password</label>
                <input id="my-login-signup-password" type="password" required />
              </div>
              <div className="my-login-input-block">
                <label htmlFor="my-login-signup-password-confirm">Confirm password</label>
                <input id="my-login-signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="my-login-btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyLogin;