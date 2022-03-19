import styled from "styled-components";

type Hello3Props = {
  name?: string;  // Optional을 넣지 않으면 Typescript에서 에러를 발생시킨다.
  color: string;
}

const Hello3 = ({name = '이름없음', color} : Hello3Props) => {
  return <Hello3Style color={color}>안녕하세요 {name}</Hello3Style>
}

const Hello3Style = styled.div<{color: string}>`
  color: ${(props) => props.color};
`

export default Hello3;