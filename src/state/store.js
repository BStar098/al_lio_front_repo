import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import products from "./products";
import users from "./users";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products,
    users,
  },
});

export default store;
