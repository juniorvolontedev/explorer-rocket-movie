import { useState, useEffect } from "react";
import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Profile } from "../../components/Profile";
import { Movies } from "../../components/Movies";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <MainScreen>
      <header>
        <Brand />
        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Profile />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </MainScreen>
  );
}
