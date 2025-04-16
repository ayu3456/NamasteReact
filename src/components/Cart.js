import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // subscribe the right portion of the store
  //useSelector((store) => store) aise bhi kam karega but specific portion ko subsribe karna hai

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="m-4 p-4 font-bold text-center text-2xl">
      <h1>Cart Page</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 text-white rounded-md bg-neutral-400"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && <h1>Cart is Empty... </h1>}



        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
