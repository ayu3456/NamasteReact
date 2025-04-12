// import ResturantCard from "./ResturantCard";
// import { useEffect, useState } from "react"; // import like a named import.
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";

// const Body = () => {
//   const [listOfResturants, setListOfResturants] = useState([]);
//   const [filteredResturant, setFilteredResturant] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5696139&lng=73.90401609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();

//     //console.log(json);

//     setListOfResturants(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredResturant(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     //console.log(listOfResturants);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false) return <h1>No Internet Connnection.</h1>;

//   return (
//     <div className="body">
//       <div className="btns">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               //console.log(listOfResturants);
//               const filteredResturant = listOfResturants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               setFilteredResturant(filteredResturant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="filter">
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filteredData = listOfResturants.filter(
//                 (res) => res.info.avgRating > 4.5
//               );
//               setFilteredResturant(filteredData);
//             }}
//           >
//             Top-Rated Resturant
//           </button>
//         </div>
//       </div>

//       <div className="res-container">
//         {filteredResturant.map((resturant) => (
//           <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
//             <ResturantCard resData={resturant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5696139&lng=73.90401609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
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

  return (
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
        {filteredResturant?.length > 0 ? (
          filteredResturant.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
            >
              <ResturantCard resData={resturant} />
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

