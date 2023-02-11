import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Profile } from "../../components/Profile";
import { Movies } from "../../components/Movies";

export function Home() {
  return (
    <MainScreen>
      <header>
        <Brand />
        <Input type="text" placeholder="Pesquisar pelo título" />
        <Profile />
      </header>
      <main>
        <Movies />
      </main>
    </MainScreen>
  );
}
