export type UserType = {
  id: number;
  username: string;
  email: string;
}

const User:React.FC<{user:UserType}> = ({user}) =>{
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

const UserList: React.FC<{users:UserType[]}> = ({users}) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;