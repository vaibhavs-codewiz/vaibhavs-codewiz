import React from "react";
import { Shimmer } from "./Shimmer";
import { useEffect, useState } from "react";
import itemCards from "../utils/act_as_restrauMenu";
import { MenuApi } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantsMenu() {
  let [Dishes, setDishes] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  //let resId = "92511&submitAction=ENTER";
  let items = [];
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    let callMenu = () => {
      for (let i = 0; i < itemCards.length; i++) {
        items.push(itemCards[i].card.info.name);
      }
      setDishes(items);
    };
    setTimeout(() => callMenu(), 1000);
  }, []);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MenuApi + "92511&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data);
   // console.log(json.data);
   // console.log(resInfo.cards[2].card.card.info.name);
  };

  return Dishes === null ? (
    <Shimmer />
  ) : (
    <>
      <h2>Menu:</h2>
      <h1>{}</h1>
      <ul>
        {Dishes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default RestaurantsMenu;
