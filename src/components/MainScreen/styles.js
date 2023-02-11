import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;

  > header {
    border-bottom: solid 1px ${({ theme }) => theme.COLORS.BORDER_COLOR};
    padding: 0 12.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    > a {
      max-width: 16.4rem;
      min-width: 16.4rem;
    }

    div:nth-child(2) {
      width: 100%;
    }

    div:last-child {
      max-width: 19.8rem;
      min-width: 19.8rem;
    }
  }

  main {
    padding: 4.7rem 12.3rem 5.6rem;
  }
`;
