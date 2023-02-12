import { Container } from "./styles";

export function Tags({ tags = [], ...rest }) {
  return (
    <Container>
      {tags.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </Container>
  );
}
