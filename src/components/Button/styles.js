import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border: none;
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.COLORS.BUTTON_TEXT_COLOR};
  padding: 0 3.2rem;
  cursor: pointer;
`;
