import styled from 'styled-components';

export const App = styled.div`
  h1,
  h2,
  h3,
  h4,
  label {
    font-family: var(--first-font);
    color: var(--black);
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p,
  small,
  a,
  input,
  span {
    font-family: var(--second-font);
  }
  background: linear-gradient(45deg, #217bbc, #3ab4d3, #8ecae6);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
