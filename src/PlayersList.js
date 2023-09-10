import React from 'react'
import players from './players';
import Player from './Player';

export default function PlayersList() {
  return (
    <div>
     {
      
     players.players.map((ele,index) => {
      //console.log(ele)
     return <Player key={index} props={ele} />})   

     }  



    </div>
  )
}
