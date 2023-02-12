import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./styles";
import { Tags } from "../Tags";

export function CardMovie({ title, rating, tags = [], children, ...rest }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    i <= rating
      ? stars.push(<AiFillStar key={i} />)
      : stars.push(<AiOutlineStar key={i} />);
  }

  return (
    <Container {...rest}>
      <Link to="/details">
        <h3>{title}</h3>

        <div className="rating">{stars.map((star) => star)}</div>

        {children}

        <Tags tags={tags} />
      </Link>
    </Container>
  );
}
