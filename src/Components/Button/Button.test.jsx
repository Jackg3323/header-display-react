import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Button from "./Button";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button clickHandler={() => {}} txt="Click Me" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls the change handler whenever the button is clicked", () => {
  const mockClickHandler = jest.fn();

  render(<Button changeHandler={mockClickHandler} />);
  userEvent.onClick(screen.getByRole("button"));

  expect(mockClickHandler).toHaveBeenCalled();
});
