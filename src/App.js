import React from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./commons/Grid";
import { clothesArray } from "./utils/dummyClothes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Grid clothes={clothesArray} />}></Route>
        <Route path="/:id" element={<div>Item</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
