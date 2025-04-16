import { createSlice } from "@reduxjs/toolkit";

// learn how to create a immutatable copy properly.
// deep clone kaise karenge.

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
      //state.items = [];
      return {items: []} // ye kam karega

      //state = ["biryani"]; // this state is a local variable , it wont change state globally.
      // orinial is different.
      // this wont work because u are not actually mutating the state. you are only changing the referece of it.
      //RTK return the new state or mutate the state. 

    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
