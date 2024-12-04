import React from 'react'
import { User } from '../../types';

type IProps = {
  user: User
}
const UserDetails: React.FC<IProps> = ({user}: IProps) => {
  return (
    <div>
      <p>ID: {user.id}</p>  
      <p>Name: {user.name}</p>  
      <p>Email: {user.email}</p>  
      <p>Age: {user.age}</p> 
    </div>
  )
}

export default UserDetails;