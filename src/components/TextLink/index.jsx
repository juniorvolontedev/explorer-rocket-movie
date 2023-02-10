import { Container } from "./styles";

export function TextLink({ label, ...rest }) {
  return <Container {...rest}>{label}</Container>;
}
