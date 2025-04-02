import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react"; // import like a named import.
import Shimmer from "./Shimmer";


const Body = () => {
  // Local State Variable - Some powerful Variable (Hooks)
  const [listOfResturants, setListOfResturants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5696139&lng=73.90401609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  if (listOfResturants.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="btns">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredData = listOfResturants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfResturants(filteredData);
            }}
          >
            Top-Rated Resturant
          </button>
        </div>

      </div>

      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
