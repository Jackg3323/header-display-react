export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input type="text" placeholder="Enter Your Name" id="name" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
