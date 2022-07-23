import React from "react";

const Profile = () => {
  return (
    <div className="profileForm">
      <div>
        <h1 className="profileTitle">Profile Page</h1>
      </div>
      <div className="wrapperProfile">
        <img
          src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profileImage"
        />

        <h1 className="profileName">John Doe</h1>
        <h2 className="profileEmail">Johndoe@gmail.com</h2>
        <h2 className="updateProfileText">Update Profile</h2>

        <input className="profileInput" type="text" placeholder="New Email" />
        <input
          className="profileInput"
          type="text"
          placeholder="Confirm Email"
        />
        <input
          className="profileInput"
          type="text"
          placeholder="New Password"
        />
        <input
          className="profileInput"
          type="text"
          placeholder="Confirm Password"
        />

        <button className=" btn">Submit Changes</button>
      </div>
    </div>
  );
};

export default Profile;
