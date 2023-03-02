import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <>
      <FormStyled>
        <div className="register-form__field">
          <label htmlFor="email" className="register-form__label">
            email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="register-form__input"
            placeholder="Introduce your email"
            required
          ></input>
        </div>
        <div className="register-form__field">
          <label htmlFor="password" className="register-form__label">
            password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="register-form__input"
            placeholder="Introduce your password"
            required
          ></input>
        </div>
        <div className="register-form__field">
          <label htmlFor="image" className="register-form__label">
            image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            className="register-form__input"
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
