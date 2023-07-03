
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {

   //it is just declaring a stare variable 
    const [listofRestrautants, setListofRestrautant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    //search bar value 
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448869999999&page_type=DESKTOP_WEB_LISTING");
      
      //converting data recived from api into json 
      const json = await data.json();
     // console.log(json);
      setListofRestrautant(json?.data?.cards[2]?.data?.data?.cards); //optional chaining to not get short ckt but get undefined if wrong
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    const onlineStatus = useOnlineStatus(); //custom hook

    if(onlineStatus === false) return <h1>Looks like you are offline!! Please check you internet connection</h1>
   
    //ternary operator for implementing conditional rendering, when no data to shimmer after fetching return the real component
    return listofRestrautants.length === 0 ? <Shimmer/> : ( 
        <div className="body">
          <div className="filter">

           <div className="search">
           <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}  />
           <button onClick={() => {
               const filteredRestaurant = listofRestrautants.filter((res) =>
               res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()) 
               );
               
               setFilteredRestaurant(filteredRestaurant);
           }}>Search</button>
           </div>
        
             <button 
             className="filter-btn" 
             onClick={() => {
                const filteredList = listofRestrautants.filter(
                  (res) => res.data.avgRating > 4 
                );               
               setFilteredRestaurant(filteredList);
            }} 
            >
              Top Rated Restrauants
              </button> 
          </div>

          <div className="res-container">
             { //looping the data
              filteredRestaurant.map((restaurant) => (
              
                <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}><RestaurantCard  resData={restaurant}/> </Link>
              ))}
          </div>
        </div>
    );
  };
  
  export default Body;