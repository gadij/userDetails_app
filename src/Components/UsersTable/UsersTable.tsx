import React from 'react';  
import { User } from '../../types';  
import useStyles from './UsersTable.styles';  
import Table from '@mui/material/Table';  
import TableBody from '@mui/material/TableBody';  
import TableCell from '@mui/material/TableCell';  
import TableContainer from '@mui/material/TableContainer';  
import TableHead from '@mui/material/TableHead';  
import TableRow from '@mui/material/TableRow';  
import Paper from '@mui/material/Paper';  
  
type IProps = {  
  users: User[];  
  onUserClick: (id: number) => void;  
};  
  
const UsersTable: React.FC<IProps> = ({ users, onUserClick }: IProps) => {  
  const classes = useStyles();  
  
  return (  
    <TableContainer component={Paper} className={classes.tableContainer}>  
      <Table className={classes.table} aria-label="simple table">  
        <TableHead className={classes.tableHead}>  
          <TableRow>  
            <TableCell className={classes.tableHeader}>ID</TableCell>  
            <TableCell className={classes.tableHeader}>Name</TableCell>  
            <TableCell className={classes.tableHeader}>Email</TableCell>  
            <TableCell className={classes.tableHeader}>Age</TableCell>  
          </TableRow>  
        </TableHead>  
        <TableBody className={classes.tableBody}>  
          {users.map((user) => (  
            <TableRow  
              className={classes.tableRow}  
              key={user.id}  
              onClick={() => onUserClick(user.id)}  
            >  
              <TableCell className={classes.tableCell}>{user.id}</TableCell>  
              <TableCell className={classes.tableCell}>{user.name}</TableCell>  
              <TableCell className={classes.tableCell}>{user.email}</TableCell>  
              <TableCell className={classes.tableCell}>{user.age}</TableCell>  
            </TableRow>  
          ))}  
        </TableBody>  
      </Table>  
    </TableContainer>  
  );  
};  
  
export default React.memo(UsersTable);  