import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.photo} alt="profile" className="profile-picture" />
      <div className="informations">
        <h2 className="name">{user.name}</h2>
        <p className="about">{user.about}</p>
      </div>
    </div>
  );
};

export default Profile;
