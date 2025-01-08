import React from 'react';
import { useUser } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css'; 

const Profile = () => {
  const { user, logOut } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogOut = () => {
    logOut();
    navigate('/'); 
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome, {user.username}</h1>
      <p className="profile-bio">{user.bio}</p>
      <button className="profile-logout" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Profile;
