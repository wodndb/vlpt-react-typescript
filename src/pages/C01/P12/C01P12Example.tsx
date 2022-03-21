import { useRef } from "react";
import UserList, { UserType } from "./components/UserList";

const C01P12Example: React.VFC = () => {
  const users:UserType[] = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef<number>(4);
  const onCreate = () =>{
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default C01P12Example;