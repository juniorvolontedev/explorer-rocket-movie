import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { Container } from "./styles";
import { MainScreen } from "../../components/MainScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Profile } from "../../components/Profile";
import { TextLink } from "../../components/TextLink";
import { Tags } from "../../components/Tags";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  });

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    i <= data.rating
      ? stars.push(<AiFillStar key={i} />)
      : stars.push(<AiOutlineStar key={i} />);
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

          <div className="detailsHeader">
            <h1>{data.title}</h1>

            <div className="rating">{stars.map((star) => star)}</div>
          </div>

          <div className="metaInfo">
            <div>
              <img
                src="https://github.com/juniorvolontedev.png"
                alt="Minha Foto"
              />
              <span>Por Junior Volonte</span>
            </div>

            <div>
              <CiClock2 />
              <span>23/05/22 às 08:00</span>
            </div>
          </div>

          <Tags tags={data.tags} />

          <div className="detailContent">{data.description}</div>
        </Container>
      </main>
    </MainScreen>
  );
}
