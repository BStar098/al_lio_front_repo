import { NavLink } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const MiPerfil = (props) => {
  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusuario").value = "";
    document.getElementById("txtpassword").value = "";
    document.getElementById("txtusuario").focus();
  }

  return (
    <>
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <h1 className="vista-usuario">Bienvenido Usuario : {props.usuario}</h1>
        <Button
          startIcon={<PersonIcon />}
          className="Boton"
          style={{
            backgroundColor: "#ead7c3",
            color: "black",
            fontFamily: "Canaro",
          }}
        >
          {props.usuario}
        </Button>
        <nav className="" style={{ marginTop: 20 }}>
          <div className="">
            <div className="" id="">
              <div className="">
                <Button
                  className=""
                  style={{ color: "blue" }}
                  href=" "
                  onClick={cerrarSesion}
                >
                  Cerrar Sesion
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MiPerfil;
