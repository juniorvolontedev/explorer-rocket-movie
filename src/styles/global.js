import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BODY};
    color: ${({ theme }) => theme.COLORS.TEXT}
  }

  body, input, textarea, select, button, ::placeholder {
    font-family: 'Roboto Slab', serif;
  }

  a, button {
    transition: all ease .4s;
  }

  a:hover, button:hover {
    filter: brightness(1.2);
  }
`;
