import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 0.8rem;

  input,
  textarea {
    display: block;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.COLORS.INPUT};
    height: 5.6rem;
    width: 100%;
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
    padding: 0 2rem;
  }

  textarea {
    height: 27.4rem;
    padding: 2rem;
    resize: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  svg + input {
    padding: 0 2rem 0 5.2rem;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`;

export const InputTag = styled.div`
  label {
    display: block;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_CARD};
    margin-bottom: 2.4rem;
  }

  .inputTagContainer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    background: #0d0c0f;
    padding: 1.6rem;
    border-radius: 1rem;

    div {
      position: relative;
    }

    .delete-tag,
    .new-tag {
      width: auto;
      height: 5.6rem;
      border-radius: 1rem;
      background: ${({ theme }) => theme.COLORS.INPUT};
      padding: 0 1.6rem;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      border: none;
      outline: none;
    }

    .new-tag {
      background: none;
      border: 2px dashed ${({ theme }) => theme.COLORS.INPUT};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.6rem;
    }
  }
`;
