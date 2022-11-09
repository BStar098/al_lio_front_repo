import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./commons/Grid";
import { clothesArray } from "./utils/dummyClothes";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Item from "./commons/Item";
import AddProduct from "./components/AddProduct";

function App() {
const [search, setSearch] = useState('')

const handleSearch = (e)=>{
  setSearch(e.target.value)
}

  return (
    <div className="App">
      <Navbar search={search} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<Item />}></Route>
        <Route
          path="/products"
          element={<Grid search={search} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/cat/:category" element={<Grid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
