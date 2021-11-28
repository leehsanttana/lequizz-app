import styled from 'styled-components';

export const Theme = styled.section`
  position: relative;
  margin: auto 14rem;
  width: 700px;
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 3rem;

  @media (max-width: 780px) {
    width: auto;
    padding: 1.2rem;
    margin: auto 2rem;
  }
`;
