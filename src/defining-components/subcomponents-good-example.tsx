import { FC } from "react";

export type User = {
  id: string;
  name: string;
};

const getUsers = (): User[] => {
  return [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Doe",
    },
  ];
};

export const GoodExample: FC = () => {
  const users = getUsers();

  return (
    <div>
      <h2>Users list</h2>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

/**
 * this is preferred instead of creating this component inside the
 * `GoodExample` component
 */
const UserListItem = (user: User) => (
  <li>
    <span>id: {user.id}</span>
    <span>name: {user.name}</span>
  </li>
);
