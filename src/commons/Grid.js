import React from "react";
import { Link } from "react-router-dom";
import "../styles/Grid/style.css";
import { getAllProducts, getOneProduct } from "../state/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Grid({ clothes }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="cardsContainer">
      {clothes.map((el, index) => (
        <Link key={index} className="clothingGridCard" to={`/${el.id}`}>
          <img
            className="clothingGridImg"
            src={el.imgFront}
            alt={`${el.category} ${el.name}`}
          ></img>
          <div className="clothingGridDescription">
            <h2 className="gridClothingName">
              {el.category} {el.name}
            </h2>
            <h2>{el.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Grid;
