import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";

// Chapter 01 | Part 06 | Ex 2 - props 값을 생략하면 ={true}
const Example02: React.VFC = () => {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  )
}

export default Example02;