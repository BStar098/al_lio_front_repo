import { useEffect, useState } from "react";
import { getOneProduct } from "../state/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  Button,
  Grid,
  Rating,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Item/styles.css";

function Item() {
  const [talle, setTalle] = useState("");
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const clothes = useSelector((state) => state.products.oneProduct);
  useEffect(() => {
    dispatch(getOneProduct(id)).then(() => {
      console.log(clothes);
    });
  }, [id]);

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

  let handleCarrito = () => {};

  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="divCentrado">
              <img
                className="fotoItem"
                src={`${clothes.img[0]}`}
                alt="Producto"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="topDiv">
              <h1>{clothes.name}</h1>
              <p>
                <Rating
                  name="read-only"
                  value={clothes.rating}
                  precision={0.5}
                  readOnly
                />
              </p>
              <p>Detalle: {clothes.description}</p>
              <p>Color: {clothes.colour}</p>

              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-label">Talle:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={talle}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={clothes.size}>{clothes.size}</MenuItem>
                </Select>
              </FormControl>

              <p style={{ fontSize: "1.5rem" }}>Precio: ${clothes.price}</p>
              <Button
                onClick={handleCarrito}
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
