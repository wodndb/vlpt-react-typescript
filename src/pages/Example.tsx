import { useParams } from "react-router-dom";
import C01P03Example from "./C01/P03/C01P03Example";
import C01P04Example from "./C01/P04/C01P04Example";
import C01P05Example from "./C01/P05/C01P05Example";
import C01P06Example from "./C01/P06/C01P06Example";
import C01P07Example from "./C01/P07/C01P07Example";
import C01P08Example from "./C01/P08/C01P08Example";
import C01P09Example from "./C01/P09/C01P09Example";
import C01P10Example from "./C01/P10/C01P10Example";
import C01P11Example from "./C01/P11/C01P11Example";
import C01P12Example from "./C01/P12/C01P12Example";

const Example: React.VFC = () => {
  const params = useParams();
  return (
    <>
      {params.chapterId === "1" && params.partId === "3" && <C01P03Example />}
      {params.chapterId === "1" && params.partId === "4" && <C01P04Example />}
      {params.chapterId === "1" && params.partId === "5" && <C01P05Example />}
      {params.chapterId === "1" && params.partId === "6" && <C01P06Example />}
      {params.chapterId === "1" && params.partId === "7" && <C01P07Example />}
      {params.chapterId === "1" && params.partId === "8" && <C01P08Example />}
      {params.chapterId === "1" && params.partId === "9" && <C01P09Example />}
      {params.chapterId === "1" && params.partId === "10" && <C01P10Example />}
      {params.chapterId === "1" && params.partId === "11" && <C01P11Example />}
      {params.chapterId === "1" && params.partId === "12" && <C01P12Example />}
    </>
  );
};

export default Example;
