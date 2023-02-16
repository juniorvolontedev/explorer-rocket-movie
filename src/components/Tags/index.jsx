import { Container } from "./styles";

export function Tags({ tags = [], ...rest }) {
  return (
    <Container>
      {tags.map((tag) => (
        <li key={tag.id}>{tag.name}</li>
      ))}
    </Container>
  );
}
