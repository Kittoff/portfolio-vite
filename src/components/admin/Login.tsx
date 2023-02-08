import React from "react";
import "./login.css";

interface LoginProps {
  setLoginEmail: (email: string) => void;
  setLoginPassword: (password: string) => void;
  login: () => void;
}

const Login = ({ setLoginEmail, setLoginPassword, login }: LoginProps) => {
  return (
    <div className="box">
      <div className="form">
        <h2>Sign in</h2>
        <div className="input-box">
          <input
            type="text"
            required
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <input type="submit" value="Login" onClick={login} />
        </div>
      </div>
    </div>
  );
};

export default Login;
