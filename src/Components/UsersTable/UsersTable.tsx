import React from 'react';  
import Table from '@mui/material/Table';  
import TableBody from '@mui/material/TableBody';  
import TableCell from '@mui/material/TableCell';  
import TableContainer from '@mui/material/TableContainer';  
import TableHead from '@mui/material/TableHead';  
import TableRow from '@mui/material/TableRow';  
import Paper from '@mui/material/Paper';  
import { UserTableProps } from '../../types';  
import useStyles from './UsersTable.styles';  
  
  
const UsersTable: React.FC<UserTableProps> = ({ users, onUserClick }: UserTableProps) => {  
  const classes = useStyles();  
  
  return (  
    <TableContainer component={Paper} className={classes.tableContainer}>  
      <Table className={classes.table}>  
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