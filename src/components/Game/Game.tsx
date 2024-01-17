import React, { useState } from 'react';
import { Board } from '../Board';

export const Game = () => {
  // const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleMove = (nextSquares) => {
    const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);
  }

  const jumpToMove = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const getHistory = () => {
    return history.map((item, index) => <li key={item.toString()}><button onClick={() => jumpToMove(index)}>{index}</button></li>);
  } 

  return (
    <div className="game-cont">
      <div className="game-board">
        <Board
          squares={currentSquares}
          onMove={handleMove}
          isXNext={isXNext}
        />
      </div>
      <div className="game-info">
        <ol>{getHistory()}</ol>
      </div>
    </div>
  )
}