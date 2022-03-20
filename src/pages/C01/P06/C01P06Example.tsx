import { useParams } from "react-router-dom";
import Example01 from "./Example01";

const C01P06Example: React.VFC = () => {
  const params = useParams();
  return (
    <>
      {(params.exampleId === "1") && <Example01 />}
      {(params.exampleId === "2") && <Example01 />}
    </>
  )
}

export default C01P06Example;