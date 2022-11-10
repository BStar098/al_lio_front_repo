import React from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./commons/Grid";
import { clothesArray } from "./utils/dummyClothes";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Item from "./commons/Item";
import CartTest from "./components/CartTest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bodyContainer">
        <Routes>
          <Route path="/test" element={<CartTest />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:id" element={<Item />}></Route>
          <Route
            path="/products"
            element={<Grid clothes={clothesArray} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/logout" element={<div>logout</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
