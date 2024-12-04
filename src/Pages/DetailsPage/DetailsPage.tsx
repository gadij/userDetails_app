import React, { useEffect, useState } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';  
import UserDetail from '../../Components/UserDetails/UserDetails';
import API from '../../APIActions/api';
import { User } from '../../types';
  
const DetailsPage: React.FC = () => {  
  const { id } = useParams();  
  const [user, setUser] = useState<null | User>(null);  
  const navigate = useNavigate(); 
  
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
    <div>  
      <button onClick={() => navigate(-1)}>Back</button> 
      <h1>User Details</h1>  
      <UserDetail user={user} />
    </div>  
  );  
};  
  
export default DetailsPage;  