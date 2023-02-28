import ButtonStyled from "./ButtonStyled";
import "@fontsource/saira-stencil-one";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
