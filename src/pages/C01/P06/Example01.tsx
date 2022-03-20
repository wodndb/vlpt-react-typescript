import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";

// Chapter 01 | Part 06 | Ex 1 - 조건부 렌더링
const Example01:React.VFC = () => {
    return (
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true} />
          <Hello color="pink" />
        </Wrapper>
      )
}

export default Example01;