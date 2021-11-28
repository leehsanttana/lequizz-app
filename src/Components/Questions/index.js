import { React, useContext, useState } from 'react';
import Theme from '../Theme';
import Question from '../Question';
import Result from '../Result';
import Button from '../InputsComponents/Button';
import * as C from './styles';
import { UserContext } from '../../Context/UserContext';

const Questions = () => {
  const { name, difficulty, questions, result, setResult, slide, setSlide } =
    useContext(UserContext);

  const [answers, setAnswers] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    a10: '',
  });

  function handleChange({ target }) {
    setAnswers({ ...answers, [target.id]: target.value });
  }

  function finalResult() {
    const correctAnswers = questions.filter(
      ({ id, correct_answer }) => answers[id] === correct_answer,
    );
    setResult(correctAnswers.length);
  }

  function nextSlide(event) {
    event.preventDefault();
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      finalResult();
    }
  }

  return (
    <Theme>
      <C.Questions className="animeToRight">
        <div className="header-question">
          <span className="user">Usuário: {name}</span>
          <div className="info-header-question">
            <span
              className="difficulty"
              style={{
                background: difficulty === 'easy' ? '#23b823' : '#b82323',
              }}
            >
              {difficulty}
            </span>
            <span className="slides">
              {slide > questions.length - 1
                ? null
                : `${slide + 1} | ${questions.length}`}
            </span>
          </div>
        </div>
        <form className="section-question" onSubmit={nextSlide}>
          {questions.map((question, index) => {
            return (
              <Question
                active={slide === index}
                key={question.id}
                value={answers[question.id]}
                onChange={handleChange}
                {...question}
              />
            );
          })}
          {result ? (
            <Result />
          ) : (
            <Button>
              {slide === questions.length - 1 ? 'Finalizar' : 'Avançar'}{' '}
            </Button>
          )}
        </form>
      </C.Questions>
    </Theme>
  );
};

export default Questions;
