import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Leader and Follower Autonomous Robots
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </li>
          <Link className="link" to="/Profile">
            <li className="listItem">John Doe</li>
          </Link>
          <Link className="link" to="/ImagePortal">
            <li className="listItem">Image Portal</li>
          </Link>
          <Link className="link" to="/Results">
            <li className="listItem">Training Results</li>
          </Link>

          <Link className="link" to="/Livestream">
            <li className="listItem">Live Stream</li>
          </Link>

          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
