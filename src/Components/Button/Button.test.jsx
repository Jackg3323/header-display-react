import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Button from "./Button";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button changeHandler={() => {}} txt="Click Me" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls the change handler whenver the button is clicked", () => {
  const mockChangeHandler = jest.fn();

  render(<Button changeHandler={mockChangeHandler} />);
  userEvent.onClick(screen.getByRole("button"));

  expect(mockChangeHandler).toHaveBeenCalled();
});
