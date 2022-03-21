import { useState } from "react";

type InputType = {
  name: string;
  nickname: string;
}

const InputSample: React.VFC = () => {
  const [inputs, setInputs] = useState<InputType>({
    name: '',
    nickname: ''
  });

  const {name, nickname} = inputs;
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name}/>
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}: ({nickname})
      </div>
    </div>
  );
}

export default InputSample;