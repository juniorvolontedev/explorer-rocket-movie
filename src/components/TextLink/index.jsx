import { Container } from "./styles";

export function TextLink({ icon: Icon, label, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {label}
    </Container>
  );
}
