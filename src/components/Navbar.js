import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import "../styles/Navbar/Style.css";
import img from "./Logo_pagina.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={img} alt="alLioLogo" className="imagen" />
      </Link>
      <div>
        <Link to="">
          <Button
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
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
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
          >
            Mi perfil
          </Button>
        </Link>
        <Link to="">
          <Button
            startIcon={<ShoppingCartIcon />}
            className="Boton"
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
          >
            Mi carrito
          </Button>
        </Link>
        <Link to="/login">
          <Button
            className="Boton"
            startIcon={<LoginIcon />}
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
          >
            Ingresar
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            className="Boton"
            startIcon={<LoginIcon />}
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
          >
            Registrarse
          </Button>
        </Link>
        <Link to="/logout">
          <Button
            className="Boton"
            startIcon={<LogoutIcon />}
            style={{
              backgroundColor: "#ead7c3",
              color: "black",
              fontFamily: "Canaro",
            }}
          >
            Salir
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
