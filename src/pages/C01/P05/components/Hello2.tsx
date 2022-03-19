import styled from "styled-components";

type Hello2Props = {
  name: string;
  color: string;
}

const Hello2:React.FC<Hello2Props> = ({name, color}) => {
  return <Hello2Style color={color}>안녕하세요 {name}</Hello2Style>
}

const Hello2Style = styled.div<{color: string}>`
  color: ${(props) => props.color};
`

export default Hello2;