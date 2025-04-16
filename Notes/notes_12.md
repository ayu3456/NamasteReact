# All About Redux Toolkit. 
Redux offer state management. 
* Redux is not mandatory . Kam chal jayega bina redux ke bhi but aagar app large ho jaye to redux ka kam ata hai. 
* React and redux are different libraries. 

Redux handles data and manages the store. 

There are two libraries that redux offers.
1: React-redux (bridge between react and redux)
2: Redux Toolkit - RTK (standard way of redux)

# Architechture of Redux toolkit. 

This is the way to write data ->
* When we click on the add btn , it dispatches an action which calls the reducer function , this reducer function updates the slice of the redux store. 

Q: How to read data? 
* We will use a selector to read data from the store. cartSlice -> selector -> update the items.

* The cart-Slice is subscribed to the store thats any changes to the store updates the cart.

- Install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app. 
- Slice (cartSlice)
- dispatch(action)
- read the data using selector. 


Subscribe the right portion of the store 
useSelector((store) => store) aise bhi kam karega but specific portion ko subsribe karna hai



in older redux (vanilla) Don't mutate the state 
we used to create a copy of the state variable then modify the state

const newState = [...state]
newState.items.push(action.payload)
return newState


















