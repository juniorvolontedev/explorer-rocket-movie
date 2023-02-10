import { Container } from "./styles";

export function Button({ label, type = "button", ...rest }) {
  return (
    <Container type={type} {...rest}>
      {label}
    </Container>
  );
}
