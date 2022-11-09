import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from '@mui/icons-material/Delete';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import Cartitem from "../commons/Cart-item";

const carrito = () => {
    // const cartHandler = () => {
    //     usersRequests.post("/cart", {});
    //   };
   

    return (
    <Box>   
    <div class="caja-de-carrito">
       <div class="titulo-carrito">
        
           <h2>MI CARRITO</h2>
           </div>
          <div id="carrito-contenedor">
             
             <div class="botones">
             <Cartitem />
                   <Button style={{color:"black"}}>
                    <PlusOneIcon />
                   </Button>

                   <Button style={{color:"black"}}>
                   <DeleteIcon />
                   </Button>
               </div> 
           </div>
        
           
           <p class="precioProducto">Precio total: $<span id="precioTotal">0</span></p>
           

        <div>
        <Link to="/">
           <Button>
            Salir
            <LogoutIcon />
           </Button>
        </Link>

           <Button>
            Vaciar Carrito
            <DeleteSweepOutlinedIcon />
           </Button>

           <Button>
            Comprar
            <LocalMallIcon />
           </Button>
        </div>
       
   </div>
   </Box>
    
    )

};


export default carrito;

