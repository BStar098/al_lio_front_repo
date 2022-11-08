import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  products: [],
};


export const productsRequests = axios.create({
  baseURL: "http://localhost:3001/api/products",
});

export const getAllProducts = createAsyncThunk("GET_ALL_PRODUCTS", () => {
  return productsRequests
    .get("/")
    .then((clothesArray) => clothesArray.data)
    .catch((error) => {
      throw new Error(error.message);
    });
});
export const getOneProduct = createAsyncThunk("GET_ONE_PRODUCT", (id) => {
  return productsRequests
    .get(`/${id}`)
    .then((product) => product.data)
    .catch((error) => {
      throw new Error(error.message);
    });
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
    },
    [getOneProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getOneProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getOneProduct.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productsSlice.reducer;
