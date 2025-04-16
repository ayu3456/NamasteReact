import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);

    }, // it modifies the state based on the action.
    // we have to mutate the state now. 
    

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      //state.items.length == 0;
      state.items = []
    },
  },
});



export default cartSlice.reducer
export  const {addItem,removeItem,clearCart} = cartSlice.actions
