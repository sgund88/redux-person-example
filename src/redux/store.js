import allReducers from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: allReducers });

export default store;
