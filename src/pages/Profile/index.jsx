import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container } from "./styles";
import { TextLink } from "../../components/TextLink";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <TextLink to="/" icon={FiArrowLeft} label="Voltar" />
      </header>
      <main>
        <div className="profilePhoto">
          <img src="https://github.com/juniorvolontedev.png" alt="My Photo" />
          <i>
            <FiCamera />
          </i>
        </div>

        <form>
          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={FiMail} type="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" placeholder="Senha atual" />
          <Input icon={FiLock} type="password" placeholder="Nova senha" />
          <Button label="Salvar" />
        </form>
      </main>
    </Container>
  );
}
