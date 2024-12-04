import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import UsersTable from '../../Components/UsersTable/UsersTable';
import StyledButton from '../../Components/SearchButton/SearchButton';
import API from '../../APIActions/api';
import { User } from '../../types';  
import useStyles from './MainPage.styles';
import SearchBar from '../../Components/SearchBar/SearchBar';
  
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
        console.error('Error with loading users:', error);  
      }  
    };  
    loadUsers();  
  }, []);  
  
  const handleSearch = async () => {  
    try {  
      const users = await API.searchUsers(searchTerm);  
      setUsers(users);  
    } catch (error) {  
      console.error(`Error with searching for users with search: ${searchTerm}`, error);  
    }  
  }; 
  
  const handleUserClick = (id: number) => {  
    navigate(`/users/${id}`);  
  };  
  
  return (  
    <div className={classes.mainPage} data-testid="main-page">  
      <h1 className={classes.mainPageTitle}>{pageTitle}</h1>  
      <div className={classes.mainPageActionContainer}>
        <SearchBar searchTerm={searchTerm} handleChange={setSearchTerm} />
        <StyledButton handleClick={handleSearch}>{searchButtonLabel}</StyledButton>  
      </div>
      <UsersTable users={users} onUserClick={handleUserClick} />
    </div>  
  );  
};  
  
export default MainPage;  