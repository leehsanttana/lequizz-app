import styled from 'styled-components';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    font-size: 4rem;
    color: var(--light-blue);
    text-shadow: 1px 1px 3px var(--black);
  }

  .init-logo {
    display: inline-block;
    color: #1b87a2;
    transform: rotate(15deg);
    margin-right: -1rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  .info-user {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;

    @media (max-width: 590px) {
      grid-template-columns: 1fr;
    }
  }

  .error {
    color: #b82323;
    font-size: 0.8rem;
    margin-top: -1.2rem;
    margin-bottom: 1rem;
  }
`;
