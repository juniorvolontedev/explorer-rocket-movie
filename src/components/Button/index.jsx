import { Container } from "./styles";

export function Button({ icon: Icon, label, type = "button", ...rest }) {
  return (
    <Container type={type} {...rest}>
      {Icon && <Icon size={20} />}
      {label}
    </Container>
  );
}
