import React from 'react'
import Board from './Board'
import Result from './Result';
import { useSelector, useDispatch } from 'react-redux';
import "./Game.css"
import GameHistory from './GameHistory';
export default function Game() {
    const { turn } = useSelector(state => state);
    console.log(turn)
  return (
    <div className='board-container' >
        <div>
         <Result />
        <Board />
        </div>
        <GameHistory/>
    </div>
  )
}
