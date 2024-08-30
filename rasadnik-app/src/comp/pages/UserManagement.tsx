import React from 'react';
import { User, UserManager } from '../classes/UserManager';

const UserManagement: React.FC = () => {
  const initialUsers = [
    new User(1, 'john_doe', 'john@example.com'),
  
  ];

  const userManager = new UserManager(initialUsers);

  const allUsers = userManager.getAllUsers();

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {allUsers.map(user => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;