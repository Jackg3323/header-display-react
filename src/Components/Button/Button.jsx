import PropTypes from "prop-types";

export default function Button({ txt, clickHandler: ClickHandler}) {
  return (
    <button
      type="button"
      onClick={ClickHandler}
      className = ` rounded text-white px-4 py-2`
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: "green",
};
