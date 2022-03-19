import { useParams } from "react-router-dom";
import { Chapter01 } from "./C01/Chapter01";

export const Chapter: React.VFC = () => {
    const params = useParams();
    return (
        <>
            { (params.chapterId === '1') && <Chapter01 /> }
            { (params.chapterId !== '1') && <h2>Chapter: {params.chapterId}</h2> }
        </>
    )
}

export default Chapter;