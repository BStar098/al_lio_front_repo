import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import "../App.css";
import img from "./Logo_pagina.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="Logo tienda ">
        <img src={img} className="imagen" />
      </a>
      <div>
        <Link to="">
          <Button
            style={{ backgroundColor: "#ead7c3", color: "black" }}
            className="Boton"
            startIcon={<LocalMallIcon />}
          >
            Productos
          </Button>
        </Link>

        <input
          className="barrita-de-busqueda"
          type="text"
          placeholder="Buscar producto..."
        ></input>

        <Link to="">
          <Button
            startIcon={<PersonIcon />}
            className="Boton"
            style={{ backgroundColor: "#ead7c3", color: "black" }}
          >
            Mi perfil
          </Button>
        </Link>
        <Link to="">
          <Button
            startIcon={<ShoppingCartIcon />}
            className="Boton"
            style={{ backgroundColor: "#ead7c3", color: "black" }}
          >
            Mi carrito
          </Button>
        </Link>
        <a href="http://localhost:3000/api/login">
          <Button
            className="Boton"
            startIcon={<LoginIcon />}
            style={{ backgroundColor: "#ead7c3", color: "black" }}
          >
            Ingresar
          </Button>
        </a>
        <Link to="">
          <Button
            className="Boton"
            startIcon={<LogoutIcon />}
            style={{ backgroundColor: "#ead7c3", color: "black" }}
          >
            Salir
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
