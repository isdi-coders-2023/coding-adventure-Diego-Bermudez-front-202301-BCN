import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Form from "./Form";

describe("Given the Form component", () => {
  describe("When it's rendered", () => {
    const componentRender = () =>
      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

    test("Then it should show an input field with the type 'email'", () => {
      const inputLabel = "email";
      const expectedInputType = "email";

      componentRender();

      const inputType = screen.getByLabelText(inputLabel);

      expect(inputType).toHaveAttribute("type", expectedInputType);
    });

    test("Then it should show an input field with the type 'password'", () => {
      const inputLabel = "password";
      const expectedInputType = "password";

      componentRender();

      const inputType = screen.getByLabelText(inputLabel);

      expect(inputType).toHaveAttribute("type", expectedInputType);
    });

    test("Then it should show an file input with the type 'file'", () => {
      const inputLabel = "image";
      const expectedInputType = "file";

      componentRender();

      const inputType = screen.getByLabelText(inputLabel);

      expect(inputType).toHaveAttribute("type", expectedInputType);
    });
  });
});
