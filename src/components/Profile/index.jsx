import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <div>
        <strong>Junior Volonte</strong>
        <span>Sair</span>
      </div>
      <Link to="/profile">
        <img
          src="https://github.com/juniorvolontedev.png"
          alt="Foto de Junior Volonte"
        />
      </Link>
    </Container>
  );
}
