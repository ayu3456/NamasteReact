import data from "../../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useState } from "react"; // import like a named import.

const Body = () => {
  // Local State Variable - Some powerful Variable (Hooks)
  const [listOfResturants, setListOfResturants] = useState(data);

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
              setListOfResturants(filteredData)
            }}
          >
            Top-Rated Resturant
          </button>
        </div>

        <div className="refresh">
          <button className="refresh-btn" onClick={()=>{
            setListOfResturants(data)
          }}>Refresh</button>
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
