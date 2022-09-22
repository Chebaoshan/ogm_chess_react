import React, { Component } from 'react';
import './style.css'


class Square extends Component {
  state = {}
  
  getSquareTitle(){
    const {pos, info} = this.props
    return info ? info : "";
  }

  handleClick = () => {
    const {pos, info} = this.props
    if(this.props.abc){
        this.props.abc(pos, info)
    }
  }

  render(){
    return(
        <div className='square' onClick={this.handleClick}>
            {this.getSquareTitle()}
        </div>
      )
  }
  
}

export default Square;
