import React from 'react';
import * as C from './styles';

const TestTemplate = ({ question, correct_answers }) => {
  return (
    <C.TestTemplate>
      {Object.keys(correct_answers).map((correct_answer, i) => {
        if (correct_answers[correct_answer] === 'true') {
          return <span key={correct_answer}>{i + 1}</span>;
        }
        return null;
      })}
    </C.TestTemplate>
  );
};

export default TestTemplate;
