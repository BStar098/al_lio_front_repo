import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { usersRequests } from "../state/users";

import { useState } from "react";

const Register = () => {
  const registerHandler = () => {
    usersRequests.post("/register", {});
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="caja-de-registro">
        <h2 className="titulo-registro">
          Ingrese todos los datos para completar el registro:
        </h2>
        <div>
          <Link to="">
            <TextField
              required
              id="input-with-icon-textfield"
              label="Nombre de usuario"
              variant="filled"
              value={name}
              onChange={handleName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Link>
          <div className="requisitos">
            <h6 className>
              *Tu usuario debe contener una Mayuscula y una minuscula como
              minimo
            </h6>
            <h6 className="h6-1">
              *Tu usuario debe contener almenos un numero
            </h6>
          </div>
        </div>
        <div>
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="ELIGE TU GENERO"
          />
        </div>
        <div className="elegir-genero">
          <div>
            <input type="radio" name="citizenship" id="sexo" value="hombre" />
            Hombre
          </div>
          <div>
            <input type="radio" name="citizenship" id="sexo" value="mujer" />
            Mujer
          </div>
          <div>
            <input type="radio" name="citizenship" id="sexo" value="mujer" />
            Sin especificar
          </div>
        </div>
        <div>
          <Link to="">
            <TextField
              required
              id="filled-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={handlePassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              required
              id="filled-password-input"
              label="Repetir contraseña"
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
          </Link>
        </div>
        <div>
          <Link to="">
            <TextField
              required
              id="filled-password-input"
              label="E-mail"
              type="email"
              autoComplete="current-password"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              id="filled-password-input"
              label="Repetir E-mail"
              type="email"
              autoComplete="current-password"
              variant="filled"
              value={email}
              onChange={handleEmail}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Link>
        </div>
        <div>
          <TextField
            required
            className="aaaa"
            id="filled-number"
            label="Ingrese su edad"
            type="number"
            value={age}
            onChange={handleAge}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div className="boton-registro">
          <Button
            className="enviar-datos"
            variant="contained"
            onClick={registerHandler}
          >
            Registrarme
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Register;
