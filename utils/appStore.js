import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
}); // aise store banate hai . add slices to it.


//console.log(appStore);

// we need to provide this store to the app.

export default appStore;
