import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container } from "./styles";
import { TextLink } from "../../components/TextLink";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const useUpdated = Object.assign(user, updated);

    await updateProfile({ user: useUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <TextLink to="/" icon={FiArrowLeft} label="Voltar" />
      </header>
      <main>
        <div className="profilePhoto">
          <img src={avatar} alt="My Photo" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </div>

        <form>
          <Input
            icon={FiUser}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha atual"
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <Button label="Salvar" onClick={handleUpdate} />
        </form>
      </main>
    </Container>
  );
}
