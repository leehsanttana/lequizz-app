import { React, useContext } from 'react';
import * as C from './styles';
import Button from '../InputsComponents/Button';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { questions, result, setSlide, setQuestions, setResult, setName } =
    useContext(UserContext);

  const navigate = useNavigate();

  function returnToStart() {
    navigate('/');
    setSlide(0);
    setQuestions(null);
    setResult(null);
    setName('');
  }

  return (
    <C.Result className="animeToBottom">
      <h1>Você acertou:</h1>

      <h2>
        <span className="result-total">{result}</span> de{' '}
        <span className="result-total">{questions.length}</span>
      </h2>

      <Button onClick={returnToStart}>Começar Novamente</Button>
    </C.Result>
  );
};

export default Result;
