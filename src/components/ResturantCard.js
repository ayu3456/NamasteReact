import { CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} star</h3>
      <h3>{deliveryTime} mins</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default ResturantCard;
