import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useResturantMenu";

const RecturantMenu = () => {
  const { resId } = useParams(); 
  const resInfo = useResturantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>

      <ul>
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li key={info.id}>
              {info.name} - ₹{(info.defaultPrice ?? info.price) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecturantMenu;

