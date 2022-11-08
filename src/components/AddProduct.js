import React from "react";
import "../styles/AddProduct/style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [images, setImages] = useState({ image1: "", image2: "" });
  const [state, setState] = useState({
    name: "",
    colour: "",
    size: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    img: [],
  });
  const inputHandler = (event) => {
    if (event.target.id === "select") {
      const inputKey = event.target.className;
      setState({ ...state, [inputKey]: event.target.value });
    } else {
      const inputKey = event.target.id;
      if (inputKey !== "image1" && inputKey !== "image2") {
        setState({ ...state, [inputKey]: event.target.value });
      }
    }
  };
  const imagesHandler = (event) => {
    setImages({ ...images, [event.target.id]: event.target.value });
  };

  const submitHandler = () => {
    state.img[0] = images.image1;
    state.img[1] = images.image2;
    axios
      .post("http://localhost:3001/api/products/", state)
      .then((product) => {
        alert("Tu producto fue agregado con éxito!");
        return product.data;
      })
      .then((product) => {
        navigate(`/${product.id}`);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  return (
    <div className="addItemContainer">
      <div className="inputsContainer">
        <label>
          Name:
          <input onChange={inputHandler} type="text" id="name"></input>
        </label>
        <label>
          Colour:
          <input onChange={inputHandler} type="text" id="colour"></input>
        </label>
        <label>
          Size:
          <input onChange={inputHandler} type="text" id="size"></input>
        </label>
        <label>
          Price:
          <input onChange={inputHandler} type="number" id="price"></input>
        </label>
        <label>
          Stock:
          <input onChange={inputHandler} type="text" id="stock"></input>
        </label>
        <label>
          Image URL nº1:
          <input onChange={imagesHandler} type="text" id="image1"></input>
        </label>
        <label>
          Image URL nº2:
          <input onChange={imagesHandler} type="text" id="image2"></input>
        </label>
        <label>
          Category:
          <select id="select" className="category" onChange={inputHandler}>
            <option value="shirt">Shirt</option>
            <option value="hoodie">Hoodie</option>
            <option value="pants">Pants</option>
          </select>
        </label>
        <textarea
          onChange={inputHandler}
          id="description"
          placeholder={`type in your product's description`}
        ></textarea>
        <button onClick={submitHandler}>SUBMIT</button>
      </div>
    </div>
  );
}

export default AddProduct;
