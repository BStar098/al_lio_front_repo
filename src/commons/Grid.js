import React from "react";
import { Link } from "react-router-dom";
import "../styles/Grid/style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../state/products";
import { useSelector } from "react-redux";

function Grid() {
  const dispatch = useDispatch();
  const clothes = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="cardsContainer">
      {clothes.map((el, index) => (
        <Link key={index} className="clothingGridCard" to={`/${el.id}`}>
          <img
            className="clothingGridImg"
            src={el.img[0]}
            alt={`${el.category} ${el.name}`}
          ></img>
          <div className="clothingGridDescription">
            <h2 className="gridClothingName">{el.name}</h2>
            <h2>${el.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Grid;
