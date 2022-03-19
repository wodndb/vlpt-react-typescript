import { ReactElement } from "react";
import { Link } from "react-router-dom";
import C01Part03 from "./P03/C01Part03";
import C01Part04 from "./P04/C01Part04";
import C01Part05 from "./P05/C01Part05";

export const Chapter01: React.VFC = () => {
  const Parts = [null, null, <C01Part03 />, <C01Part04 />, <C01Part05 />];

  return (
    <>
      <div>
        <nav>
          <ul>
            {Array(Parts.length)
              .fill(0)
              .map((_, i): ReactElement => {
                return (
                  <li key={i + 1}>
                    {Parts[i] === null && <>Parts {i + 1}</>}
                    {Parts[i] !== null && (
                      <Link to={`/Chapters/1/Parts/${i + 1}`}>
                        Parts {i + 1}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </>
  );
};
