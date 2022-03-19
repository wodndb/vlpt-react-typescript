import GrayBox from "./components/GrayBox";
import Hello from "./components/Hello";
import NameStyle from "./components/NameStyle";

// Chapter 01 | Part 04 | Ex 5 - 주석
export const Example05:React.FC = () => {
  const name='react';
  return (
    <>
      {/* 주석은 화면에 보이지 않습니다. */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다. */
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석을 작성할 수 있습니다.
      />
      <NameStyle>{name}</NameStyle>
      <GrayBox />
    </>
  )
}

export default Example05;

