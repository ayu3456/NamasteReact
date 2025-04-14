import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const RecturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards || [];

  //console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category,index) => (
        <ResturantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RecturantMenu;
