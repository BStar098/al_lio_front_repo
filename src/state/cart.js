import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  cart: [],
};

export const cartRequests = axios.create({
  baseURL: "http://localhost:3001/api/cart",
});

export const addProductToCart = createAsyncThunk(
  "ADD_TO_CART",
  (itemAndUserData) => {
    return cartRequests
      .post("/", itemAndUserData)
      .then((cart) => cart.data)
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const removeProductFromCart = createAsyncThunk(
  "REMOVE_FROM_CART",
  (productIdAndUserId) => {
    return cartRequests
      .delete("/", productIdAndUserId)
      .then(() => "Removed successfully!")
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
export const updateQuantityFromCart = createAsyncThunk(
  "UPDATE_CART_QUANTITY",
  (userItemAndQuantity) => {
    return cartRequests
      .put("/", userItemAndQuantity)
      .then((product) => product.data)
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

const productsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [addProductToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addProductToCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    [addProductToCart.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeProductFromCart.pending]: (state) => {
      state.isLoading = true;
    },
    [removeProductFromCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(action.payload);
    },
    [removeProductFromCart.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateQuantityFromCart.pending]: (state) => {
      state.isLoading = true;
    },
    [updateQuantityFromCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    [updateQuantityFromCart.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productsSlice.reducer;
