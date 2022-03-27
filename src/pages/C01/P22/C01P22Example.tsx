import React, { Dispatch, useMemo, useReducer } from "react";
import CreateUser from "./components/CreateUser";
import UserList, { UserType } from "./components/UserList";

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

export const UserDispatch = React.createContext<Dispatch<IReducerAction> | null>(null);

export const C01P22Example: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
};

export default C01P22Example;
