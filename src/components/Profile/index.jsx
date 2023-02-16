import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { api } from "../../services/api";

export function Profile() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <div>
        <strong>Junior Volonte</strong>
        <span>Sair</span>
      </div>
      <Link to="/profile">
        <img src={avatarUrl} alt="Foto de Junior Volonte" />
      </Link>
    </Container>
  );
}
