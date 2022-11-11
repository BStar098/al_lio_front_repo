import React from "react";
import { Link } from "react-router-dom";
import bannerColeccion from "../assets/imagenes/bannerColeccion.png";
import remera from "../assets/imagenes/remera.png";
import pantalon from "../assets/imagenes/pantalon.png";
import abrigo from "../assets/imagenes/abrigo.png";
import "../styles/Main/styles.css";

const Main = () => {
  return (
    <div>
      <div>
        <Link to="/products" className="linkBanner">
          <img
            src={bannerColeccion}
            alt="colección"
            className="bannerContainer"
          ></img>
        </Link>
      </div>

      <div className="margenCat">
        <div className="containerCat">
          <div>
            <Link to="/cat/remera">
              <img src={remera} alt="Remeras" className="fotoCategoria"></img>
            </Link>
            <div className="titCat">
              <p>REMERAS</p>
            </div>
          </div>
          <div>
            <Link to="/cat/pantalon">
              <img
                src={pantalon}
                alt="Pantalones"
                className="fotoCategoria"
              ></img>
            </Link>
            <div className="titCat">
              <p>PANTALONES</p>
            </div>
          </div>
          <div>
            <Link to="/cat/buzo">
              <img src={abrigo} alt="Abrigos" className="fotoCategoria"></img>
            </Link>
            <div className="titCat">
              <p>BUZOS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        Al lio © 2022. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Main;
