import { CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  //console.log(resData)

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-64 bg-slate-100 rounded-lg hover:bg-gray-200"
    >
      <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} star</h3>
      <h3>{deliveryTime} mins</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

// Higher order function it enhances the order component.

// input - resturant card => opened resturant card.

export const withOpenedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-md">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
