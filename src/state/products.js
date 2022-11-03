import { createAction, createReducer } from "@reduxjs/toolkit";

const initialProductsState = [];

export const setAllProducts = createAction("SET_ALL_PRODUCTS");
export const setOneProduct = createAction("SET_ONE_PRODUCT");

export const reducer = createReducer(initialProductsState, {
  [setAllProducts]: (state, action) => (state = action.payload),
  [setOneProduct]: (state, action) => (state = action.payload),
});
