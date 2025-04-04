import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react"; // import like a named import.
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5696139&lng=73.90401609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);

    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(listOfResturants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btns">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //console.log(listOfResturants);
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
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

      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
