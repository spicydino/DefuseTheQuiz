import React, { useRef, useState, useEffect } from 'react';
import '../styles/Agentquiz.css';
import { data as MapData } from '../assets/MapData';
import { Link } from 'react-router-dom';

const Mapquiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(MapData[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timer, setTimer] = useState(30);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const optionArray = [option1, option2, option3, option4];

  
  useEffect(() => {
    if (!lock && timer > 0) {
      const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && !lock) {
      handleTimeout();
    }
  }, [timer, lock]);

  const handleTimeout = () => {
    setLock(true);
    optionArray[question.ans - 1].current.classList.add('correct');
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        optionArray[question.ans - 1].current.classList.add('correct');
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === MapData.length - 1) {
        setResult(true);
      } else {
        setIndex((prev) => prev + 1);
        setQuestion(MapData[index + 1]);
        setLock(false);
        setTimer(30);
        optionArray.forEach((option) => {
          option.current.classList.remove('wrong');
          option.current.classList.remove('correct');
        });
      }
    }
  };

  return (
    <div className='container'>
      <h1>Guess the Agent</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You scored {score} out of {MapData.length}
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
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>
            {index + 1} of {MapData.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Mapquiz;
