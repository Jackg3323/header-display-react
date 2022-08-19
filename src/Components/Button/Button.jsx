import PropTypes from "prop-types";

export default function Button({ label, changeHandler }) {
  return (
    <button type="button" onClick={changeHandler}>
      Click Me {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
