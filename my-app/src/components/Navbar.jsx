import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user } = useUser(); 

  return (
    <div className="nav">
      <div className="nav-logo">Defuse the Quiz</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        {user ? (
          <>
            <li>
              <Link to="/profile" className="nav-contact">
                  Welcome, {user.username}                
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-contact"><Link to="/login">Log in</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
