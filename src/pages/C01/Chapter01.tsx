import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Chapter01: React.VFC = () => {
  const Parts = [null, null, true, true, true, true];

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
