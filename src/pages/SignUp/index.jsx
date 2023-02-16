import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { AuthScreen } from "../../components/AuthScreen";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import { api } from "../../services/api";
import Swal from "sweetalert2";

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Bem-vindo(a)!",
          text: "Usuário cadastrado com sucesso.",
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Ops",
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ops",
            text: "Não foi possível cadastrar",
          });
        }
      });
  }

  return (
    <AuthScreen>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </header>

      <h2>Crie sua conta</h2>

      <Input
        type="text"
        placeholder="Nome"
        icon={FiUser}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="E-mail"
        icon={FiMail}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Senha"
        icon={FiLock}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button label="Cadastrar" onClick={handleSignUp} />

      <TextLink to="/" icon={FiArrowLeft} label="Voltar para o login" />
    </AuthScreen>
  );
}
