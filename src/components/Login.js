import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import { usersRequests } from "../state/users";
import "../styles/Login/styles.css";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInput = e => {
    const inputKey = e.target.id;
    setInput({ ...input, [inputKey]: e.target.value });
  };

  const loginHandler = () => {
    console.log(input)
    usersRequests.post("/login", input);
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
      <div className="container">
        <h2 className="title">
          Bienvenido!! ingrese su usuario y contraseña porfavor:
        </h2>
        <div className="div-input">
          <TextField
            label="E-Mail"
            id="email"
            variant="filled"
            onChange={handleInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="div-input">
          <TextField
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={handleInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="div-input">
          <Button onClick={loginHandler} variant="contained">
            Ingresar
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Login;
