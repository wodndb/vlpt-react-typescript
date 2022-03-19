import { Link } from "react-router-dom";

const C01Part04: React.VFC = () => {
  return (
    <div>
      <nav>
        <ul>
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <li key={i}>
                  <Link to={`/Chapters/1/Parts/4/Examples/${i + 1}`}>
                    Example {i + 1}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default C01Part04;
