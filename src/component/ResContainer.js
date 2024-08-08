import DynamicCard from "./DynamicCard";
import { restaurants } from "../utils/Restaurants";
import { useState } from "react";

let listofRestaurants = [];
const ResContainer = () => {
  let [state, setState] = useState(restaurants);
  return (
    <>
      <div className="content">
        <div className="searchbar">
          <button
            className="srchbtn"
            onClick={() => {
              const filteredList = restaurants.filter((res) => {
                return res.info.avgRating < 4;
              });
              let btn = document.querySelector(".srchbtn");
              btn.style.backgroundColor = "#FF5349"; 
              console.log(btn);   
              setState(filteredList);
              console.log(filteredList);
              console.log(listofRestaurants);
              console.log(restaurants);
              state = restaurants;
              console.log(state);
              
            }}
          >
            filter
          </button>
        </div>
        <div className="cardContent">
          {state.map((item) => (
            <DynamicCard props={item} key={item.info.parentId} />
          ))}
          {/* <DynamicCard props={resMadurai} /> */}
          {/* <Foodcard
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg"
            name="Jamba"
            cuisine="North-Indian,South-Indian,Chinese"
            rating="4.2"
          /> */}
        </div>
      </div>
    </>
  );
};

export default ResContainer;
