import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Chapters: React.VFC = () => {
    return (
        <>
          <div>
            <nav>
              <ul>
                {Array(8).fill(0).map((_, i):ReactElement => {
                  return (
                  <li key={i + 1}>
                    <Link to={`/Chapters/${i + 1}`}>Chapter {i + 1}</Link>
                  </li>);
                })}
              </ul>
            </nav>
          </div>
        </>
      );
}

export default Chapters;