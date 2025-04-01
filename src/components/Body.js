import ResturantCard from "./ResturantCard";
import data from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(data);
  
  return (
    <div className="body">
      <div className="btns">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredData = data.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfResturant(filteredData);
            }}
          >
            Top-Rated Resturant
          </button>
        </div>

        <div className="refresh">
          <button
            className="refresh-btn"
            onClick={() => {
              setListOfResturant(data);
            }}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
