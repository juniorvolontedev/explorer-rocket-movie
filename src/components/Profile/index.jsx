import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { api } from "../../services/api";

export function Profile() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <div>
        <strong>{user.name}</strong>
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
      <Link to="/profile">
        <img src={avatarUrl} alt="Foto de Junior Volonte" />
      </Link>
    </Container>
  );
}
