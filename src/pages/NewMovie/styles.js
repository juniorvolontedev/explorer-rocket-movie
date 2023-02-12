import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
  a {
    margin-right: auto;
  }
  .cols2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;
