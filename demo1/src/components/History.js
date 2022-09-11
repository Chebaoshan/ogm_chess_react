import React, { Component } from 'react';
import './History.css'

class History extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  handleClick(item){
    const {onClickHistory} = this.props
    if(onClickHistory){
        onClickHistory(item)
    }
  }


  getHistory(item, index){
    return (
        <li key={index}>
            <button onClick = {this.handleClick.bind(this, item)}>
            第一步{item.stepCount}：玩家 {item.player} 下的是 {item.pos}
            </button>
        </li>
    )
  }



  render(){
    const { history } = this.props
    return(
        <div className='history'>
            {history.map((item, index) => this.getHistory(item, index))}

        </div>
      )
  }
  
}

export default History;
