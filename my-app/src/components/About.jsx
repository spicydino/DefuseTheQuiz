import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Welcome to Defuse The Quiz 🔥</h1>
        <p className="about-subheading">Think you're a true Valorant agent? Prove it!</p>
      </div>

      <div className="about-content">
        <div className="about-text">    
          <h2>About the Quiz</h2>
          <p>
            Ready to step into the world of Valorant? This quiz will test your knowledge of agents, maps, and game mechanics. Whether you’re a Duelist, Sentinel, or Controller, it’s time to show off your skills and prove you're a top-tier agent!
          </p>
          <p>
            The quiz is designed for all levels, from noob to pro. Can you ace all the questions and reach the highest score? 💯
          </p>
          <h3>The Challenge Awaits...</h3>
        </div>

        
      </div>

      <div className="about-footer">
        <p>Created with ❤️ for Valorant fans by the Spicydino!🦖</p>
      </div>
    </div>
  );
}

export default About;
