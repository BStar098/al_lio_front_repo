import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import products from "./products"


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products,
  },
});

export default store;
