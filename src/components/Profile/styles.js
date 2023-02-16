import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  strong {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  button {
    background: none;
    border: none;
    display: inline;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    cursor: pointer;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
