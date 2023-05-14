import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
    return (
      
        <div className="body">
          <div className="search">Search</div>
          <div className="res-container">
             { //looping the data
              resList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
              ))}
          </div>
        </div>
    );
  };

  export default Body;