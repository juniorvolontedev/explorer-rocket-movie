import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Profile } from "../../components/Profile";
import { TextLink } from "../../components/TextLink";

export function NewMovie() {
  return (
    <MainScreen>
      <header>
        <Brand />
        <Input type="text" placeholder="Pesquisar pelo título" />
        <Profile />
      </header>
      <main>
        <Container>
          <TextLink to="/" icon={FiArrowLeft} label="Voltar" />

          <h1>Novo filme</h1>

          <div className="cols2">
            <Input placeholder="Título" />

            <Input
              type="number"
              min="0"
              max="5"
              placeholder="Sua nota de (0 a 5)"
            />
          </div>

          <div>
            <Input type="textarea" placeholder="Observações" />
          </div>

          <div>
            <Input type="tag" tags={["Node JS", "React JS"]} />
          </div>
        </Container>
      </main>
    </MainScreen>
  );
}
