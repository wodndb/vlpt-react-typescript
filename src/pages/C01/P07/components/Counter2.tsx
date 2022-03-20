
const Counter2: React.VFC = () => {

  // React.MouseEventHandler<HTMLButtonElement>
  const onIncrease = () => {
    console.log('+1');
  }

  // React.MouseEventHandler<HTMLButtonElement>
  const onDecrease = () => {
    console.log('-1');
  }

  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter2;