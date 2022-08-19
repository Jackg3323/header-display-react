import renderer from "react-test-renderer";
import Profile from "./Profile";

it("renders without crashing", () => {
  const rendered = renderer
    .create(<Profile name="Jack" imgUrl="someImage.png" />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
