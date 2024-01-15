import React from 'react';
import { Square } from '../Square';
import './styles.scss';

export const Board = () => {
  return (
    <div className='board'>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}