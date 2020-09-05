import React from "react";
import logo from "./logo.svg";
import "./App.less";

const App = () => {
  return (
      <div className="app">
        <div className="loginPage">
          <img src={logo} className="logo" alt="logo" />
          <div className="loginForm">
            <h3>Login Page</h3>
            <input type="text" placeholder="Please enter your username" />
            <input type="password" placeholder="Please enter your password" />
            <button>Login</button>
          </div>
        </div>
      </div>
  );
};

export default App;
