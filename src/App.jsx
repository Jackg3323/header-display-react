import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const name = useState("Mark");
  return <Header name={name} />;
}

export default App;
