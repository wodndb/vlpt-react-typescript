import { useParams } from "react-router-dom";
import Example01 from "./Example01";
import Example02 from "./Example02";
import Example03 from "./Example03";
import Example04 from "./Example04";

const C01P05Example:React.VFC = () => {
  const params = useParams();
  return (
    <>
      {(params.exampleId === '1') && <Example01 />}
      {(params.exampleId === '2') && <Example02 />}
      {(params.exampleId === '3') && <Example03 />}
      {(params.exampleId === '4') && <Example04 />}
    </>
  )
}

export default C01P05Example;