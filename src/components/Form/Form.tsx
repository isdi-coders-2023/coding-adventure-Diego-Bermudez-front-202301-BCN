const Form = (): JSX.Element => {
  return (
    <>
      <form>
        <div>
          <label>
            email
            <input
              type="email"
              name="email"
              placeholder="Introduce your email"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type="password"
              name="password"
              placeholder="Introduce your password"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            image
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              placeholder="Introduce and image"
            ></input>
          </label>
        </div>
      </form>
    </>
  );
};
export default Form;
