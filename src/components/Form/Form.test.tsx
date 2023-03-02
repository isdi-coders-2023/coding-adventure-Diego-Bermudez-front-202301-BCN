import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Form from "./Form";

describe("Given the Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with label 'email'", () => {
      const fieldName = "email";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with label 'password'", () => {
      const fieldName = "password";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);
      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an file input with label 'file'", () => {
      const fieldName = "image";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const inputField = screen.getByLabelText(fieldName);
      expect(inputField).toBeInTheDocument();
    });
  });
});
