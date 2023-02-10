import { Container, Form, Background } from "./styles";

export function AuthScreen({ children }) {
  return (
    <Container>
      <Form>{children}</Form>

      <Background />
    </Container>
  );
}
