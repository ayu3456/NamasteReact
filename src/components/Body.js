import ResturantCard from "./ResturantCard";
import data from "../../utils/mockData";


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {data.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  } 

export default Body; 

