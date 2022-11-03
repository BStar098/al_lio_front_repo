import { createAction, createReducer } from "@reduxjs/toolkit";

const initialUserState = {};

export const setUser = createAction("SIGN_UP");
export const logOutUser = createAction("LOG_OUT");
export const setAdmin = createAction("SET_ADMIN");

export const reducer = createReducer(initialUserState, {
  [setUser]: (state, action) => {
    state = action.payload;
    localStorage.setItem("user", JSON.stringify(action.payload));
  },
  [logOutUser]: (state, action) => {
    state = initialUserState;
    localStorage.clear();
  },
  [setAdmin]: (state, action) => {
    const isOwner = JSON.parse(localStorage.getItem("user")).type;
    if (isOwner === "owner") {
      action.payload.type = "admin";
      return action.payload;
    }
  },
});
