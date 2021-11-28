import styled from 'styled-components';

export const Question = styled.section`
  h2 {
    margin-bottom: 2rem;
  }

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  input[type='radio'] {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--grey);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--light-blue);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--white-light-blue);
  }
`;
