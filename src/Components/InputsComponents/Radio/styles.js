import styled from 'styled-components';

export const Radio = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 590px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
  }

  .option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      margin-top: 0.5rem;
    }
  }

  input[type='radio'] {
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
