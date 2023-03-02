import styled from "styled-components";

const FormStyled = styled.form.attrs({
  className: "register-form",
})`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 76px;

    & label {
      font-weight: 700;
      color: ${(props) => props.theme.colors.defaultColorLight};
      margin-bottom: 9px;
    }

    & input {
      width: 325px;
      height: 40px;
      background: ${(props) => props.theme.colors.defaultColorLight};
      border-radius: 8px;
      padding-left: 11px;
    }
  }

  @media (min-width: 900px) {
    input {
      height: 57px;
      width: 832px;
    }
  }
`;

export default FormStyled;
