import DynamicCard from "./DynamicCard";
import { useState, useEffect } from "react";
import { json } from "../utils/act_as_fetch";
import { Shimmer } from "./Shimmer";

const ResContainer = () => {
  let [state, setState] = useState([]);
  let [srchtxt, setSrchtxt] = useState("");
  let [srchList, setsrchList] = useState([]);

  let fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615"
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    let takeTime = () =>
      setState(json.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
    setsrchList(
      json.cards[3].gridWidget.gridElements.infoWithStyle.restaurants
    );
    fetchData();
    setTimeout(takeTime, 1000);
  }, []);

  // useEffect(()=>{
  //    fetchData();
  // },[])
  //};
  return state.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="content">
        <div className="searchbar">
          <button
            className="srchbtn"
            onClick={() => {
              const filteredList = state.filter((res) => {
                return res.info.avgRating > 4;
              });
              let btn = document.querySelector(".srchbtn");
              setsrchList(filteredList);
            }}
          >
            filter
          </button>
          <input
            type="text"
            placeholder="restaurant name..."
            className="srchbtn"
            id="text_field"
            style={{ marginLeft: 10, marginRight: 5 }}
            value={srchtxt}
            onChange={(e) => setSrchtxt(e.target.value)}
          ></input>
          <button
            className="srchbtn"
            onClick={() => {
              let inputsrchList = state.filter((item) =>
                item.info.name.toLowerCase().includes(srchtxt.toLowerCase())
              );
              setsrchList(inputsrchList);
              console.log(state);
              console.log(srchtxt);
            }}
          >
            search
          </button>
        </div>
        <div className="cardContent">
          {srchList.map((item) => (
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
