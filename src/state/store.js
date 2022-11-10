import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import products from "./products";
import users from "./users";
import reviews from "./reviews";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products,
    users,
    reviews
  },
});

export default store;
