import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-decoration: none;
  display: inline-flex;
`;
