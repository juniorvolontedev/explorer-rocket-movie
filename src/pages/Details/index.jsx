import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { Container } from "./styles";
import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { TextLink } from "../../components/TextLink";
import { Tags } from "../../components/Tags";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import Swal from "sweetalert2";

export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [stars, setStars] = useState([]);
  const [search, setSearch] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    await Swal.fire({
      title: "Deseja mesmo excluir?",
      text: "Ao excluir não será possível recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Desejo Excluir",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/movies/${params.id}`);
        Swal.fire(
          "Filme Excluido!",
          "O filme foi excluido com sucesso",
          "success"
        );
        navigate(-1);
      }
    });
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} às ${hour}:${minute}`;
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);

      let newStars = [];

      for (let i = 1; i <= 5; i++) {
        i <= Number(response.data.rating)
          ? newStars.push(<AiFillStar key={i} />)
          : newStars.push(<AiOutlineStar key={i} />);
      }

      setStars(newStars);
    }

    fetchMovie();
  }, []);

  return (
    <MainScreen>
      <header>
        <Brand />
        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          onClick={handleBack}
        />
        <Profile />
      </header>
      {data && (
        <main>
          <Container>
            <TextLink
              to="/"
              icon={FiArrowLeft}
              label="Voltar"
              onClick={handleBack}
            />

            <div className="detailsHeader">
              <h1>{data.title}</h1>

              <div className="rating">{stars.map((star) => star)}</div>
            </div>

            <div className="metaInfo">
              <div>
                <img src={avatarUrl} alt="Minha Foto" />
                <span>Por {user.name}</span>
              </div>

              <div>
                <CiClock2 />
                <span>{formatDate(data.created_at)}</span>
              </div>
            </div>

            <Tags tags={data.tags} />

            <div className="detailContent">{data.description}</div>

            <Button
              label="Excluir"
              isdelete={String(true)}
              onClick={handleRemove}
            />
          </Container>
        </main>
      )}
    </MainScreen>
  );
}
