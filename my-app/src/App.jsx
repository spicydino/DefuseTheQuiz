import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Login from './components/Login';
import Choice from './components/Choice';
import Agentquiz from './components/Agentquiz';
import Mapquiz from './components/Mapquiz';
import Triviaquiz from './components/Triviaquiz';
import Signup from './components/Signup';

import { UserProvider } from './Context/UserContext'; 
import Leader from './components/Leader';
import Profile from './components/Profile';
import ChangeChoice from './components/ChangeChoice';
import Edit1 from './components/edit1';

const heroData = [
  { text1: "Test Your Valorant Knowledge", text2: "Think you're a true Agent? Take this quiz" },
  { text1: "Discover Your Agent", text2: "Are you a Duelist or a Sentinel? Let’s find out!" },
  { text1: "Challenge Your Friends", text2: "Prove your mastery of maps, agents, and tactics." },
];

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((Count) => (Count === heroData.length - 1 ? 0 : Count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserProvider> 
      <Router>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Choice" element={<Choice />} />
          <Route path="/Agentquiz" element={<Agentquiz />} />
          <Route path="/Mapquiz" element={<Mapquiz />} />
          <Route path="/Triviaquiz" element={<Triviaquiz />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/leaderboard" element={<Leader/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/changechoice" element={<ChangeChoice/>} />
          <Route path="/edit1" element={<Edit1/>} />
        </Routes> 
      </Router>
    </UserProvider>
  );
};

export default App;
