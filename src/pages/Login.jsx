import React from "react";
import facebook from "../img/facebook.png";
import google from "../img/google.png";
import github from "../img/github.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
          <p>
            <Link to="/Register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
