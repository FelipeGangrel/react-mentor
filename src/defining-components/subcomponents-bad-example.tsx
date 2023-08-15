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

export const BadExample: FC = () => {
  const users = getUsers();

  /**
   * One does not walk into Mordor defining components inside
   * another component.
   *
   * This is to be avoided because the `User` component will
   * be recreated every time the `BadExample` component renders.
   *
   * Do not define components during render. React will see a new component
   * type on every render and destroy the entire subtree's DOM nodes and state
   */
  const UserListItem = (user: User) => (
    <li>
      <span>id: {user.id}</span>
      <span>name: {user.name}</span>
    </li>
  );

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
