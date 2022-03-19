import React from "react";
import { Link } from "react-router-dom";

const C01Part03: React.VFC = () => {
  return (
    <div>
      <nav>
        <ul>
          {Array(2)
            .fill(0)
            .map((_, i) => {
              return (
                <li>
                  <Link to={`/Chapters/1/Parts/3/Examples/${i + 1}`}>Example {i + 1}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default C01Part03;
