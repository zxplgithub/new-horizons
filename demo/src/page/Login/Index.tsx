import React from "react";
import { RouteComponentProps } from "react-router-dom";
import logo from "./imgs/logo.svg";
import "./less/style.less";

interface LoginProps extends RouteComponentProps {}

const Login = (props: LoginProps) => {
  const { history } = props;
  const handleLogin = () => {
    history.push("/home");
  };

  return (
    <div className="loginPage">
      <img src={logo} className="logo" alt="logo" />
      <div className="loginForm">
        <h3>Login Page</h3>
        <input type="text" placeholder="Please enter your username" />
        <input type="password" placeholder="Please enter your password" />
        <button onClick={handleLogin}>Login</button>
        <p>tips: click button go to test 1</p>
      </div>
    </div>
  );
};

export default Login;
