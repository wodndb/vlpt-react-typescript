import { useState } from "react";

const Counter3: React.VFC = () => {
  const [number, setNumber] = useState(0);

  // React.MouseEventHandler<HTMLButtonElement>
  const onIncrease = () => {
    setNumber(number + 1);
  }

  // React.MouseEventHandler<HTMLButtonElement>
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter3;