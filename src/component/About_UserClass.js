import React from "react";

class About_UserClass extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="classComponent">
        <h2>{this.props.name}</h2>
        <h5>{this.props.nation}</h5>
        <h5>{this.props.food}</h5>
      
      </div>
    );
  }
}
export default About_UserClass;
