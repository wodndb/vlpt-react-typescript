import React, { useCallback, useMemo, useRef, useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList, { UserType } from "./components/UserList";

const countActiveUsers = (users: UserType[]) => {
  console.log("활성 사용자 수를 세는 중");
  return users.filter((user) => user.active).length;
};

type InputType = {
  username: "";
  email: "";
};

export const C01P19Example: React.VFC = () => {
  const [inputs, setInputs] = useState<InputType>({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState<UserType[]>([
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
  ]);

  const nextId = useRef<number>(4);
  const onCreate = useCallback(() => {
    const user: UserType = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    // setUsers([...users, user]);
    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id: number) => {
    // users 배열의 원소의 멤버인 user.id와 메소드 id가 일치하지 않는 원소만 추출하여 새로운 배열을 만듦.
    // 즉, user.id가 id인 것을 제거함.
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id: number) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              active: !user.active,
            }
          : user
      )
    );
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
};

export default C01P19Example;
