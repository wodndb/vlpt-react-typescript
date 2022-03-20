import { useParams } from "react-router-dom";
import C01P03Example from "./C01/P03/C01P03Example";
import C01P04Example from "./C01/P04/C01P04Example";
import C01P05Example from "./C01/P05/C01P05Example";
import C01P06Example from "./C01/P06/C01P06Example";
import C01P07Example from "./C01/P07/C01P07Example";

const Example: React.VFC = () => {
  const params = useParams();
  return (
    <>
      {params.chapterId === "1" && params.partId === "3" && <C01P03Example />}
      {params.chapterId === "1" && params.partId === "4" && <C01P04Example />}
      {params.chapterId === "1" && params.partId === "5" && <C01P05Example />}
      {params.chapterId === "1" && params.partId === "6" && <C01P06Example />}
      {params.chapterId === "1" && params.partId === "7" && <C01P07Example />}
    </>
  );
};

export default Example;
