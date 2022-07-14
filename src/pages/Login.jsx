import React from "react";
import facebook from "../img/facebook.png";
import google from "../img/google.png";
import github from "../img/github.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Login to your account</h1>
      <div className="wrapper">
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />

          <button className="submit">Login</button>

          <button className="submitGoogle">
            <img src={google} alt="" className="icon" />
            Login with Google
          </button>

          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>

          <p className="signUp">
            <Link to="/Register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
