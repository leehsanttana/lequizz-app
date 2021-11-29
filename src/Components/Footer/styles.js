import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 1rem 5rem;
  justify-self: end;

  @media (max-width: 780px) {
    padding: 1.2rem;
  }

  a {
    color: var(--white);
  }
`;
