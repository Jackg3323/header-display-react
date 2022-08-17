import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Title from "./components/Title/Title";

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Title />
      <Header name={name} />
      <Form setName={setName} />
      {name && <Profile name={name} imgUrl={imgUrl} />}
    </>
  );
}

export default App;
