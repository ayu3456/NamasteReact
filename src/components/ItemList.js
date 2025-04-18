import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action

    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
        data-testid = 'foodItems'
          key={item.card.info.id}
          className="p-2 m-2 border-b-1 border-gray-300 text-left flex  justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>

              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="p-4 w-3/12">
            <div className="absolute">
              <button
                className="p-2 shadow-lg m-auto bg-black text-white rounded-lg cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
