import React from 'react'
import { User } from '../../types';

type IProps = {
  users: User[]
  onUserClick: (id: number) => void
}

const UsersTable: React.FC<IProps> = ({ users, onUserClick}: IProps) => {
  return (
    <table>  
        <thead>  
          <tr>  
            <th>ID</th>  
            <th>Name</th>  
            <th>Email</th>  
            <th>Age</th>  
          </tr>  
        </thead>  
        <tbody>  
          {users.map(user => (  
            <tr key={user.id} onClick={() => onUserClick(user.id)}>  
              <td>{user.id}</td>  
              <td>{user.name}</td>  
              <td>{user.email}</td>  
              <td>{user.age}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
  )
}

export default UsersTable;