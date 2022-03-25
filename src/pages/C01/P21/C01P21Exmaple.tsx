import { useParams } from "react-router-dom";
import Example01 from "./Example01";

const C01P21Example:React.VFC = () => {
  const param = useParams();
  return (
    <>
      {(param.exampleId === '1') && <Example01 />}
    </>
  )
}

export default C01P21Example;