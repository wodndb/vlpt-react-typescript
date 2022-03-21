import { useState } from "react";

const InputSample: React.VFC = () => {
  const [text, setText] = useState<string>('')
  
  // React.ChangeEventHandler<HTMLInputElement>
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // React.MouseEventHandler<HTMLButtonElement>
  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;