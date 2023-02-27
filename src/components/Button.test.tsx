import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is call with the text 'Sign up'", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<Button text={"Sign up"} />);

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
