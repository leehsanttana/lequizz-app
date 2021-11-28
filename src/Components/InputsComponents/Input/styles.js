import styled from 'styled-components';

export const Input = styled.div`
  label,
  input {
    display: block;
  }

  input {
    width: 100%;
    padding: 1rem 0.5rem;
    border: 2px solid var(--grey);
    border-radius: 0.4rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    transition: 0.3s ease;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--white-light-blue), 0 0 0 4px var(--light-blue);
    }
  }
`;
