import Hello3 from "./components/Hello3";

// Chapter 01 | Part 04 | Ex 3 - 기본 값 설정
// defaultProps은 deprecated될 예정이라는 소식을 들어서 다른 방법으로 기본 값 설정을 구현함.
// 자세한 구현 내용은 Hello3 컴포넌트를 구현한 코드를 참고 바람.
const Example03:React.VFC = () => {
  return (
    <>
      <Hello3 name="react" color="red" />
      <Hello3 color="pink" />
    </>
  )
}

export default Example03;