import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from "axios";
import {
  Button,
  Grid,
  Rating,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Item/styles.css";

function Item() {
  const [talle, setTalle] = useState("");
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
    description: "Remera cuello redondo con estampa",
    imgFront:
      "https://img.freepik.com/psd-gratis/maqueta-vista-frontal-modelo-camiseta-negra_125540-1059.jpg?w=1380&t=st=1667417847~exp=1667418447~hmac=6b462698be6e5f34d702992e6108e90a75d3a938223b83801d31a9e6148b990f",
    price: 5000,
    size: ["S", "M", "L", "XL"],
    color: ["negro"],
    rating: 3.5,
  };

  let reviews = [
    { rating: "5", comment: "Buena calidad" },
    {
      rating: "4",
      comment: "Tal cual la descripcion. Llego rapido",
    },
    { rating: "4", comment: "Estoy conforme con la compra" },
    { rating: "3", comment: "Todo ok!!" },
  ];

  let handleChange = (event) => {
    setTalle(event.target.value);
  };

  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="divCentrado">
              <img
                className="fotoItem"
                src={`${prenda.imgFront}`}
                alt="Producto"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="topDiv">
              <h1>{prenda.name}</h1>
              <p>
                <Rating
                  name="read-only"
                  value={prenda.rating}
                  precision={0.5}
                  readOnly
                />
              </p>
              <p>Detalle: {prenda.description}</p>
              <p>Color: {prenda.color}</p>

              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-label">Talle:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={talle}
                  label="Age"
                  onChange={handleChange}
                >
                  {prenda.size.map((talle, i) => (
                    <MenuItem key={i} value={talle}>
                      {talle}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <p style={{ fontSize: "1.5rem" }}>Precio: ${prenda.price}</p>
              <Button
                onClick={""}
                startIcon={<AddShoppingCartIcon />}
                style={{
                  backgroundColor: "#ead7c3",
                  color: "black",
                  fontFamily: "Canaro",
                }}
              >
                Agregar al carrito
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="divReviews">
        <h4>Comentarios de compradores:</h4>
        {reviews.map((review, i) => (
          <div key={i} className="divReview">
            <Rating name="read-only" value={review.rating} readOnly />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
