import React, { Component, Fragment } from "react";

class PlayerInfo extends Component {
  render() {
    return (
      <Fragment>
        <div style={style}>即将下的棋子是:{this.props.curPlayer}</div>
        <div>你好！{this.props.username}</div>
      </Fragment>
    );
  }
}
const style = {
  fontSize: "20px",
  fontWeight: "bolder",
};
export default PlayerInfo;
