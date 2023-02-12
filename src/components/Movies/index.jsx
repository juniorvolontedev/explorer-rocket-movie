import { FiPlus } from "react-icons/fi";
import { Container, Loop } from "./styles";
import { Button } from "../Button";
import { CardMovie } from "../CardMovie";

export function Movies() {
  return (
    <Container>
      <header>
        <h2>Meus Filmes</h2>

        <Button type="link" to="/new" icon={FiPlus} label="Adicionar filme" />
      </header>

      <Loop>
        <CardMovie
          title="Interestellar"
          rating={4}
          tags={["Ficção Cientifica", "Drama", "Família"]}
        >
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se um pouco mais de texto
          </p>
        </CardMovie>

        <CardMovie
          title="Interestellar"
          rating={4}
          tags={["Ficção Cientifica", "Drama", "Família"]}
        >
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se um pouco mais de texto
          </p>
        </CardMovie>

        <CardMovie
          title="Interestellar"
          rating={4}
          tags={["Ficção Cientifica", "Drama", "Família"]}
        >
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se um pouco mais de texto
          </p>
        </CardMovie>

        <CardMovie
          title="Interestellar"
          rating={4}
          tags={["Ficção Cientifica", "Drama", "Família"]}
        >
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se um pouco mais de texto
          </p>
        </CardMovie>

        <CardMovie
          title="Interestellar"
          rating={4}
          tags={["Ficção Cientifica", "Drama", "Família"]}
        >
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se um pouco mais de texto
          </p>
        </CardMovie>
      </Loop>
    </Container>
  );
}
