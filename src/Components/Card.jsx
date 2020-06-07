import React from "react";
import Title from "./Title";

class Card extends React.Component {
  state = {
    value: 1
  };

  render() {
    function click() {
      console.log("Hello");
    }
    return (
      <div className="header">
        <Title value={this.state.value} click={click} />
      </div>
    );
  }
}

export default Card;
