import React from 'react';
import '../styles/Choice.css';
import { useNavigate } from 'react-router-dom';  

const ChangeChoice = () => {
  const navigate = useNavigate(); 
  
  const handleQuizStart = (quizPath) => {
    navigate(quizPath);  
  }

  return (
    <div className="choice-container">
      <h1 className="choice-title">Select a quiz to make changes</h1>
      <div className="choice-options">
        
        <div className="choice-card" onClick={() => handleQuizStart('/edit1')}>
          <h2>Guess the Agent</h2>
          <span className="choice-link">Modify</span>
        </div>

        <div className="choice-card" onClick={() => handleQuizStart('/will-add-form')}>
          <h2>Map Tactics</h2>
          <span className="choice-link">Modify</span>
        </div>

        <div className="choice-card" onClick={() => handleQuizStart('/will-add-form')}>
          <h2>Ultimate Trivia</h2>
          <span className="choice-link">Modify</span>
        </div>
      </div>

      <button className="choice-back-button" onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
  )
}

export default ChangeChoice;
