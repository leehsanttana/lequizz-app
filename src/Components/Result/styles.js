import styled from 'styled-components';

export const Result = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 2rem 0 4rem;
    .result-total {
      font-size: 2.5rem;
      margin: 0 1rem;
    }
  }

  button {
    width: 250px !important;
  }
`;
