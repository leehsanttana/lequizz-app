import React from 'react';
import * as C from './styles';

const Question = ({ question, active, answers, id, value, onChange }) => {
  if (active === false) return null;
  return (
    <C.Question className="animeToRight">
      <h2 className="question">{question}</h2>
      {Object.keys(answers).map((answer, i) => {
        if (answers[answer] !== null) {
          return (
            <label key={answer}>
              <input
                type="radio"
                id={id}
                checked={value === answer}
                value={answer}
                onChange={onChange}
              />
              {answers[answer]}.
            </label>
          );
        }
        return null;
      })}
    </C.Question>
  );
};

export default Question;
