import React from 'react'
import { User } from '../../types';
import useStyles from './UserDetails.styles';

type IProps = {
  user: User
}

const UserDetails: React.FC<IProps> = ({ user }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.userDetailContainer}>
      <div className={classes.userDetailContent}>
        <p>
          <label>
            ID:
          </label> 
          <span className={classes.value}>
            {user.id}
          </span>
        </p>  
        <p>
          <label>
            Name:
          </label> 
          <span className={classes.value}>
            {user.name}
          </span>
        </p>  
        <p>
          <label>
            Email:
          </label> 
          <span className={classes.value}>
            {user.email}
          </span>
        </p>  
        <p>
          <label>
            Age:
          </label> 
          <span className={classes.value}>
            {user.age}
          </span>
        </p> 
      </div>
    </div>
  )
}

export default React.memo(UserDetails);