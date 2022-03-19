import Hello from "./components/Hello";

// Chapter 01 | Part 04 | Ex 03 - JSX 안에 자바스크립트 값 사용하기
const Example03: React.VFC = () => {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  )
}

export default Example03;