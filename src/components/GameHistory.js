import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function GameHistory() {
    const {gameHistory} = useSelector(state => state);
    console.log(gameHistory,"gameHistory")
    const navigate = useNavigate();

  return (
    <div className="history-screen">
      <button  className="button" onClick={() => navigate('/')}>Back</button>
      <h1>Game History</h1>
      <ul>
        {gameHistory?.map((game, idx) => (
          <li key={idx}>{`Game result: ${game}`}</li>
        ))}
      </ul>
    </div>
  )
}
