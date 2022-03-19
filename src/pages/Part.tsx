import { useParams } from "react-router-dom";
import C01Part03 from "./C01/P03/C01Part03";
import C01Part04 from "./C01/P04/C01Part04";
import C01Part05 from "./C01/P05/C01Part05";

const Part:React.VFC = () => {
    var params = useParams()
    
    return (
        <>
            <h2>Chapter {params.chapterId} </h2>
            <h3>Part {params.partId} </h3>
            {(params.chapterId === '1') && (params.partId === '3') && <C01Part03 />}
            {(params.chapterId === '1') && (params.partId === '4') && <C01Part04 />}
            {(params.chapterId === '1') && (params.partId === '5') && <C01Part05 />}
        </>
    )
}

export default Part;