
import GrayBox from "./components/GrayBox";
import Hello from "./components/Hello";
import NameStyle from "./components/NameStyle";

// Chapter 01 | Part 04 | Ex 04 - style과 className
const Example04:React.FC = () =>{
  const name = 'react!';
  return (
    <>
      <Hello />
      <NameStyle>{name}</NameStyle>
      <GrayBox />
    </>
  )
}



export default Example04;