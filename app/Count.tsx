import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={counter}>click</button>
    </div>
  );
};

export default Count;
