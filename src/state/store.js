import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import products from "./products";
import users from "./users";
import cart from "./cart";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products,
    users,
    cart
  },
});

export default store;
