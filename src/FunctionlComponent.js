import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./component/Header";
import ResContainer from "./component/ResContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {
  return (
    <>
      <div className="App-Layout">
        <Header />
        <ResContainer />
      </div>
    </>
  );
};

root.render(<App />);


// const Foodcard = (props) => {
//   return (
//     <>
//       <div className="card">
//         <img
//           className="cardimage cardpart"
//           alt="fooditem"
//           src={props.src}
//         ></img>
//         <h2 className="resname cardpart">{props.name}</h2>
//         <p className="cardcuisine cardpart">{props.cuisine}</p>
//         <ul className="profile">
//           <li className="rating">
//             <span className="fa fa-star checked"></span>
//           </li>
//           {props.rating}
//           <li>27 min</li>
//           <li>500 for two</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// let imageId = props.info.cloudinaryImageId;

// const guide = <p>top right to navigate.</p>;
    
    // const Title = () => {
    //   return (
    //     <>
    //       <h1 id="heading">This is about React !</h1>
    //       {guide}
    //     </>
    //   );
    // };
    // const Heading = () => {
    //   return (
    //     <>
    //       <Title />
    //       <p>
    //         hello its the react which makes the develpoer life easy by its easy
    //         syntax which is possible becasue of jsx , also the differenet
    //         capabilities in react provided by the different bundelr.
    //       </p>
    //     </>
    //   );
    // };
    
    // const element = (
    //   <>
    //     <h4>i am react element.</h4>
    //   </>
    // );
    
    // const display = (
    //   <>
    //     <Heading />
    //     {element}
    //   </>
    // );