import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import BarraDeBusqueda from "./BarraDeBusqueda";
import "../styles/Navbar/Style.css";
import img from "../imagenes/Logo_pagina.png";

const Navbar = (search, handleSearch) => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={img} alt="alLioLogo" className="imagen" />
      </Link>

      <div>
        <Link to="/products">
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

      <BarraDeBusqueda className="barrita-de-busqueda" />

      <div>
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
        <Link to="/cart">
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

        <Link to="">
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
        
