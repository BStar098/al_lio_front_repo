import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "GET_ALL_PRODUCTS",
  (args, thunkAPI) => {
    return axios
      .get("http://localhost:3001/api/products")
      .then((clothesArray) => clothesArray.data)
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      });
  }
);
export const getOneProduct = createAsyncThunk(
  "GET_ONE_PRODUCT",
  (id, thunkAPI) => {
    return axios
      .get(`/${id}`)
      .then((product) => product.data)
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      });
  }
);

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
