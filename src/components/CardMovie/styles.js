import styled from "styled-components";

export const Container = styled.article`
  background: ${({ theme }) => theme.COLORS.BG_CARD};
  padding: 3.2rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-bottom: 0.8rem;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.5rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.TEXT_CARD};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_TAG};

    li {
      background: ${({ theme }) => theme.COLORS.BUTTON_TEXT_COLOR};
      padding: 0.5rem 1.6rem;
      border-radius: 0.8rem;
    }
  }
`;
