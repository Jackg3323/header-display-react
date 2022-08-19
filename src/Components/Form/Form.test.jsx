import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Form from "./Form";

it("renders without crashing", () => {
  const rendered = renderer.create(<Form setName={() => {}} />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("calls the submit handler when the form is submitted", () => {
  const handleSubmit = jest.fn();
  render(<Form setName={handleSubmit} />);
  const submitBtn = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitBtn);
  expect(handleSubmit).toHaveBeenCalled();
});
