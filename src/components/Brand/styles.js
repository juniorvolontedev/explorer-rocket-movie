import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-decoration: none;
`;
