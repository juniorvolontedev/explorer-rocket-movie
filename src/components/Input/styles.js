import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 0.8rem;

  input {
    display: block;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.COLORS.INPUT};
    height: 5.6rem;
    width: 100%;
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
    padding: 0 2rem 0 5.2rem;
  }

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`;
