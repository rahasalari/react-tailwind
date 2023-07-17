import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/nameSlice";

const store = configureStore({
    reducer : {user : useReducer},
});

export default store;