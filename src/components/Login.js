import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import axios from "axios";
const Login = () => {
  const loginHandler = () => {
    axios
      .post("http://localhost:3001/api/users/login", {
        email: "santi@gmail.com",
        password: "123456",
      })
      .then((user) => {
        console.log(user.data);
      });
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
      <div className="caja-de-logeo">
        <h2 className="bienvenido">
          Bienvenido!! ingrese su usuario y contraseña porfavor:
        </h2>
        <div className="formulario">
          <TextField
            id="input-with-icon-textfield"
            label="E-Mail"
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
            id="filled-password-input"
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
        <Button onClick={loginHandler} variant="contained">
          Ingresar
        </Button>
      </div>
    </Box>
  );
};

export default Login;
