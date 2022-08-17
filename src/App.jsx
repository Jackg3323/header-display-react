import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

function App() {
  const [name, setName] = useState("User");
  return (
    <>
      <Title />
      <Header name={name} />
      <Form setName={setName} />
    </>
  );
}

export default App;
