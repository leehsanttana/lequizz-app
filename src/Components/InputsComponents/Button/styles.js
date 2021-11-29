import styled from 'styled-components';

export const Button = styled.button`
  align-self: center;
  justify-self: flex-end;
  background: var(--light-blue);
  color: var(--white);
  width: 160px;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px var(--white-light-blue), 0 0 0 4px var(--light-blue);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  @media (max-width: 590px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;
