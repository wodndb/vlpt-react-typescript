export type UserType = {
  id: number;
  username: string;
  email: string;
}

type UserProps = {
  user: UserType,
  onRemove: (id: number) => void;
}

const User: React.FC<UserProps> = ({ user, onRemove }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

type UserListProps = {
  users: UserType[],
  onRemove: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;