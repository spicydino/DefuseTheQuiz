import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Choice.css';

const Choice = () => {
  const navigate = useNavigate();

  const roastAndGoBack = () => {
    alert("Retreating so soon? Maybe quizzes aren't your strong suit after all!");
    navigate('/');
  };

  return (
    <div className="choice-container">
      <h1 className="choice-title">Select Your Valorant Quiz</h1>
      <div className="choice-options">
       
        <div className="choice-card">
          <h2>Guess the Agent</h2>
          <p>Can you identify the character, their gun skin, voice line, or ultimate ability?</p>
          <Link to="/Agentquiz" className="choice-link">
            Start Quiz
          </Link>
        </div>

       
        <div className="choice-card">
          <h2>Map Tactics</h2>
          <p>Test your knowledge of map callouts, tactics, and bomb plant strategies.</p>
          <Link to="/Mapquiz" className="choice-link">
            Start Quiz
          </Link>
        </div>

        
        <div className="choice-card">
          <h2>Ultimate Trivia</h2>
          <p>Think you know everything about ultimates and abilities? Prove it!</p>
          <Link to="/Triviaquiz" className="choice-link">
            Start Quiz
          </Link>
        </div>
      </div>

      
      <button onClick={roastAndGoBack} className="choice-back-button">
        Go Back to Home
      </button>
    </div>
  );
};

export default Choice;
