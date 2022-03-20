import Hello3 from "./components/Hello3";
import Wrapper from "./components/Wrapper";

const Example04:React.VFC = () => {
  return (
    <Wrapper>
      <Hello3 name="react" color="red" />
      <Hello3 color="pink" />
    </Wrapper>
  )
}

export default Example04;