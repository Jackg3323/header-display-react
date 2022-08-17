import PropTypes from "prop-types";

export default function Form({ setName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    const form = event.target;
    const name = form.name.value;
    console.log(`Hello ${name}`);
    // const submission = Object.fromEntries(new FormData(event.target));
    setName(name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-80 flex-col items-center"
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="name"
          className="rounded border pl-2"
          name="name"
        />
      </div>
      <button type="submit" className="mt-4 bg-purple-500 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = { setName: PropTypes.func.isRequired };
