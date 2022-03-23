import React, { useRef, useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList, { UserType } from "./components/UserList";

type InputType = {
  username: '',
  email: ''
}

export const C01P16Example: React.VFC = () => {
  const [inputs, setInputs] = useState<InputType>({
    username: '',
    email: ''
  })

  const { username, email } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef<number>(4);
  const onCreate = () => {
    const user: UserType = {
      id: nextId.current,
      username,
      email,
      active: false
    }

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    })

    nextId.current += 1;
  }

  const onRemove = (id: number) => {
    // users 배열의 원소의 멤버인 user.id와 메소드 id가 일치하지 않는 원소만 추출하여 새로운 배열을 만듦.
    // 즉, user.id가 id인 것을 제거함.
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id: number) => {
    setUsers(users.map((user) => user.id === id ? {
      ...user,
      active: !user.active
    }:user))
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default C01P16Example;