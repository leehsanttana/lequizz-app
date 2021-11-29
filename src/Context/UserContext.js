import { React, createContext, useState } from 'react';

export const UserContext = createContext();

export const GlobalContext = ({ children }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState(null);
  const [result, setResult] = useState(0);
  const [slide, setSlide] = useState(0);
  const key = 'x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed';

  const value = {
    name,
    setName,
    difficulty,
    setDifficulty,
    questions,
    setQuestions,
    result,
    setResult,
    slide,
    setSlide,
    key,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
