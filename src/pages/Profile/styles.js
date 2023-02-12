import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 6.2rem 14.4rem;
    background: rgba(255, 133, 155, 0.05);
  }

  main {
    width: 34rem;
    margin: -8rem auto 0;
  }

  .profilePhoto {
    position: relative;
    width: 18.6rem;
    height: 18.6rem;
    margin: 0 auto 6.4rem;

    img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
    }

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.8rem;
      height: 4.8rem;
      background: ${({ theme }) => theme.COLORS.PRIMARY};
      border-radius: 50%;
      position: absolute;
      right: 0;
      bottom: 0;

      svg {
        color: ${({ theme }) => theme.COLORS.BUTTON_TEXT_COLOR};
      }
    }
  }

  form {
    div:nth-child(2) {
      margin-bottom: 2.4rem;
    }

    button {
      margin-top: 2.4rem;
    }
  }
`;
