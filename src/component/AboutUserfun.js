import React from "react";

function AboutUserfun(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h5>{props.nation}</h5>
      <h5>{props.food}</h5>
    </div>
  );
}

export default AboutUserfun;
