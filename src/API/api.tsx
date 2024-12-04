import axios from 'axios';  
import { User } from '../types';  
  
const getRequest = async (url: string, errorMessage: string) => {
  try {
    return axios.get(url);
  }
  catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
}
class API {  
  static async fetchUsers(): Promise<User[]> {  
    try {  
      const response = await getRequest('/users', 'Error with fetching users:');  
      return response.data;  
    } catch (error) {  
      throw error;  
    }  
  }  
  
  static async searchUsers(searchTerm: string): Promise<User[]> {  
    const payload = { filter: { name: searchTerm } };
    try {  
      const response = await axios.post<User[]>('/users/search', payload);  
      return response.data;  
    } catch (error) {  
      console.error(`Error with searching for users with search term: ${searchTerm}`, error);  
      throw error;  
    }  
  }  
  
  static async fetchUserById(id: number): Promise<User> {  
    try {  
      const response = await getRequest(`/users/${id}`, `Error fetching user details with id: ${id}`);  
      return response.data;  
    } catch (error) {  
      throw error;  
    }  
  }  
}  
  
export default API;  