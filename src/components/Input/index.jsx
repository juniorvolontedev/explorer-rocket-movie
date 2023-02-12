import { FiPlus, FiX } from "react-icons/fi";
import { Container, InputTag } from "./styles";

export function Input({
  icon: Icon,
  type = "text",
  isNew = false,
  tags = [],
  ...rest
}) {
  if (type == "textarea") {
    return (
      <Container>
        {Icon && <Icon size={20} />}
        <textarea {...rest}></textarea>
      </Container>
    );
  }

  if (type == "tag") {
    return (
      <InputTag>
        <label>Marcadores</label>
        <div className="inputTagContainer">
          {tags.map((value, key) => (
            <div key={key}>
              <input
                readOnly={true}
                className="delete-tag"
                type="text"
                value={value}
              />
              <FiX />
            </div>
          ))}

          <div>
            <input
              className="new-tag"
              type="text"
              placeholder="Novo marcador"
            />
            <FiPlus />
          </div>
        </div>
      </InputTag>
    );
  }

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type={type} {...rest} />
    </Container>
  );
}
