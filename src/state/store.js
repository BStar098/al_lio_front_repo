import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user";
import { reducer as productsReducer } from "./products";
import logger from "redux-logger";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
