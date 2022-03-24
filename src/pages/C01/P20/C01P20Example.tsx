import { useParams } from "react-router-dom";
import Example01 from "./Example01";
import Example02 from "./Example02";

const C01P20Examples: React.VFC = () => {
    const params = useParams();
    return (
        <>
            {(params.exampleId === '1') && <Example01 />}
            {(params.exampleId === '2') && <Example02 />}
        </>
    )
}

export default C01P20Examples;