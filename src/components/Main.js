import React from "react";
import { Link } from "@mui/material";
import bannerColeccion from "../commonds/bannerColeccion.png";
import remera from "../commonds/remera.png";
import pantalon from "../commonds/pantalon.png";
import abrigo from "../commonds/abrigo.png";
import "../index.css";

const Main = () => {
  return (
    <div>
      <div>
        <Link href="https://http.cat/" className="linkBanner">
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
            <Link href="">
              <img src={remera} alt="Remeras" className="fotoCategoria"></img>
            </Link>
            <div className="titCat">
              <p>REMERAS</p>
            </div>
          </div>
          <div>
            <Link href="">
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
            <Link href="">
              <img src={abrigo} alt="Abrigos" className="fotoCategoria"></img>
            </Link>
            <div className="titCat">
              <p>BUZOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
