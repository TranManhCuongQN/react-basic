import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  };
  return <div onClick={handleIncrement}>Increment {counter}</div>;
};

export default Counter;
