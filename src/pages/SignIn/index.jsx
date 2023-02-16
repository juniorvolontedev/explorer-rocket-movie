import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiMail, FiLock } from "react-icons/fi";
import { AuthScreen } from "../../components/AuthScreen";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <AuthScreen>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </header>

      <h2>Faça seu login</h2>

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

      <Button label="Entrar" onClick={handleSignIn} />

      <TextLink to="/register" label="Criar conta" />
    </AuthScreen>
  );
}
