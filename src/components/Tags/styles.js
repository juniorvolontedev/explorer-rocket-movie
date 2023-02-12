import styled from "styled-components";

export const Container = styled.ul`
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
`;
