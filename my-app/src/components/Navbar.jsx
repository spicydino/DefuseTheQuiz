import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import '../styles/Navbar.css';
import backgroundAudio from './../Assets/backgroundaudiohero.mp3';

const Navbar = () => {
  const { user } = useUser();

  useEffect(() => {
    const audio = new Audio(backgroundAudio);
    audio.loop = true; 
    audio.volume = 0.3;

    audio.play().catch((err) => {
      console.error("Audio playback issue:", err);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="nav">
      <div className="nav-logo">Defuse the Quiz</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>

        {user ? (
          <>
            {user.username === "admin" && (
              <>
                <li>
                  <Link to="/changechoice" className="changechoice">Make Changes</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/profile" className="nav-contact">
                Welcome, {user.username}
              </Link>
            </li>
            
          </>
        ) : (
          <li className="nav-contact">
            <Link to="/login">Log in</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
