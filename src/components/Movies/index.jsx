import { FiPlus } from "react-icons/fi";
import { Container, Loop } from "./styles";
import { Button } from "../Button";
import { CardMovie } from "../CardMovie";

export function Movies({ movies = [] }) {
  return (
    <Container>
      <header>
        <h2>Meus Filmes</h2>

        <Button type="link" to="/new" icon={FiPlus} label="Adicionar filme" />
      </header>

      <Loop>
        {movies &&
          movies.map((movie) => (
            <CardMovie
              key={String(movie.id)}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              tags={movie.tags}
            >
              <p>{movie.description}</p>
            </CardMovie>
          ))}
      </Loop>
    </Container>
  );
}
