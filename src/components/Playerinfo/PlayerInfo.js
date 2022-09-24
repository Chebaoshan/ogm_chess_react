import React, { Component } from "react";

class PlayerInfo extends Component {
  render() {
    return <div style={style}>PLAYERINFO : {this.props.curPlayer}</div>;
  }
}
const style = {
  fontSize: "20px",
  fontWeight: "bolder",
};
export default PlayerInfo;
