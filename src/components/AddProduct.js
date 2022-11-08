import React from "react";
import "../styles/AddProduct/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsRequests } from "../state/products";

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
    productsRequests
      .post("/", state)
      .then((product) => {
        alert("Tu producto fue agregado con �xito!");
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
    <div className="formContainer">
      <h1 className="addProductTitle">Sube tu pilcha &#128526;!</h1>
      <div className="inputsContainer">
        <label>
          Nombre:
          <input onChange={inputHandler} type="text" id="name"></input>
        </label>
        <label>
          Color:
          <input onChange={inputHandler} type="text" id="colour"></input>
        </label>
        <label>
          Talle:
          <input onChange={inputHandler} type="text" id="size"></input>
        </label>
        <label>
          Precio:
          <input onChange={inputHandler} type="number" id="price"></input>
        </label>
        <label>
          Stock:
          <input onChange={inputHandler} type="number" id="stock"></input>
        </label>
        <label>
          URL de Imagen Nro. 1:
          <input onChange={imagesHandler} type="text" id="image1"></input>
        </label>
        <label>
          URL de Imagen Nro. 2:
          <input onChange={imagesHandler} type="text" id="image2"></input>
        </label>
        <label>
          Categoria:
          <select id="select" className="category" onChange={inputHandler}>
            <option value="remeras">Remera</option>
            <option value="buzos">Buzo</option>
            <option value="pantalones">Pantalon</option>
          </select>
        </label>
        <textarea
          style={{ fontFamily: "Canaro" }}
          onChange={inputHandler}
          id="description"
          placeholder={`Describe tu pilcha.. `}
        ></textarea>
        <button onClick={submitHandler}>ENVIAR</button>
      </div>
    </div>
  );
}

export default AddProduct;