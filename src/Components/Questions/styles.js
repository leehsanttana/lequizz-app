import styled from 'styled-components';

export const Questions = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  .header-question {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    .user {
      font-size: 1.2rem;
      font-weight: 100;
      font-family: var(--first-font);
      font-weight: bold;
      color: var(--black);
    }

    .info-header-question {
      .difficulty {
        padding: 0.5rem;
        color: var(--white);
        border-radius: 0.2rem;
        margin-right: 1rem;
      }
    }
  }
  .section-question {
    display: grid;
    height: 100%;

    button {
      width: 120px;
      padding: 1rem;
      justify-self: end;
    }
  }
`;
