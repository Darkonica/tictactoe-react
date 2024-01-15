import React from 'react';
import './styles.scss';

type Props = {
  value?: number
}

export const Square = ({ value }: Props) => {
  const handleClick = () => {
    console.log("click!");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}