import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const register = () => {
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
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
              label="Contraseña"
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
              label="Email"
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
          </Link>
        </div>

        <div>
          <TextField
            required
            className="aaaa"
            id="filled-number"
            label="Ingrese su edad"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>

        <Button
          className="enviar-datos"
          variant="contained"
          href="https://www.google.com/"
        >
          Registrarme
        </Button>
      </div>
    </Box>
  );
};

export default register;

/*<input type="radio" name="sexo" id="hombre" value="Hombre" />
          Hombre
          <input type="radio" name="sexo" id="mujer" value="Mujer" />
          Mujer
          <input type="radio" name="sexo" id="none" value="None" />
          Sin especificar

<TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

          */
