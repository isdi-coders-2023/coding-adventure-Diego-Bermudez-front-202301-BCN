import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <>
      <FormStyled>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Introduce your email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Introduce your password"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image">image</label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            placeholder="Introduce and image"
          ></input>
        </div>
        <Button text="Sign up" />
      </FormStyled>
    </>
  );
};
export default Form;
