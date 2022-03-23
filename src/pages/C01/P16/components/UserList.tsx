import { useEffect } from "react";
import UserStyle from "./UserStyle";

export type UserType = {
  id: number;
  username: string;
  email: string;
  active: boolean;
};

type UserProps = {
  user: UserType;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const User: React.FC<UserProps> = ({ user, onRemove, onToggle }) => {
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   console.log(user);
  //   return () => {
  //     console.log("user가 바뀌기 전..");
  //     console.log(user);
  //   };
  // }, [user]);

  useEffect(() => {
    console.log(user);
  })

  return (
    <div>
      <UserStyle onClick={() => onToggle(user.id)} active={user.active}>
        {user.username}
      </UserStyle>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

type UserListProps = {
  users: UserType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
