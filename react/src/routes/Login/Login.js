import { Link } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { USER_NAME, getAction } from "../../redux/actions/actions";
class Login extends Component {
  handleClick = (e) => {
    this.props.makeUserName(e.target.value);
  };

  render() {
    return (
      <div style={style}>
        <input
          onChange={this.handleClick}
          placeholder="what's your name"
        ></input>
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
const mapDispatchToProps = (dispatch) => {
  return {
    makeUserName: (param1) => dispatch(getAction(USER_NAME, param1, null)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
