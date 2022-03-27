import React, { useContext } from "react";
import { UserDispatch } from "../C01P22Example";
import UserStyle from "./UserStyle";

export type UserType = {
  id: number;
  username: string;
  email: string;
  active: boolean;
};

type UserProps = {
  user: UserType;
};

const User: React.FC<UserProps> = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch);
  if(dispatch === null) return <></>;

  return (
    <div>
      <UserStyle onClick={() => dispatch({type: 'TOGGLE_USER', id: user.id})} active={user.active}>
        {user.username}
      </UserStyle>{" "}
      <span>({user.email})</span>
      <button onClick={() => dispatch({type: 'REMOVE_USER', id: user.id})}>삭제</button>
    </div>
  );
});

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList);
