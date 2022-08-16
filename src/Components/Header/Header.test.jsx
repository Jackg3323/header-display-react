import renderer from "react-test-renderer";
import Header from "./Header";

it("renders correctly", () => {
  const tree = renderer.create(<Header name="Mark" />).toJSON();
  expect(tree).toMatchSnapshot();
});
