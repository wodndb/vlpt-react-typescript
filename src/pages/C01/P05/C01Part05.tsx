import { Link } from "react-router-dom";

const C01Part05:React.VFC = () => {
  return (
  <div>
    <nav>
      <ul>
        {Array(4).fill(0).map((_, i) => {
          return (
            <li>
              <Link to={`/Chapters/1/Parts/5/Examples/${i + 1}`}>
                Example {i + 1}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </div>
  )
}

export default C01Part05;