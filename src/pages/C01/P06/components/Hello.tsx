import styled from "styled-components";

type HelloProps = {
  name?: string;  // Optional을 넣지 않으면 Typescript에서 에러를 발생시킨다.
  color: string;
  isSpecial?: boolean;
}

const Hello: React.FC<HelloProps> = ({ name = '이름없음', color, isSpecial }) => {
  return (
    <HelloStyle color={color}>
      {/*isSpecial ? <b>*</b> : null*/}
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </HelloStyle>
  )
}

const HelloStyle = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`

export default Hello;