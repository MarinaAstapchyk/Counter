import React from 'react';

const Counter3 = (props) => {
  return (
    <div>
      <hr/>
      <button onClick={props.addCounter}>Add counter</button>

      <ul>
        {props.numbers.map((el, i) =>
          <li key={i}>
            <button onClick={() => props.changeNumbers(i, -3)}>-3</button>
            <button onClick={() => props.changeNumbers(i, -2)}>-2</button>
            <button onClick={() => props.changeNumbers(i, -1)}>-1</button>
            {' '} {el} {' '}
            <button onClick={() => props.changeNumbers(i, 1)}>+1</button>
            <button onClick={() => props.changeNumbers(i, 2)}>+2</button>
            <button onClick={() => props.changeNumbers(i, 3)}>+3</button>
            <button onClick={() => props.del(i)}>Delete</button>
            <button onClick={() => props.reset(i)}>Reset</button>
          </li>)}
      </ul>
      
    </div>
  );
};

export default Counter3;