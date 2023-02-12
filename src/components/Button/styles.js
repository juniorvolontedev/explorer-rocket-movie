import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border: none;
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  background: ${({ theme, isDelete }) =>
    isDelete ? "#0D0C0F" : theme.COLORS.PRIMARY};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme, isDelete }) =>
    isDelete ? theme.COLORS.PRIMARY : theme.COLORS.TEXT_COLOR};
  padding: 0 3.2rem;
  cursor: pointer;
`;

export const ContainerLink = styled(Container).attrs({ as: Link })`
  width: max-content;
  text-decoration: none;
`;
