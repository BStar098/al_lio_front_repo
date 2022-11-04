// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from "axios";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Item/styles.css";


function Item() {
  //const [prenda, setPrenda] = useState({});
  //   const params = useParams();
  //   const id = params.id;

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((res) => res.data)
  //       .then((data) => {
  //         setPrenda(data);
  //       })
  //       .catch(() => console.error("No se encontró el producto"));
  //   }, []);

  let prenda = {
    name: "Remera Mockup",
    description: "Remera cuello redondo, tela 100% de algodón",
    imgFront:
      "https://img.freepik.com/psd-gratis/maqueta-vista-frontal-modelo-camiseta-negra_125540-1059.jpg?w=1380&t=st=1667417847~exp=1667418447~hmac=6b462698be6e5f34d702992e6108e90a75d3a938223b83801d31a9e6148b990f",
    price: 3600,
    size: ["S", "M", "L", "XL"],
    color: ["negro"],
    rating: 3,
  };

  return (
    <div>
      <div>
        <h1>{prenda.name}</h1>
      </div>
      <div>
        <div>
          <img className="fotoItem" src={`${prenda.imgFront}`} alt="Producto" />
        </div>
        <div>
          <p>Detalle: {prenda.description}</p>
          <p>Precio: ${prenda.price}</p>
          <p>Talle: {prenda.size}</p>
          <p>Color: {prenda.color}</p>
          <p>Rating: {prenda.rating}</p>
          <Button
            className="bottonCarrito"
            onClick={""}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
          >
            Agregar a al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
