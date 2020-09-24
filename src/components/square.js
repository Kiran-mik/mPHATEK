import React from 'react';
import '../index.css';

export default function Square(props) {
  // console.log('props.onClick',props.onClick);

  return (
    <button className={"square " + props.shade}
      onClick={props.onClick}
      style={props.style}
      key={props.keyVal}
    >
    </button>
  );

}
