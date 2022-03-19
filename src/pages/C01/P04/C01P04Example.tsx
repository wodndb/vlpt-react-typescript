import { useParams } from "react-router-dom";
import Example01 from "./Example01";
import Example02 from "./Example02";
import Example03 from "./Example03";
import Example04 from "./Example04";
import Example05 from "./Example05";

// Chapter 01 | Part 04 | Ex 2- 꼭 감싸져야 하는 태그
const C01P04Example: React.VFC = () => {
  const params = useParams();
  
  return (
    <>
      {(params.exampleId === '1') && <Example01 />}
      {(params.exampleId === '2') && <Example02 />}
      {(params.exampleId === '3') && <Example03 />}
      {(params.exampleId === '4') && <Example04 />}
      {(params.exampleId === '5') && <Example05 />}
    </>
  );
};

export default C01P04Example;
