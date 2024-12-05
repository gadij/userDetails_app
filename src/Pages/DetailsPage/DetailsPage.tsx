import React, { useEffect, useState } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';  
import Breadcrumbs from '@mui/material/Breadcrumbs';  
import Link from '@mui/material/Link';  
import Typography from '@mui/material/Typography';
import UserDetail from '../../Components/UserDetails/UserDetails';
import API from '../../API/api';
import { User, DetailsPageProps } from '../../types';
import useStyles from './DetailsPage.styles';

const DetailsPage: React.FC<DetailsPageProps> = (
  {
    breadcrumbLabel = 'Back To Main Page',
    pageTitle = 'User Details'
  }: DetailsPageProps) => {  
  const { id } = useParams();  
  const [user, setUser] = useState<null | User>(null);  
  const navigate = useNavigate(); 
  const classes = useStyles();

  useEffect(() => {  
    const userDetails = async () => {
      try {
        const user = await API.fetchUserById(Number(id));
        setUser(user);
      } catch (error) {
        console.error(`Error with fetching user details: with id: ${id}`, error);
      }
    } 
    userDetails()
  }, [id]);  
  
  if (!user) return <div>Loading...</div>;  
  
  return (  
    <div className={classes.detailsPageContainer}>  
      <Breadcrumbs>  
        <Link  
          underline="hover"  
          color="inherit"  
          onClick={() => navigate('/')}  
          style={{ cursor: 'pointer' }}  
        >  
          {breadcrumbLabel}
        </Link>  
        <Typography color="textPrimary">{pageTitle}</Typography>  
      </Breadcrumbs>  
      <UserDetail user={user} />
    </div>  
  );  
};  
  
export default DetailsPage;  