import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 323px;
  height: 40px;
  background: ${(props) => props.theme.colors.mainColor};
  border-radius: 10px;
  font-family: ${(props) => props.theme.fonts.titleFont};
  font-size: ${(props) => props.theme.fontSizes.biggerFontSize};
  cursor: pointer;

  &:disabled {
    opacity: 57%;
  }

  @media (min-width: 900px) {
    height: 57px;
  }
`;
export default ButtonStyled;
