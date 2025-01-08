import React, { useRef, useState, useEffect } from 'react';
import '../styles/Agentquiz.css';
import { Link } from 'react-router-dom';
import resultSong from '../assets/victory.mp3'; 

const Mapquiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);  // Initialize question as null
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timer, setTimer] = useState(30);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const optionArray = [option1, option2, option3, option4];

  const audioRef = useRef(new Audio(resultSong));

  
  useEffect(() => {
    fetch('http://localhost:3000/Mapquiz')
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);  
      })
      .catch((err) => console.log('fetch failed', err));
  }, []);

  
  useEffect(() => {
    if (!lock && timer > 0) {
      const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && !lock) {
      handleTimeout();
    }
  }, [timer, lock]);

  
  useEffect(() => {
    if (result) {
      audioRef.current.play(); 
    }
  }, [result]);

  const handleTimeout = () => {
    setLock(true);
    optionArray[question[index].ans - 1].current.classList.add('correct');
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question[index].ans === ans) {
        e.target.classList.add('correct');
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        optionArray[question[index].ans - 1].current.classList.add('correct');
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === question.length - 1) {
        setResult(true);
      } else {
        setIndex((prev) => prev + 1);
        setLock(false);
        setTimer(30);
        optionArray.forEach((option) => {
          option.current.classList.remove('wrong');
          option.current.classList.remove('correct');
        });
      }
    }
  };

  if (!question) return <div>Loading...</div>;  
  return (
    <div className='container'>
      <h1>Guess the Map</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You scored {score} out of {question.length}
            <br /> Come back tomorrow to challenge us again!
          </h2>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </>
      ) : (
        <>
          <div className='timer'>
            <div className='timer-bar' style={{ width: `${(timer / 30) * 100}%` }}></div>
            <span className='timer-text'>{timer}s</span>
          </div>
          <h2>
            {index + 1}. {question[index].question}
          </h2>
          <ul>
            <li ref={option1} onClick={(e) => checkAns(e, 1)}>
              {question[index].options[0]}
            </li>
            <li ref={option2} onClick={(e) => checkAns(e, 2)}>
              {question[index].options[1]}
            </li>
            <li ref={option3} onClick={(e) => checkAns(e, 3)}>
              {question[index].options[2]}
            </li>
            <li ref={option4} onClick={(e) => checkAns(e, 4)}>
              {question[index].options[3]}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>
            {index + 1} of {question.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Mapquiz;
