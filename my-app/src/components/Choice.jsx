import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Choice.css';
import planted from './../Assets/spikeplanted.mp3'; 
import ouch from './../Assets/ouchh.mp3'; 

const Choice = () => {
  const navigate = useNavigate();

  const handleQuizStart = (quizPath) => {
    const audio = new Audio(planted);
    audio.play();
    setTimeout(() => {
      navigate(quizPath);
    }, 1000); 
  };

  const roastAndGoBack = () => {
    const audio = new Audio(ouch);
    audio.play();
    setTimeout(() => {
      alert("Retreating so soon? Maybe quizzes aren't your strong suit after all!");
      navigate('/');
    }, 1000); 
  };

  return (
    <div className="choice-container">
      <h1 className="choice-title">Select Your Valorant Quiz</h1>
      <div className="choice-options">
        
        <div className="choice-card" onClick={() => handleQuizStart('/Agentquiz')}>
          <h2>Guess the Agent</h2>
          <p>Can you identify the character, their gun skin, voice line, or ultimate ability?</p>
          <span className="choice-link">Start Quiz</span>
        </div>

        <div className="choice-card" onClick={() => handleQuizStart('/Mapquiz')}>
          <h2>Map Tactics</h2>
          <p>Test your knowledge of map callouts, tactics, and bomb plant strategies.</p>
          <span className="choice-link">Start Quiz</span>
        </div>

        <div className="choice-card" onClick={() => handleQuizStart('/Triviaquiz')}>
          <h2>Ultimate Trivia</h2>
          <p>Think you know everything about ultimates and abilities? Prove it!</p>
          <span className="choice-link">Start Quiz</span>
        </div>
      </div>

      <button onClick={roastAndGoBack} className="choice-back-button">
        Go Back to Home
      </button>
    </div>
  );
};

export default Choice;
