import PropTypes from "prop-types";

export default function Button({ txt, changeHandler, bgColor }) {
  return (
    <button
      type="button"
      onClick={changeHandler}
      className={`rounded text-white bg-${bgColor}-500`}
    >
      Click Me {txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: "green",
};
