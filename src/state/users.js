import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  userData: {},
};

export const signUp = createAsyncThunk("SIGN_UP", (userData, thunkAPI) => {
  return axios
    .post("http://localhost:3001/api/users/register", userData)
    .then((createdUser) => createdUser.data)
    .catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    });
});
export const logIn = createAsyncThunk("LOG_IN", (userData, thunkAPI) => {
  return axios
    .post("http://localhost:3001/api/users/login", userData)
    .then((loggedInUser) => loggedInUser.data)
    .catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    });
});
export const logOut = createAsyncThunk("LOG_OUT", (args, thunkAPI) => {
  return axios
    .post("http://localhost:3001/api/users/logout")
    .then(() => "logged out succesfully")
    .catch((error) => {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    [signUp.rejected]: (state) => {
      state.isLoading = false;
    },
    [logIn.pending]: (state) => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      localStorage.setItem("loggedInUser", JSON.parse(action.payload));
      state.userData = action.payload;
    },
    [logIn.rejected]: (state) => {
      state.isLoading = false;
    },
    [logOut.pending]: (state) => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(action.payload);
      localStorage.clear();
      state.userData = {};
    },
    [logOut.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
