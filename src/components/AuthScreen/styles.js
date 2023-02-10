import styled from "styled-components";
import authScreenImg from "../../assets/authscreen.png";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 63.7rem 1fr;
  height: 100vh;

  @media (max-width: 640px) {
    display: flex;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  max-width: 37.5rem;
  margin: 0 auto;

  header {
    margin-bottom: 4.8rem;

    h1 {
      font-weight: 700;
      font-size: 4.8rem;
      line-height: 6.3rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-bottom: 4.8rem;
  }

  button {
    margin-top: 1.6rem;
  }

  a {
    margin: 4.2rem auto 0;
  }
`;

export const Background = styled.div`
  background: url(${authScreenImg}) no-repeat center center;
  background-size: cover;
`;
