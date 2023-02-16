import { FiPlus, FiX } from "react-icons/fi";
import { Container, InputTag } from "./styles";

export function Input({
  icon: Icon,
  type = "text",
  isNew = false,
  tags = [],
  onChange = () => {},
  onAdd = () => {},
  onRemove = () => {},
  ...rest
}) {
  if (type == "textarea") {
    return (
      <Container>
        {Icon && <Icon size={20} />}
        <textarea onChange={onChange} {...rest}></textarea>
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
              <FiX onClick={() => onRemove(value)} />
            </div>
          ))}

          <div>
            <input
              onChange={onChange}
              className="new-tag"
              type="text"
              placeholder="Novo marcador"
              {...rest}
            />
            <FiPlus onClick={onAdd} />
          </div>
        </div>
      </InputTag>
    );
  }

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type={type} onChange={onChange} {...rest} />
    </Container>
  );
}
