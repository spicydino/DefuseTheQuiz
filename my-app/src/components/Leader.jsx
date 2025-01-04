import React from 'react';
import '../styles/Leader.css'; 

const Leader = () => {
  return (
    <div className="leader-container">
      <h1 className="leader-title">Leaderboard</h1>
      <div className="leader-board">
        <div className="leader-item hidden-winner">
          <p>#1 Winner Hidden</p>
        </div>
        <div className="leader-item hidden-winner">
          <p>#2 Winner Hidden</p>
        </div>
        <div className="leader-item hidden-winner">
          <p>#3 Winner Hidden</p>
        </div>
      </div>
      <p className="leader-footer">Stay tuned... leaderboard will be revealed soon!</p>
    </div>
  );
};

export default Leader;
