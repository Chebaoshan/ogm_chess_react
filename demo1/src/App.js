import './App.css';
import React, { Component } from 'react';
import Board from './components/Board';
import PlayerInfo from './components/PlayerInfo';
import History from './components/History';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      //棋盘上的棋子信息
      squares : new Array(9).fill(null),
      //步数
      stepCount : 0,
      //历史记录
      history : []
    }
  }


getCurrentPlayer(){
  const { stepCount } = this.state
  //根据步数，判断奇偶，确定棋手
  return stepCount%2 == 0 ? "X" : "O"
}

handleClickSquare = (pos, info) => {
  console.log(pos, info)
  if(info == null){
    const {history} = this.state;
    const newHistory = [
      ...history,
      {
        stepCount : this.state.stepCount,
        player:this.getCurrentPlayer(),
        pos:pos
      }
    ]

    this.setState({
      history : newHistory,
      stepCount : this.state.stepCount + 1,
      squares : this.calcSquare(newHistory, this.state.stepCount + 1)
    })
  }
}

calcSquare(history, stepCount){
  const newSquare = new Array(9).fill(null)
    for(let i = 0; i < stepCount; i++ ){
      let curHistory = history[i]
      newSquare[curHistory.pos] = curHistory.player
    }
  return newSquare
}

handleClickHistory(item){
  console.log(item)
}

  render(){
    const curPlayer = this.getCurrentPlayer();
    const { squares,history } = this.state
    return(
      <div className='App'>
        <div className='leftPanel'>
          <Board squares={squares} def={this.handleClickSquare}/>
        </div>
        <div className='rightPanel'>
          <PlayerInfo curPlayer={curPlayer}/>
          <History history={history} onClickHistory={this.handleClickHistory}/>
        </div>


      </div>



      )
  }
  
}

export default App;
