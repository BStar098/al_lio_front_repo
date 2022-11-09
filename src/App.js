import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./commons/Grid";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Item from "./commons/Item";
import AddProduct from "./components/AddProduct";
import BarraDeBusqueda from "./components/BarraDeBusqueda";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./state/products";

function App() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <Navbar search={search} handleSearch={handleSearch} />
      <div className="bodyContainer">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:id" element={<Item />}></Route>
          <Route path="/products" element={<Grid search={search} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/cat/:category" element={<Grid />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
