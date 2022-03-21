import React, { useRef, useState } from "react";

type InputType = {
  name: string;
  nickname: string;
}

const InputSample: React.VFC = () => {
  const [inputs, setInputs] = useState<InputType>({
    name: '',
    nickname: ''
  });

  const nameInput = useRef<HTMLInputElement>(null);

  const { name, nickname } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    
    if(nameInput.current !== null)
      nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="이름"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;