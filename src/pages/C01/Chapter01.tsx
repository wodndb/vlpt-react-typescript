import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Chapter01: React.VFC = () => {

  return (
    <>
      <div>
        <nav>
          <ul>
            {Array(22)
              .fill(0)
              .map((_, i): ReactElement => {
                return (
                  <li key={i + 1}>
                    <Link to={`/Chapters/1/Parts/${i + 1}`}>
                      Parts {i + 1}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </>
  );
};
