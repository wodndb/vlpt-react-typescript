import Hello from "./components/Hello";

const Example02:React.VFC = ({...props}) => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default Example02;
