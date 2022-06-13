import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="registerForm">
      <div className="wrapperForm">
        <h1 className="registerTitle">Register</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="submit">Sign Up!!</button>
      </div>
    </div>
  );
};

export default Register;
