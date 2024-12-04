import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import UsersTable from '../../Components/UsersTable/UsersTable';
import StyledButton from '../../Components/SearchButton/SearchButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import API from '../../API/api';
import { User } from '../../types';  
import useStyles from './MainPage.styles';
  
type IProps = {
  searchButtonLabel?: string
  pageTitle?: string
}

const MainPage: React.FC = ({ searchButtonLabel = 'Search', pageTitle = 'User List' }: IProps) => {  
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);  
  const [searchTerm, setSearchTerm] = useState<string>('');  
  const navigate = useNavigate();  
  
  useEffect(() => {  
    const loadUsers = async () => {  
      try {  
        const users = await API.fetchUsers();  
        setUsers(users);  
      } catch (error) {  
        // API class already logs the error, so no need to log it here
      }  
    };  
    loadUsers();  
  }, []);  
  
  const handleSearch = async () => {  
    try {  
      const users = await API.searchUsers(searchTerm);  
      setUsers(users);  
    } catch (error) {  
      // API class already logs the error, so no need to log it here 
    }  
  }; 

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {  
    if (event.key === 'Enter') {  
      handleSearch();  
    }  
  };  
  
  const handleUserClick = (id: number) => {  
    navigate(`/users/${id}`);  
  };  
  
  return (  
    <div className={classes.mainPage} data-testid="main-page">  
      <h1 className={classes.mainPageTitle}>{pageTitle}</h1>  
      <div className={classes.mainPageActionContainer}>
        <SearchBar searchTerm={searchTerm} handleChange={setSearchTerm} handleKeyDown={handleKeyDown} />
        <StyledButton handleClick={handleSearch}>{searchButtonLabel}</StyledButton>  
      </div>
      <UsersTable users={users} onUserClick={handleUserClick} />
    </div>  
  );  
};  
  
export default MainPage;  