import ResturantCard, { withOpenedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardOpened = withOpenedLabel(ResturantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5696139&lng=73.90401609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setListOfResturants(restaurants);
        setFilteredResturant(restaurants);
      }
    } catch (err) {
      console.error("Failed to fetch restaurant list:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>No Internet Connection.</h1>;

  if (!listOfResturants.length) return <Shimmer />;

  console.log(listOfResturants);

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black text-2xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-200 rounded-lg m-4 py-2"
            onClick={() => {
              const filtered = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="px-4 bg-green-200 rounded-lg m-4 py-2"
            onClick={() => {
              const filteredData = listOfResturants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredResturant(filteredData);
            }}
          >
            Top-Rated Resturant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredResturant?.length > 0 ? (
          filteredResturant.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
            >
              {
                /** if the resturant is opened u have to display opened here. */

                resturant.info.isOpen ? (
                  <ResturantCardOpened resData={resturant} />
                ) : (
                  <ResturantCard resData={resturant} />
                )
              }
            </Link>
          ))
        ) : (
          <h2>No restaurants found</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
