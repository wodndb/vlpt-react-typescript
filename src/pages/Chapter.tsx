import { useParams } from "react-router-dom";
import { Chapter01 } from "./C01/Chapter01";
import Chapter03 from "./C03/Chapter03";

export const Chapter: React.VFC = () => {
    const params = useParams();
    return (
        <>
            { (params.chapterId === '1') && <Chapter01 /> }
            { (params.chapterId === '3') && <Chapter03 /> }
        </>
    )
}

export default Chapter;