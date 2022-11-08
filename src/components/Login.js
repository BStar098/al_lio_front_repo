import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import { usersRequests } from "../state/users";
import { useState } from "react";
import MiPerfil from "./MiPerfil";

const Login = () => {
  const loginHandler = () => {
    usersRequests.post("/login", {});
  };

  const [miLogin, setMiLogin] = useState("false");
  const [usuario, setUsuario] = useState(""); //Captura el nombre de usuario
  const [password, setPassword] = useState(""); //Captura la contraseña

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusuario = document.getElementById("txtusuario").value; //Capturo si hay algo escrito
    var txtpassword = document.getElementById("txtpassword").value;
    if (txtusuario.length === 0 || txtpassword.length === 0) {
      alert("Complete los datos faltantes!!!");
    } else {
      if (usuario === "tiago" && password === "123") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error de usuario y/o contraseña!!");
        document.getElementById("txtusuario").value = "";
        document.getElementById("txtpassword").value = "";
        document.getElementById("txtpassword").focus();
      }
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form id="form_login">
        <div className="caja-de-logeo">
          <h2 className="titulo-logeo">
            Bienvenido!! ingrese su usuario y contraseña porfavor:
          </h2>
          <div className="formulario">
            <TextField
              required
              onChange={(e) => setUsuario(e.target.value)}
              id="txtusuario"
              label="Usuario"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={(e) => setPassword(e.target.value)}
              id="txtpassword"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="boton-ingreso">
            <Button onClick={iniciarSesion} variant="contained" required>
              Ingresar
            </Button>
          </div>
        </div>
      </form>
      {miLogin === "true" && <MiPerfil usuario={usuario} />}
    </Box>
  );
};

export default Login;
