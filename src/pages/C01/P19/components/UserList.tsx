import React from "react";
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

const User: React.FC<UserProps> = React.memo(({ user, onRemove, onToggle }) => {
  return (
    <div>
      <UserStyle onClick={() => onToggle(user.id)} active={user.active}>
        {user.username}
      </UserStyle>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

type UserListProps = {
  users: UserType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onRemove, onToggle }) => {
  console.log("UserList");
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

export default React.memo(UserList);
