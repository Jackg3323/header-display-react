import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

it("calls the change handler whenver the button is clicked", () => {
  const mockChangeHandler = jest.fn();

  render(<Button changeHandler={mockChangeHandler} />);
  userEvent.onClick(screen.getByRole("button"));

  expect(mockChangeHandler).toHaveBeenCalled();
});
