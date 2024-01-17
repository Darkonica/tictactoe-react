import React, { MouseEvent } from 'react';
import './styles.scss';

type Props = {
  value: string | null;
  onClick: (value: MouseEvent) => void;
}

export const Square = ({value, onClick}: Props) => {
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  )
}