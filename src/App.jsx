import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Title from "./components/Title/Title";

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";
const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Title />
      <Header name={name} />
      <Form setName={setName} />
      {name && <Profile name={name} imgUrl={imgUrl} />}
      <Products products={products} />
    </>
  );
}

export default App;
