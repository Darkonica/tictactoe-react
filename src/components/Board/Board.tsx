import React from 'react';
import { Square } from '../Square';
import './styles.scss';

// TODO: add prop types
export const Board = ({ isXNext, squares, onMove }) => {

  const calculateWinner = () => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerLines.length; i++) {
      const [first, second, third] = winnerLines[i];
      if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
        return squares[first];
      }
    }
  }

  const handleClick = (num: number) => {
    if (squares[num] || calculateWinner()) return;

    const updatedSquares = [...squares];

    updatedSquares[num] = isXNext ? 'X' : 'O';

    onMove(updatedSquares);
  }

  const getCurrentGameStatus = () => {
    const winner = calculateWinner();
    let statusText = '';

    if (winner) {
      statusText = `Winner is: ${winner}`;
    } else {
      statusText = `Next player: ${isXNext ? "X" : "O"}`;
    }
    
    return <div className="status">{statusText}</div>;
  }

  return (
    <div className='board'>
     
      {getCurrentGameStatus()}
      
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      {/* TODO: make this button works */}
      {calculateWinner() && (
        <div className="new-game-cont">
          <button>New game</button>
        </div>
      )}
    </div>
  );
}