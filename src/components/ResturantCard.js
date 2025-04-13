import { CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-64 bg-slate-100 rounded-lg hover:bg-gray-200">
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

export default ResturantCard;
