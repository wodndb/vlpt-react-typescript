import React, { useCallback, useMemo, useReducer, useRef } from "react";
import CreateUser from "./components/CreateUser";
import UserList, { UserType } from "./components/UserList";
import useInputs2 from "./useInput2";

const countActiveUsers = (users: UserType[]) => {
  console.log("활성 사용자 수를 세는 중");
  return users.filter((user) => user.active).length;
};

const initialState: IReducerState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

type InputType = {
  username: string;
  email: string;
};

const reducer = (state: IReducerState, action: IReducerAction) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      if (action.name === undefined || action.value === undefined) return state;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      if (action.user === undefined) return state;
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      if (action.id === undefined) return state;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      if (action.id === undefined) return state;
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.id),
      };
    default: {
      console.log("Return default");
      return state;
    }
  }
};

interface IReducerState {
  inputs: InputType;
  users: UserType[];
}

interface IReducerAction {
  type: string;
  name?: string;
  value?: string;
  user?: UserType;
  id?: number;
}

export const Example02: React.VFC = () => {
  const [{ username, email }, onChange, reset] = useInputs2({
    username: "",
    email: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
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
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
};

export default Example02;
