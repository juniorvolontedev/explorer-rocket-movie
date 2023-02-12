import styled from "styled-components";

export const Container = styled.article`
  .detailsHeader {
    margin: 6.4rem 0 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 2rem;
    }
  }

  .metaInfo {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 2.5rem;
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
      border: solid 1px ${({ theme }) => theme.COLORS.BORDER_COLOR};
      border-radius: 50%;
    }

    span {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  .detailContent {
    p {
      &:first-child {
        margin-top: 4rem;
      }

      margin-top: 3rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
    }
  }
`;
