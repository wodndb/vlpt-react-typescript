import Hello from "./components/Hello";

// Chapter 1 | Part 4 | Ex1 : JSX - 꼭 닫혀야 하는 태그
const Example01: React.VFC = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input />
      <br />
    </div>
  );
};

export default Example01;
