import React, { Component } from 'react';
import Square from '../Square/Square';


class Board extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  makeSquare(pos){
    const { squares } = this.props
        return (
            <Square pos={pos} info={squares[pos]} abc={this.props.def}/>
        )
    }

  render(){
    return(
       <div className='board'>
            <div className='row'>
                {/* <Square></Square> */}
                {this.makeSquare(0)}
                {this.makeSquare(1)}
                {this.makeSquare(2)}
            </div>
            <div className='row'>
                {this.makeSquare(3)}
                {this.makeSquare(4)}
                {this.makeSquare(5)}
            </div>
            <div className='row'>
                {this.makeSquare(6)}
                {this.makeSquare(7)}
                {this.makeSquare(8)}
            </div>
       </div>
      )
  }
  
}

export default Board;
