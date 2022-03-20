import { Link, useParams } from "react-router-dom";

const NumOfExamples = [[0, 0, 2, 5, 4, 2, 4], [0], [0], [0], [0], [0], [0], [0]];

const PartPage: React.VFC = () => {
  const params = useParams()

  return (
    <>
      <h2>Chapter {params.chapterId} </h2>
      <h3>Part {params.partId} </h3>
      {(params.chapterId !== undefined && params.partId !== undefined) &&
        <Part chapterId={parseInt(params.chapterId)} partId={parseInt(params.partId)} />}
    </>
  )
}

type PartProps = {
  chapterId: number;
  partId: number;
}

const Part: React.FC<PartProps> = ({ chapterId, partId }) => {
  return (
    <div>
      <nav>
        <ul>
          {Array(NumOfExamples[chapterId - 1][partId - 1])
            .fill(0)
            .map((_, i) => {
              return (
                <li key={i}>
                  <Link to={`/Chapters/${chapterId}/Parts/${partId}/Examples/${i + 1}`}>Example {i + 1}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}

export default PartPage;