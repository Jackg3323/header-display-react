import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("updates the name in the header whenever we submit the form", () => {
  const nameInput = "John Doe";

  render(<App />);

  const h1 = screen.getByRole("heading", { level: 1 });
  const input = screen.getByLabelText(/name/i);
  const submitBtn = screen.getByRole("button", { name: "Submit" });

  userEvent.type(input, nameInput);
  userEvent.click(submitBtn);

  expect(h1.textContent).toContain(nameInput);
});
