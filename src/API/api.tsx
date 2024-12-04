// api.ts  
import axios from 'axios';  
import { User } from '../types';  
  
class API {  
  static async fetchUsers(): Promise<User[]> {  
    try {  
      const response = await axios.get<User[]>('/users');  
      return response.data;  
    } catch (error) {  
      console.error('Error with fetching users:', error);  
      throw error;  
    }  
  }  
  
  static async searchUsers(searchTerm: string): Promise<User[]> {  
    console.log('searchTerm:', searchTerm);
    try {  
      const response = await axios.post<User[]>('/users/search', { filter: { name: searchTerm } });  
      return response.data;  
    } catch (error) {  
      console.error(`Error with searching for users with search term: ${searchTerm}`, error);  
      throw error;  
    }  
  }  
  
  static async fetchUserById(id: number): Promise<User> {  
    try {  
      const response = await axios.get<User>(`/users/${id}`);  
      return response.data;  
    } catch (error) {  
      console.error(`Error fetching user details with id: ${id}`, error);  
      throw error;  
    }  
  }  
}  
  
export default API;  