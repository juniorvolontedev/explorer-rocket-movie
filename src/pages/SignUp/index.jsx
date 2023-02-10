import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { AuthScreen } from "../../components/AuthScreen";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

export function SignUp() {
  return (
    <AuthScreen>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </header>

      <h2>Crie sua conta</h2>

      <Input type="text" placeholder="Nome" icon={FiUser} />

      <Input type="email" placeholder="E-mail" icon={FiMail} />

      <Input type="password" placeholder="Senha" icon={FiLock} />

      <Button label="Cadastrar" />

      <TextLink to="/" icon={FiArrowLeft} label="Voltar para o login" />
    </AuthScreen>
  );
}
