import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Grid/style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, searchProducts } from "../state/products";
import { useSelector } from "react-redux";

function Grid({ search }) {
  const dispatch = useDispatch();
  const clothes = useSelector(state => state.products.products);
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    if (category) {
      if (search) dispatch(searchProducts({ name: search, category }));
      dispatch(searchProducts({ category: category }));
    }
  }, [category, search]);

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
