import { Box } from "@mui/system"
//import { usersRequests } from "../state/users";
//import clothesArray from "../utils/dummyClothes"


//let carritoDecompra = []


const carrito = () => {
    // const cartHandler = () => {
    //     usersRequests.post("/cart", {});
    //   };
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
        </div>
       </Box>
    )
};


// clothesArray.forEach((producto) => {
//     const div = document.createElement('div')
//     div.classList.add('producto')
//     div.innerHTML = `
//     <img src=${producto.imgFront} alt= "">
//     <h3>${producto.name}</h3>
//     <p>${producto.description}</p>
//     <p>Talle: ${producto.size}</p>
//     <p class="precioProducto">Precio:$ ${producto.price}</p>
//     <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>`
// };

export default carrito;
