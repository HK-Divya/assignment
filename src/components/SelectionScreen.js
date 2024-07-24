import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPlayer } from '../actions/actions';
import "./Game.css";
export default function SelectionScreen() {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSelection = (player) => {
        setSelectedPlayer(player);
        dispatch(setPlayer(player));
        navigate('/game');
      };
  return (
    <div className="selection-screen">
    
      <button className="button" onClick={() => navigate('/history')}>History</button>
     
      <div>
      <h1>Select X or O</h1>
      <button className="button" onClick={() => handleSelection('x')}>X</button>
      <button className="button" onClick={() => handleSelection('o')}>O</button>
      </div>
    </div>
  )
}
