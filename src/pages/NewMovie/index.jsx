import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { TextLink } from "../../components/TextLink";
import { api } from "../../services/api";
import Swal from "sweetalert2";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Digite o título do filme",
      });
    }

    if (newTag) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você deixou uma tag no campo para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio",
      });
    }

    await api.post("/movies", {
      title,
      rating,
      description,
      tags,
    });

    Swal.fire({
      icon: "success",
      title: "Filme Cadastrado!",
      text: "O filme foi cadastrado com sucesso.",
    });

    navigate(-1);
  }

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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              type="number"
              min="0"
              max="5"
              placeholder="Sua nota de (0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div>
            <Input
              type="textarea"
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Input
              type="tag"
              tags={tags}
              onChange={(e) => setNewTag(e.target.value)}
              onAdd={handleAddTag}
              onRemove={handleRemoveTag}
              value={newTag}
            />
          </div>

          <Button
            label="Salvar alterações"
            isdelete={false}
            onClick={handleNewMovie}
          />
        </Container>
      </main>
    </MainScreen>
  );
}
