import { Link } from "react-router-dom";
import { Component } from "react";
class Login extends Component {
  render() {
    return (
      <div style={style}>
        <input placeholder="what's your name"></input>
        <button>
          <Link to="/game">click me to play</Link>
        </button>
      </div>
    );
  }
}
const style = {
  display: "flex",
  justifyContent: "center",
};
export default Login;
