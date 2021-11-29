import styled from 'styled-components';

export const Result = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
    .result-total {
      font-size: 2.5rem;
      margin: 0 1rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  button {
    width: 250px !important;
  }

  .correct-answers {
    width: 100%;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.2rem;
  }
`;
