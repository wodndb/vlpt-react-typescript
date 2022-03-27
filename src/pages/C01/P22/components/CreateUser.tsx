import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "../C01P22Example";
import useInputs from "../useInput";


const CreateUser:React.VFC = () => {

  const nextId = useRef(4);

  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const dispatch = useContext(UserDispatch);

  const OnCreate = () => {
    if(dispatch === null) return;
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={OnCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);