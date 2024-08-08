import { swiggyUrl } from "../utils/constants";

const DynamicCard = (resInfo) => {
  let { props } = resInfo;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props?.info;

  return (
    <>
      <div className="card">
        <div className="container">
          <img
            className="cardimage cardpart"
            alt="food item"
            src={swiggyUrl + cloudinaryImageId}
          ></img>
          <p className="bottom-left">20% off!!!</p>
        </div>
        <h2 className="resname cardpart">{name}</h2>
        <p className="cardcuisine cardpart">{cuisines.join(", ")}</p>
        <ul className="profile">
          <li className="rating">
            <span className="fa fa-star checked"></span>
          </li>
          {avgRating}
          <li>{props.info.sla.slaString}</li>
          <li>{costForTwo}</li>
        </ul>
      </div>
    </>
  );
};

export default DynamicCard;
