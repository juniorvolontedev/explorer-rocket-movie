import { FiMail, FiLock } from "react-icons/fi";
import { AuthScreen } from "../../components/AuthScreen";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

export function SignIn() {
  return (
    <AuthScreen>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </header>

      <h2>Faça seu login</h2>

      <Input type="email" placeholder="E-mail" icon={FiMail} />

      <Input type="password" placeholder="Senha" icon={FiLock} />

      <Button label="Entrar" />

      <TextLink to="/register" label="Criar conta" />
    </AuthScreen>
  );
}
