import { useEffect, useState } from "react";
import { getOneProduct } from "../state/products";
import { createReview, getAllReviews } from "../state/reviews";
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
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const [talle, setTalle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null)

  const clothes = useSelector(state => state.products.oneProduct);
  const reviews = useSelector(state => state.reviews.reviews);
  const user = useSelector(state => state.users.userData);

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getAllReviews(id));
  }, [id]);

  let handleChange = event => {
    setTalle(event.target.value);
  };

  const inputHandler = e => {
    setComment(e.target.value);
  };

  const ratingHandler = (e, newValue) => {
    setRating(newValue);
  }

  const handleReview = () => {
    dispatch(createReview({userId:user.id, productId:id, comments:comment, rating:rating}));
  };

  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="divCentrado">
              <img
                className="fotoItem"
                src={clothes.img ? `${clothes.img[0]}` : ""}
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
                onClick={addCarrito}
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
            <p>{review.comments}</p>
          </div>
        ))}
      </div>
      {user.name ? (
        <div className="formContainer">
          <h2 className="addProductTitle">Opinar sobre este producto</h2>
          <div className="inputsContainer">
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={ratingHandler}
            />
            <textarea
              onChange={inputHandler}
              id="description"
              placeholder={`Comentanos tu opinion sobre la prenda `}
            ></textarea>
            <button onClick={handleReview}>ENVIAR</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Item;
