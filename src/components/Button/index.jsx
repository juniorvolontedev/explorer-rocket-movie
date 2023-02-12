import { Container, ContainerLink } from "./styles";

export function Button({
  icon: Icon,
  label,
  type = "button",
  to = "#",
  ...rest
}) {
  if (type == "link") {
    return (
      <ContainerLink to={to} type={type} {...rest}>
        {Icon && <Icon size={20} />}
        {label}
      </ContainerLink>
    );
  }

  return (
    <Container type={type} {...rest}>
      {Icon && <Icon size={20} />}
      {label}
    </Container>
  );
}
