import React, { useRef, useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList, { UserType } from "./components/UserList";

type InputType = {
  username: '',
  email: ''
}

export const C01P14Example: React.VFC = () => {
  const [inputs, setInputs] = useState<InputType>({
    username: '',
    email: ''
  })

  const {username, email} = inputs;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    }
  ]);

  const nextId = useRef<number>(4);
  const onCreate = () => {
    const user:UserType = {
      id: nextId.current,
      username,
      email
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
      setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default C01P14Example;