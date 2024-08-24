import React from "react";
import About_UserClass from "./About_UserClass";
import AboutUserfun from "./AboutUserfun";

function About() {
  return (
    <>
      <h1>About</h1>
      <About_UserClass
        name="vaibhav sharma classy"
        nation="Indian"
        food="gajar ka halwa"
      />
      <AboutUserfun
        name="vaibhav shrma functional"
        nation="Indian"
        food="gajar ka halwa"
      />
    </>
  );
}

export default About;
