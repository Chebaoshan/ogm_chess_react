import React, { Component } from 'react';
import './PlayerInfo.css'


class PlayerInfo extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    const { curPlayer } = this.props
    return(
        <div className='playerInfo'>
            PLAYERINFO : {curPlayer}

        </div>
      )
  }
  
}

export default PlayerInfo;
